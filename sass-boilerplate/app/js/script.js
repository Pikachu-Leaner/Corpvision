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

/*Back to top function*/
document.addEventListener("DOMContentLoaded", function () {
  // Get the button
  let mybutton = document.getElementById("btn-back-to-top");

  // When the user scrolls down 300px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      mybutton.classList.add("show");
    } else {
      mybutton.classList.remove("show");
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  mybutton.addEventListener("click", backToTop);

  function backToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This enables the smooth scrolling animation
    });
  }
});

var n = 12213312;
var tong1 = 0;
var tong2 = 0;
var tong3 = 0;
while (n > 0)
{
  e = n % 10;
  if (e == 1)
    tong1 ++;
  else if (e == 2)
    tong2 ++;
  else if (e == 3)
    tong3 ++;
  n = Math.floor(n / 10);
}

console.log(tong1, tong2, tong3);

var number = 11222211;





