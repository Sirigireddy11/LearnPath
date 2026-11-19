
import { auth } from "./firebase-config.js";
import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js";

onAuthStateChanged(auth, (user) => {
  if (!user) {
    const page = location.pathname.split("/").pop() || "index.html";
    location.replace(
      "auth.html?next=" + encodeURIComponent(page + location.hash)
    );
    return;
  }

  document.body.style.visibility = "visible";

  // Prevent duplicate profile menus
  if (document.getElementById("learnpath-profile")) return;

  // Add menu styling
  const style = document.createElement("style");
  style.textContent = `
    .lp-profile-wrap {
      position: relative;
      margin-left: auto;
      flex-shrink: 0;
      font-family: Arial, sans-serif;
      z-index: 10000;
    }

    .lp-profile-button {
      width: 43px;
      height: 43px;
      border: none;
      border-radius: 50%;
      background: #5638b5;
      color: white;
      font-size: 17px;
      font-weight: bold;
      cursor: pointer;
    }

    .lp-profile-menu {
      position: absolute;
      top: 52px;
      right: 0;
      width: 235px;
      padding: 12px;
      background: white;
      border: 1px solid #e3e3ee;
      border-radius: 12px;
      box-shadow: 0 8px 25px #0002;
    }

    .lp-profile-menu[hidden],
    .lp-profile-details[hidden] {
      display: none !important;
    }

    .lp-profile-email {
      padding: 8px;
      color: #666;
      font-size: 12px;
      overflow-wrap: anywhere;
    }

    .lp-menu-item {
      display: block;
      width: 100%;
      padding: 11px;
      border: none;
      border-radius: 7px;
      background: white;
      color: #29264c;
      text-align: left;
      text-decoration: none;
      font-size: 14px;
      cursor: pointer;
      box-sizing: border-box;
    }

    .lp-menu-item:hover {
      background: #f1edff;
    }

    .lp-profile-details {
      padding: 10px;
      margin: 5px 0;
      background: #f7f5ff;
      border-radius: 8px;
      color: #29264c;
      font-size: 13px;
      overflow-wrap: anywhere;
    }

    .lp-menu-divider {
      border: 0;
      border-top: 1px solid #eee;
      margin: 8px 0;
    }

    .lp-signout {
      color: #d93025;
      font-weight: bold;
    }

    @media (max-width: 600px) {
      .lp-profile-wrap {
        margin-left: 8px;
      }
    }
  `;
  document.head.appendChild(style);

  // Profile container
  const wrapper = document.createElement("div");
  wrapper.id = "learnpath-profile";
  wrapper.className = "lp-profile-wrap";

  // Profile icon initials
  const accountName = user.displayName || user.email || "User";
  const initials = accountName
    .split(/[\s@._-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map(part => part[0].toUpperCase())
    .join("");

  const profileButton = document.createElement("button");
  profileButton.className = "lp-profile-button";
  profileButton.textContent = initials || "U";
  profileButton.title = "Profile and Settings";
  profileButton.setAttribute("aria-label", "Open profile menu");
  profileButton.setAttribute("aria-expanded", "false");

  // Dropdown menu
  const menu = document.createElement("div");
  menu.className = "lp-profile-menu";
  menu.hidden = true;

  const heading = document.createElement("strong");
  heading.textContent = "My Account";

  const email = document.createElement("div");
  email.className = "lp-profile-email";
  email.textContent = user.email || "";

  // My Profile
  const profileItem = document.createElement("button");
  profileItem.className = "lp-menu-item";
  profileItem.textContent = "My Profile";

  const profileDetails = document.createElement("div");
  profileDetails.className = "lp-profile-details";
  profileDetails.hidden = true;

  const nameLine = document.createElement("p");
  nameLine.textContent = "Name: " + (user.displayName || "Not provided");

  const emailLine = document.createElement("p");
  emailLine.textContent = "Email: " + (user.email || "Not available");

  profileDetails.append(nameLine, emailLine);

  profileItem.onclick = () => {
    profileDetails.hidden = !profileDetails.hidden;
  };

  // Settings
  const settingsLink = document.createElement("a");
  settingsLink.className = "lp-menu-item";
  settingsLink.textContent = "Settings";
  settingsLink.href = "settings.html";

  // My Learning
  const learningLink = document.createElement("a");
  learningLink.className = "lp-menu-item";
  learningLink.textContent = "My Learning";
  learningLink.href = "index.html#myProgress";

  // Sign Out
  const divider = document.createElement("hr");
  divider.className = "lp-menu-divider";

  const signOutButton = document.createElement("button");
  signOutButton.className = "lp-menu-item lp-signout";
  signOutButton.textContent = "Sign Out";

  signOutButton.onclick = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
      alert("Sign out failed. Please check your connection.");
    }
  };

  menu.append(
    heading,
    email,
    profileItem,
    profileDetails,
    settingsLink,
    learningLink,
    divider,
    signOutButton
  );

  profileButton.onclick = () => {
    menu.hidden = !menu.hidden;
    profileButton.setAttribute("aria-expanded", String(!menu.hidden));
  };

  // Close menu when clicking outside
  document.addEventListener("click", (event) => {
    if (!wrapper.contains(event.target)) {
      menu.hidden = true;
      profileDetails.hidden = true;
      profileButton.setAttribute("aria-expanded", "false");
    }
  });

  wrapper.append(profileButton, menu);

  // Put profile icon in the navigation bar
  const navbar = document.querySelector(".navbar");

  if (navbar) {
    navbar.appendChild(wrapper);
  } else {
    wrapper.style.position = "fixed";
    wrapper.style.top = "18px";
    wrapper.style.right = "20px";
    document.body.appendChild(wrapper);
  }

}, (error) => {
  console.error("Authentication error:", error);
  document.body.style.visibility = "visible";
});
