/* =========================
FILE: script.js
========================= */

// MOBILE MENU

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


// TYPING EFFECT

var typed = new Typed(".typing",{
  strings:[
    "Full Stack Developer",
    "Web Designer",
    "Frontend Developer"
  ],
  typeSpeed:80,
  backSpeed:50,
  backDelay:1200,
  loop:true
});


// AOS ANIMATION

AOS.init({
  duration: 1000,
  once: true
});

/// =========================
// DAY / NIGHT MODE
// =========================

const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = document.querySelector(".theme-toggle i");

// Toggle Theme
themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("light-mode");

  // Save Theme
  if(document.body.classList.contains("light-mode")){
    localStorage.setItem("theme", "light");

    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");

  } else {

    localStorage.setItem("theme", "dark");

    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  }

});

// Load Saved Theme
window.addEventListener("load", () => {

  const savedTheme = localStorage.getItem("theme");

  if(savedTheme === "light"){

    document.body.classList.add("light-mode");

    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");

  }

});

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if(window.scrollY > 50){
    header.classList.add("sticky");
  }else{
    header.classList.remove("sticky");
  }
});


