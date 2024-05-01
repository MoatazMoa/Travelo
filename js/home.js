document.addEventListener("DOMContentLoaded", function () {
  // Select the icon element by its id
  var icon = document.getElementById("icon");

  // Add a click event listener to the icon
  icon.onclick = function () {
    // Toggle the "dark-theme" class on the body element
    document.body.classList.toggle("dark-theme");

    // Check if the body has the "dark-theme" class and change the image accordingly
    if (document.body.classList.contains("dark-theme")) {
      icon.src = "image/OIP (9).jpeg";
    } else {
      icon.src = "image/OIP (8).jpeg";
    }
  };
});
document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector(".feedback form");
  var button = form.querySelector("button");
  button.addEventListener("click", function (event) {
    event.preventDefault();

    var confirmationBox = document.createElement("div");
    confirmationBox.textContent =
      "Message sent successfully , Thank you for send ";

    confirmationBox.classList.add("confirmation-box");
    confirmationBox.style.position = "fixed";
    confirmationBox.style.top = "50%";
    confirmationBox.style.left = "50%";
    confirmationBox.style.transform = "translate(-50%, -50%)";
    confirmationBox.style.padding = "20px";
    confirmationBox.style.background = "#f0f0f0";
    confirmationBox.style.border = "1px solid #ccc";
    confirmationBox.style.borderRadius = "5px";
    confirmationBox.style.textAlign = "center";
    document.body.appendChild(confirmationBox);

    setTimeout(function () {
      confirmationBox.style.opacity = "0";
      setTimeout(function () {
        confirmationBox.remove();
        form.reset();
      }, 500);
    }, 3000);
  });
});
