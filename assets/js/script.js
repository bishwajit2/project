"use strict";
// Slider script
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if(slideIndex < 1) {
        slideIndex = slides.length;
    }

    if(slideIndex < slides.length) {
        slideIndex = 1;
    }

    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    if(slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex - 1].style.display = "block";
}

accordionFunction() ;

// Accordion script
function accordionFunction() {
    var anchor = document.getElementsByClassName("accordion-btn");
    var i;
    for(i = 0; i < anchor.length; i++) {
        anchor[i].addEventListener("click", function(event) {
            event.preventDefault();

            for(let j = 0; j < anchor.length; j++) {
                if(anchor[j] != this) {
                    anchor[j].classList.remove("active");
                } 
            }
            if(this.classList.contains("active")) {
                this.classList.remove("active");
            } else {
                this.classList.add("active");
            }
        })
    }
}



// Toggle pricing script
document.getElementById("plansSwitch").addEventListener("click", function() {
    let monthly = document.getElementById("monthly");
    let yearly = document.getElementById("yearly");
    let plansSwitch = document.getElementById("plansSwitch");

    if(plansSwitch.checked == true) {
        yearly.style.color = "#fff";
        monthly.style.color = "#333";
    } else {
        yearly.style.color = "#333";
        monthly.style.color = "#fff";
    }
});

// Humberger menu
(() => {
    const openBtn = document.querySelector(".open-btn");
    const mainMenu = document.querySelector(".main-menu");
    const closeBtn = document.querySelector(".close-btn");
    const tryForFree = document.querySelector(".try-for-free");
    const navItem = document.querySelectorAll(".menu ul li");
    const navLen = navItem.length;
    console.log(navLen);

    openBtn.addEventListener('click', () => {
        mainMenu.classList.add("menu-active")
        navItem.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = 'navAnimation 0.3s ease forwards ' + (index / 16 + 0.5) + 's';
            }
        })
        if(tryForFree.style.animation) {
            tryForFree.style.animation = '';
        } else {
            tryForFree.style.animation =  'navAnimation 0.3s ease forwards ' + (navLen / 16 + 0.5 ) + 's';
        }
    })

    // Sticky menu
    closeBtn.addEventListener('click', () => {
        mainMenu.classList.remove("menu-active");
        navItem.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = 'navAnimation 0.3s ease forwards ' + (index / 16 + 0.5) + 's';
            }
        })

        if(tryForFree.style.animation) {
            tryForFree.style.animation = '';
        } else {
            tryForFree.style.animation =  'navAnimation 0.3s ease forwards ' + (navLen / 16 + 0.5 ) + 's';
        }
    })


})();

(() => {
    const heroSection = document.querySelector(".hero-section");
    const navbar = document.querySelector(".header");
    const sticky = heroSection.offsetTop;

    document.body.onscroll = stickyFunc;

    function stickyFunc() {
        if(window.pageYOffset >= sticky) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    }
})();


