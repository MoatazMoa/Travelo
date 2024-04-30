function Validate() {
  if (document.getElementById("email").value.trim() == "") {
    alert("Please enter your email!");
    return false;
  }
  if (document.getElementById("Pass").value.trim() == "") {
    alert("Please enter your password!");
    return false;
  }
  localStorage.setItem("is_your_email", document.getElementById("email").value);
  localStorage.setItem(
    "is_your_password",
    document.getElementById("pass").value
  );
}
function darkMode() {
  let element = document.body;
  element.className = "MA dark-mode";
  let header31 = document.getElementById("header3");
  header31.className = "header31";
}
function lightMode() {
  let element = document.body;
  let header31 = document.getElementById("header3");
  header31.className = "header3";
  element.className = "MA light-mode";
}
