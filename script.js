
const courses = [
  // 1. Programming Languages
  { name: "Python Programming", category: "Programming Languages", emoji: "🐍", description: "Learn Python from basics to projects.", price: 51 },
  { name: "Java Programming", category: "Programming Languages", emoji: "☕", description: "Learn Java, OOP and application development.", price: 51 },
  { name: "C Programming", category: "Programming Languages", emoji: "💻", description: "Learn variables, loops, functions and pointers.", price: 51 },
  { name: "C++ Programming", category: "Programming Languages", emoji: "⚙️", description: "Learn C++, OOP and data structures.", price: 51 },
  { name: "C# Programming", category: "Programming Languages", emoji: "🔷", description: "Build applications using C#.", price: 51 },
  { name: "JavaScript Programming", category: "Programming Languages", emoji: "🟨", description: "Learn JavaScript for interactive websites.", price: 51 },
  { name: "TypeScript Programming", category: "Programming Languages", emoji: "🔵", description: "Learn typed JavaScript development.", price: 51 },
  { name: "Go Programming", category: "Programming Languages", emoji: "🐹", description: "Learn Go for modern backend systems.", price: 55 },
  { name: "Rust Programming", category: "Programming Languages", emoji: "🦀", description: "Learn safe and efficient systems programming.", price: 55 },
  { name: "Kotlin Programming", category: "Programming Languages", emoji: "📱", description: "Learn Kotlin for modern application development.", price: 55 },

  // 2. Web Development
  { name: "HTML and CSS", category: "Web Development", emoji: "🎨", description: "Create and style web pages.", price: 51 },
  { name: "Frontend Web Development", category: "Web Development", emoji: "🖥️", description: "Build the part of websites users see.", price: 55 },
  { name: "Backend Web Development", category: "Web Development", emoji: "🔧", description: "Learn servers, APIs and application logic.", price: 55 },
  { name: "Full-Stack Web Development", category: "Web Development", emoji: "🌐", description: "Build complete websites from frontend to backend.", price: 60 },
  { name: "React.js Development", category: "Web Development", emoji: "⚛️", description: "Build interactive interfaces with React.", price: 55 },
  { name: "Node.js and Express.js", category: "Web Development", emoji: "🟢", description: "Create backend applications and APIs.", price: 55 },
  { name: "Angular Development", category: "Web Development", emoji: "🅰️", description: "Build web applications using Angular.", price: 55 },
  { name: "Next.js Development", category: "Web Development", emoji: "▲", description: "Learn modern React web development.", price: 55 },
  { name: "PHP and Laravel", category: "Web Development", emoji: "🐘", description: "Build server-side websites with PHP.", price: 55 },
  { name: "WordPress Development", category: "Web Development", emoji: "📝", description: "Create websites using WordPress.", price: 51 },

  // 3. AI and Data
  { name: "Artificial Intelligence Fundamentals", category: "AI and Data", emoji: "🤖", description: "Understand AI concepts and applications.", price: 55 },
  { name: "Machine Learning", category: "AI and Data", emoji: "🧠", description: "Train models to learn from data.", price: 55 },
  { name: "Deep Learning", category: "AI and Data", emoji: "🔬", description: "Learn neural networks and deep learning.", price: 60 },
  { name: "Generative AI Fundamentals", category: "AI and Data", emoji: "✨", description: "Explore AI tools that generate content.", price: 55 },
  { name: "Prompt Engineering", category: "AI and Data", emoji: "💬", description: "Learn to write effective AI prompts.", price: 51 },
  { name: "Natural Language Processing", category: "AI and Data", emoji: "🗣️", description: "Teach computers to work with human language.", price: 55 },
  { name: "Computer Vision", category: "AI and Data", emoji: "👁️", description: "Help computers understand images and video.", price: 55 },
  { name: "Data Science with Python", category: "AI and Data", emoji: "📊", description: "Analyze data and build predictive models.", price: 55 },

  // 4. Databases and Data Engineering
  { name: "SQL and Database Fundamentals", category: "Databases and Data Engineering", emoji: "🗄️", description: "Learn tables, queries and database design.", price: 51 },
  { name: "MySQL Database", category: "Databases and Data Engineering", emoji: "🐬", description: "Store and manage data using MySQL.", price: 51 },
  { name: "PostgreSQL Database", category: "Databases and Data Engineering", emoji: "🐘", description: "Learn relational databases with PostgreSQL.", price: 55 },
  { name: "MongoDB", category: "Databases and Data Engineering", emoji: "🍃", description: "Learn document-based NoSQL databases.", price: 51 },
  { name: "Oracle Database and PL/SQL", category: "Databases and Data Engineering", emoji: "🔴", description: "Learn Oracle SQL and procedural database programming.", price: 55 },
  { name: "Data Engineering", category: "Databases and Data Engineering", emoji: "🔄", description: "Build pipelines to process and move data.", price: 60 },
  { name: "Big Data with Apache Spark", category: "Databases and Data Engineering", emoji: "⚡", description: "Process large datasets with Spark.", price: 60 },

  // 5. Cloud and DevOps
  { name: "Cloud Computing Fundamentals", category: "Cloud and DevOps", emoji: "☁️", description: "Understand cloud services and deployment.", price: 51 },
  { name: "Amazon Web Services (AWS)", category: "Cloud and DevOps", emoji: "🌩️", description: "Learn core AWS cloud services.", price: 60 },
  { name: "Microsoft Azure", category: "Cloud and DevOps", emoji: "🔷", description: "Explore Microsoft's cloud platform.", price: 60 },
  { name: "Google Cloud Platform", category: "Cloud and DevOps", emoji: "🌥️", description: "Learn Google Cloud services.", price: 60 },
  { name: "Linux Administration", category: "Cloud and DevOps", emoji: "🐧", description: "Learn Linux commands and system management.", price: 51 },
  { name: "Git and GitHub", category: "Cloud and DevOps", emoji: "🐙", description: "Track code changes and collaborate on projects.", price: 51 },
  { name: "Docker and Containers", category: "Cloud and DevOps", emoji: "🐳", description: "Package and run applications in containers.", price: 55 },
  { name: "Kubernetes", category: "Cloud and DevOps", emoji: "☸️", description: "Manage containerized applications.", price: 60 },
  { name: "DevOps and CI/CD", category: "Cloud and DevOps", emoji: "⚙️", description: "Automate software building, testing and delivery.", price: 55 },
  { name: "Terraform and Infrastructure as Code", category: "Cloud and DevOps", emoji: "🏗️", description: "Manage cloud infrastructure using code.", price: 60 },

  // 6. Cybersecurity and Networking
  { name: "Cybersecurity Fundamentals", category: "Cybersecurity and Networking", emoji: "🔐", description: "Understand threats and security protection.", price: 51 },
  { name: "Computer Networking", category: "Cybersecurity and Networking", emoji: "🌐", description: "Learn network protocols and connectivity.", price: 51 },
  { name: "Ethical Hacking Fundamentals", category: "Cybersecurity and Networking", emoji: "🛡️", description: "Study authorized security testing basics.", price: 55 },
  { name: "Network Security", category: "Cybersecurity and Networking", emoji: "🔒", description: "Learn to protect networks and systems.", price: 55 },
  { name: "Digital Forensics Fundamentals", category: "Cybersecurity and Networking", emoji: "🔎", description: "Learn the basics of digital evidence analysis.", price: 55 },

  // 7. Mobile Development and Testing
  { name: "Android App Development", category: "Mobile Development and Testing", emoji: "📱", description: "Build Android apps.", price: 55 },
  { name: "iOS App Development", category: "Mobile Development and Testing", emoji: "🍎", description: "Build apps for Apple devices.", price: 60 },
  { name: "Flutter App Development", category: "Mobile Development and Testing", emoji: "🦋", description: "Build cross-platform mobile applications.", price: 55 },
  { name: "React Native Development", category: "Mobile Development and Testing", emoji: "📲", description: "Create mobile apps using React Native.", price: 55 },
  { name: "Software Testing Fundamentals", category: "Mobile Development and Testing", emoji: "🧪", description: "Learn test cases, defects and quality assurance.", price: 51 },
  { name: "Automation Testing with Selenium", category: "Mobile Development and Testing", emoji: "🤖", description: "Automate browser tests using Selenium.", price: 55 },

  // 8. Specialized Technologies
  { name: "Blockchain Fundamentals", category: "Specialized Technologies", emoji: "🔗", description: "Understand blockchain and distributed ledgers.", price: 55 },
  { name: "Game Development with Unity", category: "Specialized Technologies", emoji: "🎮", description: "Create interactive games using Unity.", price: 55 },
  { name: "Internet of Things (IoT)", category: "Specialized Technologies", emoji: "📡", description: "Connect devices, sensors and software.", price: 55 },
  { name: "Robotics and Embedded Systems", category: "Specialized Technologies", emoji: "🦾", description: "Explore robots, microcontrollers and embedded code.", price: 60 }
];

// ================================
// GET PAGE ELEMENTS
// ================================

const grid = document.getElementById("courseGrid");
const searchInput = document.getElementById("searchInput");
const languageSelect = document.getElementById("languageSelect");
const message = document.getElementById("message");
const searchButton = document.getElementById("searchButton");

if (!grid || !searchInput || !languageSelect || !message || !searchButton) {
  console.error("LearnPath: Required homepage elements were not found.");
} else {

// ================================
// CATEGORY FILTER
// ================================
// ================================
// LOAD SAVED LANGUAGE PREFERENCE
// ================================


const supportedLanguages = [
  "English",
  "Telugu",
  "Hindi",
  "Tamil",
  "Kannada",
  "Malayalam",
  "Bengali",
  "Marathi",
  "Gujarati",
  "Punjabi",
  "Urdu",
  "Arabic",
  "Chinese",
  "Japanese",
  "Korean",
  "French",
  "German",
  "Spanish",
  "Portuguese",
  "Italian",
  "Russian",
  "Indonesian",
  "Malay",
  "Thai",
  "Vietnamese",
  "Turkish",
  "Persian",
  "Nepali",
  "Sinhala",
  "Swahili"
];


const savedLanguage = localStorage.getItem("learnpath-language");

if (supportedLanguages.includes(savedLanguage)) {
  languageSelect.value = savedLanguage;
}
console.log("Saved language:", savedLanguage);
console.log("Selected language:", languageSelect.value);

const categorySelect = document.createElement("select");
categorySelect.id = "categorySelect";
categorySelect.setAttribute("aria-label", "Filter courses by category");

const allOption = document.createElement("option");
allOption.value = "All";
allOption.textContent = "All technology categories";
categorySelect.appendChild(allOption);

const categories = [...new Set(courses.map(course => course.category))];

categories.forEach(category => {
  const option = document.createElement("option");
  option.value = category;
  option.textContent = category;
  categorySelect.appendChild(option);
});

searchInput.parentElement.insertAdjacentElement("afterend", categorySelect);

// ================================
// SEARCH SUGGESTIONS
// ================================

const suggestionBox = document.createElement("div");
suggestionBox.id = "courseSuggestions";

suggestionBox.style.cssText = `
  display: none;
  background: white;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin: 5px auto;
  padding: 6px;
  max-width: 680px;
  max-height: 250px;
  overflow-y: auto;
  box-shadow: 0 5px 15px rgba(0,0,0,0.10);
  position: relative;
  z-index: 100;
`;

categorySelect.insertAdjacentElement("afterend", suggestionBox);

let selectedSuggestion = -1;

// Calculate spelling difference between two words
function getEditDistance(a, b) {
  const dp = Array.from(
    { length: a.length + 1 },
    () => Array(b.length + 1).fill(0)
  );

  for (let i = 0; i <= a.length; i++) dp[i][0] = i;
  for (let j = 0; j <= b.length; j++) dp[0][j] = j;

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;

      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
    }
  }

  return dp[a.length][b.length];
}

// Show suggestions while typing
function showCourseSuggestions() {
  const query = searchInput.value.trim().toLowerCase();
  suggestionBox.innerHTML = "";
  selectedSuggestion = -1;

  if (!query) {
    suggestionBox.style.display = "none";
    return;
  }

  const queryWords = query.split(/\s+/);

  const matches = courses.map(course => {
    const name = course.name.toLowerCase();
    const category = course.category.toLowerCase();
    const description = course.description.toLowerCase();
    const searchableText = `${name} ${category} ${description}`;
    const courseWords = searchableText.split(/[\s,./()-]+/);

    let score = 0;

    if (name.includes(query)) score += 15;
    if (category.includes(query)) score += 8;
    if (description.includes(query)) score += 5;

    queryWords.forEach(word => {
      if (!word) return;

      if (courseWords.some(courseWord => courseWord.startsWith(word))) {
        score += 8;
      } else if (word.length >= 4) {
        const closestDistance = Math.min(
          ...courseWords.map(courseWord =>
            getEditDistance(word, courseWord)
          )
        );

        if (closestDistance <= 1) score += 6;
      }
    });

    return { course, score };
  })
  .filter(item => item.score > 0)
  .sort((a, b) => b.score - a.score)
  .slice(0, 6);

  if (matches.length === 0) {
    suggestionBox.textContent = "No similar courses available yet.";
    suggestionBox.style.display = "block";
    return;
  }

  matches.forEach(item => {
    const suggestion = document.createElement("button");
    suggestion.type = "button";
    suggestion.textContent = `${item.course.emoji} ${item.course.name}`;

    suggestion.style.cssText = `
      display: block;
      width: 100%;
      text-align: left;
      padding: 11px;
      border: none;
      background: white;
      cursor: pointer;
      border-radius: 7px;
      font-size: 14px;
    `;

    suggestion.addEventListener("mouseenter", () => {
      suggestion.style.background = "#f0f4ff";
    });

    suggestion.addEventListener("mouseleave", () => {
      suggestion.style.background = "white";
    });

    suggestion.addEventListener("click", () => {
      searchInput.value = item.course.name;
      suggestionBox.style.display = "none";
      selectedSuggestion = -1;
      searchCourses();
    });

    suggestionBox.appendChild(suggestion);
  });

  suggestionBox.style.display = "block";
}

searchInput.addEventListener("input", showCourseSuggestions);

// Hide suggestions when clicking outside
document.addEventListener("click", event => {
  if (
    !suggestionBox.contains(event.target) &&
    event.target !== searchInput
  ) {
    suggestionBox.style.display = "none";
    selectedSuggestion = -1;
  }
});

// Keyboard navigation
function highlightSuggestion(index) {
  const buttons = suggestionBox.querySelectorAll("button");

  buttons.forEach((button, i) => {
    button.style.background =
      i === index ? "#e8edff" : "white";

    button.setAttribute(
      "aria-selected",
      i === index ? "true" : "false"
    );
  });

  selectedSuggestion = index;
}

searchInput.addEventListener("keydown", event => {
  const buttons = suggestionBox.querySelectorAll("button");

  if (event.key === "ArrowDown" && buttons.length) {
    event.preventDefault();
    highlightSuggestion(
      Math.min(selectedSuggestion + 1, buttons.length - 1)
    );
  }

  if (event.key === "ArrowUp" && buttons.length) {
    event.preventDefault();
    highlightSuggestion(
      Math.max(selectedSuggestion - 1, 0)
    );
  }

  if (event.key === "Enter" && selectedSuggestion >= 0) {
    event.preventDefault();
    buttons[selectedSuggestion].click();
    selectedSuggestion = -1;
  }

  if (event.key === "Escape") {
    suggestionBox.style.display = "none";
    selectedSuggestion = -1;
  }
});

// ================================
// VIEW ALL COURSES BUTTON
// ================================

const viewAllButton = document.createElement("button");
viewAllButton.id = "viewAllCoursesButton";
viewAllButton.type = "button";
viewAllButton.textContent = "All Courses";

viewAllButton.style.cssText = `
  display: block;
  margin: 30px auto 10px;
  padding: 13px 25px;
  border-radius: 10px;
  background: #5141a8;
  color: white;
`;

grid.insertAdjacentElement("afterend", viewAllButton);

let showingAllCourses = false;

// ================================
// COURSE DETAILS AND PAYMENT INFO
// ================================

const modalStyle = document.createElement("style");

modalStyle.textContent = `
  .course-modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(20, 18, 45, 0.65);
    display: none;
    align-items: center;
    justify-content: center;
    padding: 18px;
    z-index: 2000;
  }

  .course-modal {
    background: white;
    width: 100%;
    max-width: 480px;
    padding: 28px;
    border-radius: 18px;
    position: relative;
    max-height: 90vh;
    overflow-y: auto;
    box-shadow: 0 20px 60px rgba(0,0,0,0.2);
  }

  .course-modal-close {
    position: absolute;
    right: 16px;
    top: 14px;
    background: #f0eff8;
    color: #29264f;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    padding: 0;
    font-size: 21px;
  }

  .course-modal h2 {
    color: #29264f;
    margin: 15px 35px 10px 0;
    font-size: 24px;
  }

  .course-modal p {
    color: #696b7c;
    line-height: 1.7;
  }

  .course-modal-price {
    font-size: 28px;
    font-weight: 800;
    color: #5141a8;
    margin: 15px 0;
  }

  .course-payment-info {
    background: #f5f3ff;
    padding: 15px;
    border-radius: 12px;
    margin: 18px 0;
  }

  .course-payment-info h3 {
    margin: 0 0 8px;
    color: #29264f;
    font-size: 16px;
  }

  .course-payment-info ul {
    margin: 5px 0;
    padding-left: 20px;
    color: #5141a8;
  }

  .course-payment-note {
    font-size: 12px;
    color: #777 !important;
  }

  .course-preview-button {
    width: 100%;
    background: #5141a8;
    color: white;
    padding: 14px;
    margin-top: 8px;
  }

  .course-preview-button:hover {
    background: #6551c9;
  }

  @media (max-width: 500px) {
    .course-modal {
      padding: 22px;
    }
  }
`;

document.head.appendChild(modalStyle);

const modalOverlay = document.createElement("div");
modalOverlay.className = "course-modal-overlay";
modalOverlay.setAttribute("aria-hidden", "true");

modalOverlay.innerHTML = `
  <div class="course-modal" role="dialog" aria-modal="true"
       aria-labelledby="courseModalTitle">
    <button class="course-modal-close" type="button"
            aria-label="Close course details">&times;</button>

    <div id="courseModalEmoji" style="font-size:42px;"></div>
    <h2 id="courseModalTitle"></h2>
    <p id="courseModalCategory"></p>
    <p id="courseModalDescription"></p>

    <div class="course-modal-price" id="courseModalPrice"></div>

    <div class="course-payment-info">
      <h3>Payment methods</h3>
      <ul>
        <li>UPI</li>
        <li>Debit and Credit Cards</li>
        <li>Net Banking</li>
      </ul>
      <p class="course-payment-note">
        Payment integration is not enabled yet. These are planned
        payment options; no payment will be collected here.
      </p>
    </div>

    <button class="course-preview-button" id="coursePreviewButton"
            type="button">Preview Lessons</button>
  </div>
`;

document.body.appendChild(modalOverlay);

const modalCloseButton =
  modalOverlay.querySelector(".course-modal-close");

let selectedCourse = null;

function closeCourseModal() {
  modalOverlay.style.display = "none";
  modalOverlay.setAttribute("aria-hidden", "true");
  selectedCourse = null;
}

function openCourseDetails(course) {
  selectedCourse = course;

  document.getElementById("courseModalEmoji").textContent = course.emoji;
  document.getElementById("courseModalTitle").textContent = course.name;
  document.getElementById("courseModalCategory").textContent = course.category;
  document.getElementById("courseModalDescription").textContent =
    course.description;
  document.getElementById("courseModalPrice").textContent =
    `Course price: ₹${course.price}`;

  modalOverlay.style.display = "flex";
  modalOverlay.setAttribute("aria-hidden", "false");
  modalCloseButton.focus();
}

modalCloseButton.addEventListener("click", closeCourseModal);

modalOverlay.addEventListener("click", event => {
  if (event.target === modalOverlay) {
    closeCourseModal();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && modalOverlay.style.display === "flex") {
    closeCourseModal();
  }
});

document.getElementById("coursePreviewButton").addEventListener("click", () => {
  if (!selectedCourse) return;

  const url =
    "lesson.html?course=" +
    encodeURIComponent(selectedCourse.name) +
    "&language=" +
    encodeURIComponent(languageSelect.value);

  window.location.href = url;
});

// ================================
// COURSE PAGE URL
// ================================

function makeLessonPageURL(topic) {
  return "lesson.html?course=" + encodeURIComponent(topic) +
    "&language=" + encodeURIComponent(languageSelect.value);
}

// ================================
// RENDER COURSE CARDS
// ================================

function renderCourses(list) {
  grid.innerHTML = "";
  message.textContent = "";

  if (list.length === 0) {
    message.textContent =
      "No matching courses found. Try another keyword.";
    return;
  }

  list.forEach(course => {
    const card = document.createElement("article");
    card.className = "course-card";

    const emoji = document.createElement("div");
    emoji.className = "emoji";
    emoji.textContent = course.emoji;

    const title = document.createElement("h3");
    title.textContent = course.name;

    const category = document.createElement("p");
    category.className = "course-category";
    category.textContent = course.category;

    const description = document.createElement("p");
    description.textContent = course.description;

    // Price is intentionally not displayed on the course card.

    const link = document.createElement("a");
    link.href = makeLessonPageURL(course.name);
    link.textContent = "Start Learning →";

    link.addEventListener("click", event => {
      event.preventDefault();
      openCourseDetails(course);
    });

    card.append(emoji, title, category, description, link);
    grid.appendChild(card);
  });

  message.textContent =
    `Showing ${list.length} course${list.length === 1 ? "" : "s"}.`;
}

// ================================
// SEARCH AND CATEGORY FILTER
// ================================

function searchCourses() {
  const query = searchInput.value.trim().toLowerCase();
  const selectedCategory = categorySelect.value;

  const matches = courses.filter(course => {
    const searchableText =
      `${course.name} ${course.category} ${course.description}`.toLowerCase();

    const matchesSearch = !query || searchableText.includes(query);

    const matchesCategory =
      selectedCategory === "All" ||
      course.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  showingAllCourses = false;
  viewAllButton.textContent = "All Courses";
  renderCourses(matches);

  // Keep the option to explore a topic outside the current course list.
  if (query) {
    const exactCourseExists = courses.some(course =>
      course.name.toLowerCase() === query
    );

    if (!exactCourseExists) {
      const resultCard = document.createElement("article");
      resultCard.className = "course-card";

      const title = document.createElement("h3");
      title.textContent = `Explore: ${searchInput.value.trim()}`;

      const description = document.createElement("p");
      description.textContent =
        "Explore this topic in LearnPath.";

      const link = document.createElement("a");
      link.href = makeLessonPageURL(searchInput.value.trim());
      link.textContent = "Explore this topic →";

      link.addEventListener("click", event => {
        event.preventDefault();

        openCourseDetails({
          name: searchInput.value.trim(),
          category: "Custom Topic",
          emoji: "📘",
          description: "Explore this topic in LearnPath.",
          price: 0
        });
      });

      resultCard.append(title, description, link);
      grid.prepend(resultCard);
    }
  }
}

// ================================
// VIEW ALL BUTTON
// ================================

viewAllButton.addEventListener("click", () => {
  if (showingAllCourses) {
    showingAllCourses = false;
    searchInput.value = "";
    categorySelect.value = "All";
    viewAllButton.textContent = "All Courses";
    renderCourses(courses.slice(0, 6));
  } else {
    showingAllCourses = true;
    searchInput.value = "";
    categorySelect.value = "All";
    viewAllButton.textContent = "Show Popular Courses";
    renderCourses(courses);
  }

  suggestionBox.style.display = "none";
});

// ================================
// EVENT LISTENERS
// ================================

searchButton.addEventListener("click", () => {
  suggestionBox.style.display = "none";
  selectedSuggestion = -1;
  searchCourses();
});

searchInput.addEventListener("keydown", event => {
  if (event.key === "Enter" && selectedSuggestion < 0) {
    suggestionBox.style.display = "none";
    searchCourses();
  }
});

categorySelect.addEventListener("change", () => {
  searchInput.value = "";
  showingAllCourses = false;
  viewAllButton.textContent = "All Courses";
  searchCourses();
});

languageSelect.addEventListener("change", () => {

  // Save the selected language
  localStorage.setItem("learnpath-language", languageSelect.value);

  // Keep the current course display and update lesson links.
  const query = searchInput.value.trim();

  if (query || categorySelect.value !== "All") {
    searchCourses();
  } else {
    renderCourses(showingAllCourses ? courses : courses.slice(0, 6));
  }
});

// ================================
// INITIAL HOMEPAGE DISPLAY
// ================================

// Show only 6 popular courses when the homepage first opens.
renderCourses(courses.slice(0, 6));

} // End homepage element check

