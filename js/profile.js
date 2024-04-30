function changeTheme() {
  document.body.classList.toggle("dark-themeMG");
  document.body.classList.toggle("light-themeMG");

  if (document.body.classList.contains("dark-themeMG")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}
function loadTheme() {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-themeMG");
    document.body.classList.remove("light-themeMG");
  } else {
    document.body.classList.add("light-themeMG");
    document.body.classList.remove("dark-themeMG");
  }
}

window.onload = loadTheme;
document.getElementById("theme-toggle").addEventListener("click", changeTheme);
