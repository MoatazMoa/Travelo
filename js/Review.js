function darkMode() {
  let element = document.getElementById("MR");
  element.id = "dark-mode-MR";
  let header31 = document.getElementById("header3");
  header31.className = "header31";
}
function lightMode() {
  let element = document.getElementById("dark-mode-MR");
  let header31 = document.getElementById("header3");
  header31.className = "header3";
  element.id = "MR";
}
