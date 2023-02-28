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

    const containerHeight = linksContainer.getBoundingClientRect();

    console.log(containerHeight);

}); 
