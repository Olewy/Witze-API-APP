const darkLightModeToggleBtn = document.querySelector(".dark-mode-toggle-btn");

const body = document.body;

if (localStorage.getItem("theme") === "light") {
  body.classList.add("light");
}

darkLightModeToggleBtn.addEventListener("click", function () {
  body.classList.toggle("light");
  darkLightModeToggleBtn.classList.toggle("dark-mode-toggle-btn--move");
});

if (body.classList.contains("light")) {
  localStorage.setItem("theme", "ligth");
} else {
  localStorage.setItem("theme", "dark");
}
