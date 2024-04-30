function toggle() {
  if (document.getElementById("reg-text").value.trim() == "") {
    alert("Enter username");
    return false;
  }
  if (document.getElementById("reg-mail").value.trim() == "") {
    alert("Enter email");
    return false;
  }
  if (document.getElementById("reg-phone").value.trim() == "") {
    alert("Enter phone number");
    return false;
  }
  if (document.getElementById("reg-pass").value.trim() == "") {
    alert("Enter password");
    return false;
  }
}
