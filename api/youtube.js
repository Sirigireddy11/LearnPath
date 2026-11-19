export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  const { course, lesson } = req.query;

  let { language = "English" } = req.query;

  if (!course || !lesson) {
    return res.status(400).json({
      error: "Course and lesson are required"
    });
  }

  if (Array.isArray(language)) {
    language = language[0];
  }

  const selectedLanguage =
    String(language).trim() || "English";

  const apiKey = process.env.YOUTUBE_API_KEY;

  if (!apiKey) {
    return res.status(500).json({
      error: "YouTube API key is not configured"
    });
  }

  const searchQuery =
    `${course} ${lesson} tutorial in ${selectedLanguage}`;

  try {
    const params = new URLSearchParams({
      part: "snippet",
      q: searchQuery,
      type: "video",
      videoEmbeddable: "true",
      videoSyndicated: "true",
      maxResults: "5",
      safeSearch: "strict",
      key: apiKey,
      regionCode: "IN"
    });

    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?${params}`
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        error: data.error?.message || "YouTube search failed"
      });
    }

    const videos = (data.items || []).map(item => ({
      videoId: item.id.videoId,
      title: item.snippet.title,
      channel: item.snippet.channelTitle
    }));

    return res.status(200).json({ videos });

  } catch (error) {
    return res.status(500).json({
      error: "Unable to fetch YouTube videos"
    });
  }
}
