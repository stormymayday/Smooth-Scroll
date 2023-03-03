// Dynamic Date
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// navToggle functionality
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {

    // Static number of links (200px height)
    // linksContainer.classList.toggle('show-links');

    const containerHeight = linksContainer.getBoundingClientRect().height;

    const linksHeight = links.getBoundingClientRect().height + 20;

    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }

});

// Fixed Navbar & Back to Top Button
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', function () {

    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;

    // Fixed Navbar
    if (scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav');
    } else {
        navbar.classList.remove('fixed-nav');
    }

    // Back to Top Button
    if (scrollHeight > 500) {
        topLink.classList.add('show-link');
    } else {
        topLink.classList.remove('show-link');
    }

});

// Smooth Scroll
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(function (link) {

    link.addEventListener('click', function (event) {

        event.preventDefault();

        // Getting href value and slicing of the '#'
        const id = event.currentTarget.getAttribute('href').slice(1);

        // Getting the element uisng the id
        const element = document.getElementById(id);

        // Getting position of the element 'offsetTop'
        let position = element.offsetTop;
        console.log(position);


    });

});