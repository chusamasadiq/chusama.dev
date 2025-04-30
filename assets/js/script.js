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

document.addEventListener("DOMContentLoaded", function () {
    const texts = ["Software Engineer","Flutter Developer", "Data Scientist"];
    let index = 0;
    const typingElement = document.getElementById("typing-effect");
  
    function typeText(text, i = 0) {
      if (i < text.length) {
        typingElement.textContent += text.charAt(i);
        setTimeout(() => typeText(text, i + 1), 250);
      } else {
        setTimeout(() => {
          typingElement.textContent = "";
          index = (index + 1) % texts.length;
          typeText(texts[index]);
        }, 2000);
      }
    }
  
    typeText(texts[index]);
  });


  let color = ['red', 'green', 'brown', 'blue']
function square() {
    let section = document.querySelector('.banner');

    let square = document.createElement('spanBox');

    let size = Math.random() * 30;

    square.style.width = 20 + size + 'px';

    square.style.height = 20 + size + 'px';

    square.style.top = Math.random() * innerHeight + 'px';

    square.style.left = Math.random() * innerWidth + 'px';

    let bg = color[Math.floor(Math.random() * color.length)];

    square.style.background = bg;

    section.appendChild(square);

    setTimeout(() => {
        square.remove();
    }, 5000)
}
setInterval(square, 50);