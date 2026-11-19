
export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  const { course, lesson, language = "English" } = req.query;

  if (!course || !lesson) {
    return res.status(400).json({
      error: "Course and lesson are required"
    });
  }

  const apiKey = process.env.YOUTUBE_API_KEY;

  if (!apiKey) {
    return res.status(500).json({
      error: "YouTube API key is not configured"
    });
  }

  const languageNames = {
    English: "English",
    Telugu: "Telugu",
    Tamil: "Tamil",
    Hindi: "Hindi"
  };

  const selectedLanguage =
    languageNames[language] || "English";

  const searchQuery =
    `${course} ${lesson} tutorial ${selectedLanguage}`;

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
