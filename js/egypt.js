function toggleCaption_MTA() {
  var caption_MTA = document.querySelector(".caption");
  if (caption_MTA.style.display === "none") {
    caption_MTA.style.display = "block";
  } else {
    caption_MTA.style.display = "none";
  }
}
function showLargeImage_MTA(src) {
  var largeImg = document.getElementById("largeImg");
  largeImg.src = src;
  document.querySelector(".large-image").style.display = "block";
}

function hideLargeImage_MTA() {
  document.querySelector(".large-image").style.display = "none";
}
document.addEventListener("DOMContentLoaded", function () {
  var rows = document.querySelectorAll("#schedule tbody tr");
  rows.forEach(function (row) {
    row.addEventListener("click", function () {
      var details = document.getElementById("details");
      details.innerHTML = "";
      var cells = this.getElementsByTagName("td");
      var detailsHTML = "<h3>Details</h3><ul>";
      for (var i = 0; i < cells.length; i++) {
        detailsHTML +=
          "<li><strong>" +
          cells[i].parentNode.getElementsByTagName("th")[i].innerHTML +
          ": </strong>" +
          cells[i].innerHTML +
          "</li>";
      }
      detailsHTML += "</ul>";
      details.innerHTML = detailsHTML;
      details.style.display = "block";
    });
  });
});
function showAlert_MTA() {
  alert("Thank you for your feedback!");
}

function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInputMG");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myULMG");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

let originalBackgroundColor = getComputedStyle(document.body).backgroundColor;
let isDarkMode = false;

document.getElementById('change-background-button').addEventListener('click', function() {
    if (isDarkMode) {
        document.body.style.backgroundColor = originalBackgroundColor;
        isDarkMode = false;
    } else {
        document.body.style.backgroundColor = 'black';
        isDarkMode = true;
    }
    localStorage.setItem('isDarkMode', isDarkMode);
});

if (localStorage.getItem('isDarkMode') === 'true') {
    document.body.style.backgroundColor = 'black';
    isDarkMode = true;
} else {
    document.body.style.backgroundColor = originalBackgroundColor;
    isDarkMode = false;
}
