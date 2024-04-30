// image slider Section
var slides3 = document.querySelectorAll(".slide3");
var btns3 = document.querySelectorAll(".btn3");

let currentSlide3 = 1;
var manualNav3 = function (manual) {
  slides3.forEach((slide3) => {
    slide3.classList.remove("active");

    btns3.forEach((btn3) => {
      btn3.classList.remove("active");
    });
  });

  slides3[manual].classList.add("active");
  btns3[manual].classList.add("active");
};

btns3.forEach((btn3, i) => {
  btn3.addEventListener("click", () => {
    manualNav3(i);
    currentSlide3 = i;
  });
});

function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput3");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL3");
  li = ul.getElementsByTagName("li");

  // Loop through all list items, and hide those who don't match the search query
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

function darkMode() {
  let element = document.getElementById("Default");
  element.id = "dark-mode";
  let header31 = document.getElementById("header3");
  header31.className = "header31";
}
function lightMode() {
  let element = document.getElementById("dark-mode");
  let header31 = document.getElementById("header3");
  header31.className = "header3";
  element.id = "Default";
}
