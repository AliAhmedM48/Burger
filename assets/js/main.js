/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/
//#region TOGGLE BUTTON
const openMenuIconElement = document.getElementById("openIcon");
const closeMenuIconElement = document.getElementById("closeIcon");
const navMenuElement = document.getElementById("navList");

function toggleNavMenuFunction() {
  navMenuElement.classList.toggle("hidden");
}

openMenuIconElement.addEventListener("click", toggleNavMenuFunction);
closeMenuIconElement.addEventListener("click", toggleNavMenuFunction);
navMenuElement
  .querySelectorAll("a")
  .forEach((button) => button.addEventListener("click", toggleNavMenuFunction));
//#endregion
/*~~~~~~~~~~~~~~~ DARK LIGHT THEME ~~~~~~~~~~~~~~~*/
//#region DARK LIGHT THEME
const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
const themeToggleButton = document.getElementById("theme-toggle");
let currentTheme;

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  makeItDark();
} else {
  makeItLight();
}

function toggleTheme() {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    makeItLight();
  } else {
    makeItDark();
  }
}
function makeItDark() {
  document.documentElement.classList.add("dark");
  themeToggleButton.classList.replace("ri-moon-line", "ri-sun-line");
  localStorage.setItem("theme", "dark");
}
function makeItLight() {
  document.documentElement.classList.remove("dark");
  themeToggleButton.classList.replace("ri-sun-line", "ri-moon-line");
  localStorage.setItem("theme", "light");
}

themeToggleButton.addEventListener("click", toggleTheme);
//#endregion
/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/
//#region SHOW SCROLL UP
const scrollUp = () => {
  const scrollUpButton = document.getElementById("scroll-up");
  if (this.scrollY >= 250) {
    // scrollUpButton.classList.remove("-bottom-1/2");
    // scrollUpButton.classList.add("bottom-4");
    scrollUpButton.classList.replace("-bottom-1/2", "bottom-4");
  } else {
    // scrollUpButton.classList.add("-bottom-1/2");
    // scrollUpButton.classList.remove("bottom-4");
    scrollUpButton.classList.replace("bottom-4", "-bottom-1/2");
  }
};
window.addEventListener("scroll", scrollUp);
//#endregion
/*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/
//#region CHANGE BACKGROUND HEADER
const changeNavbarBorder = () => {
  const navbarElement = document.getElementById("navbar");
  if (this.scrollY >= 50) {
    navbarElement.classList.add("border-b", "border-secondaryColor");
  } else {
    navbarElement.classList.remove("border-b", "border-secondaryColor");
  }
};
window.addEventListener("scroll", changeNavbarBorder);
//#endregion
/*~~~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~~~~~~~~*/
//#region SCROLL SECTIONS ACTIVE LINK
const activeLink = () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav__link");
  let current = "home";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 60;
    if (this.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((item) => {
    item.classList.remove("text-secondaryColor");
    if (item.href.includes(current)) {
      item.classList.add("text-secondaryColor");
    }
  });
};

window.addEventListener("scroll", activeLink);
//#endregion
/*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/
//#region SCROLL REVEAL ANIMATION
const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

scrollReveal.reveal(".home__image");
scrollReveal.reveal(".home__content", { origin: "bottom" });
scrollReveal.reveal(".category___card", { interval: 300 });
scrollReveal.reveal(".promo__startCard", { origin: "left" });
scrollReveal.reveal(".promo__endCard", { origin: "right" });

//#endregion
/*~~~~~~~~~~~~~~~ TABS ~~~~~~~~~~~~~~~*/
//#region TABS
const tabsElemets = document.querySelectorAll(".tabs-wrap ul li");
const allItems = document.querySelectorAll(".items-wrap ul .item");
const foodItems = document.querySelectorAll(".items-wrap ul .food");
const snakItems = document.querySelectorAll(".items-wrap ul .snack");
const beverageItems = document.querySelectorAll(".items-wrap ul .beverage");

let itemsToShow = allItems;
tabsElemets.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabsElemets.forEach((tab) => {
      tab.classList.remove("active");
    });

    tab.classList.add("active");

    const tabSelected = tab.getAttribute("data-tabs");

    itemsToShow.forEach((item) => (item.style.display = "none"));
    switch (tabSelected) {
      case ".food":
        itemsToShow = foodItems;
        break;
      case ".snack":
        itemsToShow = snakItems;
        break;
      case ".beverage":
        itemsToShow = beverageItems;
        break;
      default:
        itemsToShow = allItems;
    }
    itemsToShow.forEach((item) => (item.style.display = "block"));
  });
});
//#endregion
/*~~~~~~~~~~~~~~~ Swiper Slider ~~~~~~~~~~~~~~~*/
//#region Swiper Slider
const swiper = new Swiper(".swiper", {
  speed: 400,
  spaceBetween: 30,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  // Default parameters
  slidesPerView: 1,
  grabCursor: true,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3,
    },
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
//#endregion
/*~~~~~~~~~~~~~~~ Isotope js Filter & sort magical layouts ~~~~~~~~~~~~~~~*/
//#region Isotope js
// init Isotope
// $(document).ready(function () {
//   const grid = new Isotope("#menu .items-wrap>.grid", {
//     itemSelector: ".item",
//   });

//   // filter items on button click
//   $(".tabs-wrap ul").on("click", "li", function () {
//     var filterValue = $(this).attr("data-tabs");
//     grid.$element.isotope({ filter: filterValue });
//   });
// });
//#endregion
