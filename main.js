const textArray = [" CSE Student", "Web Developer", "Game Developer"];
const typingSpeed = 200; 
const erasingSpeed = 100;
const delayBetween = 1500;

const typingElement = document.querySelector(".typing-text");
let textIndex = 0; 
let charIndex = 0; 

function type() {
    if (charIndex < textArray[textIndex].length) {
        typingElement.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, delayBetween);
    }
}

function erase() {
    if (charIndex > 0) {
        typingElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        textIndex = (textIndex + 1) % textArray.length; 
        setTimeout(type, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, delayBetween);
});

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

document.addEventListener('DOMContentLoaded', function () {
    const sr = ScrollReveal({
        reset: true,
        distance: '50px',
        duration: 1000,
        easing: 'ease-in-out',
        mobile: true
    });

    sr.reveal('.home-content', { origin: 'top', delay: 300 });
    sr.reveal('.home-img', { origin: 'right', delay: 600 });
    sr.reveal('.about', { origin: 'top', duration: 1500, delay: 300 });
    sr.reveal('.about-img', { origin: 'left', duration: 1500, delay: 300 });
    sr.reveal('.about-content', { origin: 'right', duration: 1500, delay: 300 });
    sr.reveal('.projects h2', { origin: 'top', duration: 1200, delay: 200 });
    sr.reveal('.project-box', { origin: 'bottom', duration: 1200, delay: 200, interval: 100 });
    sr.reveal('.skills-container', { origin: 'bottom', duration: 1500, delay: 200 });
});

document.addEventListener("DOMContentLoaded", () => {
    const skillBars = document.querySelectorAll(".progress-bar span");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.width = entry.target.getAttribute("style").split(":")[1];
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.5 }
    );

    skillBars.forEach((bar) => observer.observe(bar));
});

document.getElementById('downloadCVBtn').addEventListener('click', function (event) {
    event.preventDefault();
    alert('No files found');
});

document.addEventListener('DOMContentLoaded', function() {
    const projectLinks = document.querySelectorAll('.projectl');

    projectLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            const fileUrl = this.getAttribute('href');

            fetch(fileUrl, { method: 'HEAD' })
                .then(response => {
                    if (response.ok) {
                        window.location.href = fileUrl;
                    } else {
                        alert('No files found');
                    }
                })
                .catch(error => {
                    alert('No files found');
                });
        });
    });
});

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

let header = document.querySelector('header')
header.classList.toggle('sticky', window.scrollY > 100);

menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active')