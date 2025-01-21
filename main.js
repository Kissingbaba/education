import { HomeScreen } from "./screen/HomeScreen.js";
import { faqScreen } from "./screen/HomeScreen.js";
// screen();
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    const icon = faq.querySelector(".faq__icon i");
    if (icon.className === "fa fa-plus") {
      icon.className = "fa fa-minus";
    } else {
      icon.className = "fa fa-plus";
    }
  });
});

const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});

const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
};

closeBtn.addEventListener("click", closeNav);

// Popular course
const router = () => {
  const courses__container = document.getElementById("js__courses");
  courses__container.innerHTML = HomeScreen.render();
};

window.addEventListener("load", router);
//  end of popular course

const freq = () => {
  const faqs__container = document.getElementById("js__faq-container");
  faqs__container.innerHTML = faqScreen.render();
};

window.addEventListener("load", freq);
