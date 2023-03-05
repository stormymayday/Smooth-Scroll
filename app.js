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

        // Preventing default scroll behaviour
        event.preventDefault();

        // Getting href value (id) and slicing of the '#'
        const id = event.currentTarget.getAttribute('href').slice(1);

        // Getting the element uisng the id
        const element = document.getElementById(id);

        // Getting the Navbar height
        const navHeight = navbar.getBoundingClientRect().height;

        // Getting the Links Container height
        const linksContainerHeight = linksContainer.getBoundingClientRect().height;

        // Checking if the Navbar has the class of fixed-nav
        const fixedNav = navbar.classList.contains('fixed-nav');

        // Getting position of the element minus height of the Navbar
        let position = element.offsetTop - navHeight;

        // Getting the position if Navbar is not fixed
        if (!fixedNav) {
            position = position - navHeight;
        }

        // Getting position of the element if Links Container is open on smaller screens
        if (navHeight > 82) {
            position = position + linksContainerHeight;
        }

        // Scrolling to the element's position
        window.scrollTo({
            left: 0,
            top: position
        });

        // Closing the Navbar Links on the small screen
        linksContainer.style.height = 0;

    });

});