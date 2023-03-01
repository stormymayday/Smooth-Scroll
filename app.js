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

// Fixed Navbar
window.addEventListener('scroll', function () {

    console.log(this.window.pageYOffset);

});
