// Show Move Up Arrow
$(window).on('scroll load', function () {
    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if ($(window).scrollTop() > 600) {
        $('.top').show();
    } else {
        $('.top').hide();
    }

});

// Smooth Move Up Scroll
$('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top,
    },
        500,
        'linear'
    );

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

const navbarPicture = document.querySelector('#navbar-picture');
const offcanvasPicture = document.querySelector('#offcanvas-picture');
const darkModeButton = document.querySelector('#theme-toggle');
const offcanvasDarkModeButton = document.querySelector('#offcanvas-theme-toggle');
const lightIcon = darkModeButton.querySelector('.light-icon');
const offcanvasLightIcon = offcanvasDarkModeButton.querySelector('.light-icon');
const darkIcon = darkModeButton.querySelector('.dark-icon');
const offcanvasDarkIcon = offcanvasDarkModeButton.querySelector('.dark-icon');
const themeText = darkModeButton.querySelector('.theme-text');
const offcanvasThemeText = offcanvasDarkModeButton.querySelector('.theme-text');

darkModeButton.addEventListener('click', toggleTheme);
offcanvasDarkModeButton.addEventListener('click', toggleTheme);

function toggleTheme() {
    document.body.classList.toggle('dark-theme');

    if (document.body.classList.contains('dark-theme')) {
        lightIcon.style.display = 'none';
        offcanvasLightIcon.style.display = 'none';
        darkIcon.style.display = 'inline-block';
        offcanvasDarkIcon.style.display = 'inline-block';
        themeText.textContent = 'Dark';
        offcanvasThemeText.textContent = 'Dark';
        navbarPicture.src = './assets/images/dark-logo.svg';
        offcanvasPicture.src = './assets/images/dark-logo.svg';
    } else {
        lightIcon.style.display = 'inline-block';
        offcanvasLightIcon.style.display = 'inline-block';
        darkIcon.style.display = 'none';
        offcanvasDarkIcon.style.display = 'none';
        themeText.textContent = 'Light';
        offcanvasThemeText.textContent = 'Light';
        navbarPicture.src = './assets/images/light-logo.svg';
        offcanvasPicture.src = './assets/images/light-logo.svg';
    }
}


