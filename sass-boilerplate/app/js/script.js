const themeSwitch = document.getElementById("theme-switch");

const setDarkMode = (on) => {
  if (on) {
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkmode", "active");
  } else {
    document.body.classList.remove("dark-mode");
    localStorage.removeItem("darkmode");
  }
};

// apply saved theme on load
const saved = localStorage.getItem("darkmode") === "active";
setDarkMode(saved);

if (themeSwitch) {
  themeSwitch.addEventListener("click", () => {
    const isDark = document.body.classList.contains("dark-mode");
    setDarkMode(!isDark);
  });
}

