/////////
function playAudio() {
  var audio = document.getElementById("audio");
  audio.play();
}

let text = document.getElementById("text");
let gateLeft = document.getElementById("gate-left");
let gateRight = document.getElementById("gate-right");
const footer = document.querySelector("footer");
const footerTop = footer.offsetTop;

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  const maxScroll = footerTop - window.innerHeight;

  if (value <= maxScroll) {
    text.style.marginTop = value * 1.5 + "px";
    gateLeft.style.left = value * 0.5 + "px";
    gateRight.style.left = value * -0.5 + "px";
  }
});
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__container .section__subheader", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__container .scroll__btn", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__container .header__socials", {
  ...scrollRevealOption,
  origin: "left",
  delay: 1500,
});

ScrollReveal().reveal(".about__image-1, .about__image-3", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".about__image-2", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".about__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".about__content p", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".about__content .about__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

const iframe = document.getElementById("myFrame");
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function () {
  const searchTerm = this.value.trim();
  iframe.src = `https://www.example.com/search?q=${searchTerm}`;
});

document.addEventListener("DOMContentLoaded", function () {
  const searchForm = document.getElementById("searchForm");
  const searchInput = document.getElementById("searchInput");

  searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const cityName = searchInput.value.toLowerCase();

    if (cityName === "istanbul") {
      scrollToSection("section_Result");
    } else if (cityName === "ankara") {
      scrollToSection("asection_Result");
    } else if (cityName === "izmir") {
      scrollToSection("section_Result");
    } else {
      alert("Sorry, we couldn't find information for the entered city.");
    }
  });

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      alert("Sorry, section not found.");
    }
  }
});
//////////
const changeColorBtn = document.getElementById("changeColorBtn");
const h2Elements = document.querySelectorAll("h2");

let originalColor = "";

if (localStorage.getItem("colorSetting") === "#f35405") {
  originalColor = getComputedStyle(h2Elements[0]).color;
  h2Elements.forEach((h2) => {
    h2.style.color = "#f35405";
  });
}

changeColorBtn.addEventListener("click", () => {
  if (originalColor === "") {
    originalColor = getComputedStyle(h2Elements[0]).color;
    h2Elements.forEach((h2) => {
      h2.style.color = "#f35405";
    });

    localStorage.setItem("colorSetting", "#f35405");
  } else {
    h2Elements.forEach((h2) => {
      h2.style.color = originalColor;
    });
    originalColor = "";

    localStorage.removeItem("colorSetting");
  }
});
