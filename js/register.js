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

  var username = document.getElementById("reg-text").value;
  var Email = document.getElementById("reg-mail").value;
  var Phone_no = document.getElementById("reg-phone").value;
  var password = document.getElementById("reg-pass").value;
  localStorage.setItem("This_is_your_username", username);
  localStorage.setItem("This_is_your_Email", Email);
  localStorage.setItem("This_is_your_phone_no", Phone_no);
  localStorage.setItem("This_is_your_pass", password);
}
