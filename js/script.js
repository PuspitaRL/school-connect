/* =========================
   MOBILE NAVIGATION
========================= */

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", function () {

    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

});


/* Close mobile menu when clicking a link */

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        hamburger.classList.remove("active");
        navMenu.classList.remove("active");

    });

});


/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const navbar = document.getElementById("navbar");

function handleNavbarScroll() {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

}

window.addEventListener("scroll", handleNavbarScroll);


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(function (element) {

    revealObserver.observe(element);

});


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section[id]");

function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 180;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        const target = link.getAttribute("href");

        if (target === "#" + currentSection) {

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll", updateActiveNavigation);


/* =========================
   CLOSE MENU WHEN CLICKING OUTSIDE
========================= */

document.addEventListener("click", function (event) {

    const clickedInsideMenu = navMenu.contains(event.target);
    const clickedHamburger = hamburger.contains(event.target);

    if (
        navMenu.classList.contains("active") &&
        !clickedInsideMenu &&
        !clickedHamburger
    ) {

        hamburger.classList.remove("active");
        navMenu.classList.remove("active");

    }

});


/* =========================
   INITIALIZE
========================= */

handleNavbarScroll();
updateActiveNavigation();
