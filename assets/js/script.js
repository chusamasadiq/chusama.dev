// Show Move Up Arrow
$(window).on('scroll load', function () {
    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');
    
    // Toggle visibility of the move-up arrow based on scroll position
    $('.top').toggle($(window).scrollTop() > 600);
});

// Smooth Move Up Scroll
$('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top,
    }, 500, 'linear');
});

// Generate squares with random properties
function generateSquare() {
    const section = document.querySelector('.banner');
    const square = document.createElement('spanBox');
    const size = Math.random() * 30;

    // Set random properties for square element
    square.style.cssText = `
        width: ${20 + size}px;
        height: ${20 + size}px;
        top: ${Math.random() * innerHeight}px;
        left: ${Math.random() * innerWidth}px;
        background: ${['red', 'green', 'brown', 'blue'][Math.floor(Math.random() * 4)]};
    `;

    section.appendChild(square);

    // Remove square after 5 seconds
    setTimeout(() => square.remove(), 5000);
}

// Generate squares at an interval
setInterval(generateSquare, 50);

// Dark mode toggle functionality
const darkModeButton = document.querySelector('#theme-toggle');
const offcanvasDarkModeButton = document.querySelector('#offcanvas-theme-toggle');
const navbarPicture = document.querySelector('#navbar-picture');
const offcanvasPicture = document.querySelector('#offcanvas-picture');
const lightIcon = document.querySelector('.light-icon');
const offcanvasLightIcon = document.querySelector('.light-icon');
const darkIcon = document.querySelector('.dark-icon');
const offcanvasDarkIcon = document.querySelector('.dark-icon');
const themeText = document.querySelector('.theme-text');
const offcanvasThemeText = document.querySelector('.theme-text');

const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
    const isDarkTheme = document.body.classList.contains('dark-theme');

    // Update icons, texts, and images based on the theme
    const [light, dark] = isDarkTheme ? ['inline-block', 'none'] : ['none', 'inline-block'];
    const [lightText, darkText] = isDarkTheme ? ['Light', 'Dark'] : ['Dark', 'Light'];
    const logo = isDarkTheme ? './assets/images/dark-logo.svg' : './assets/images/light-logo.svg';

    // Toggle visibility of icons
    lightIcon.style.display = light;
    offcanvasLightIcon.style.display = light;
    darkIcon.style.display = dark;
    offcanvasDarkIcon.style.display = dark;

    // Update theme text
    themeText.textContent = lightText;
    offcanvasThemeText.textContent = lightText;

    // Change logo based on the theme
    navbarPicture.src = logo;
    offcanvasPicture.src = logo;
};

// Attach event listeners for theme toggle buttons
darkModeButton.addEventListener('click', toggleTheme);
offcanvasDarkModeButton.addEventListener('click', toggleTheme);