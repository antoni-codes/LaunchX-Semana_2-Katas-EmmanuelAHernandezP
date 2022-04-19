/*=============================================
=             START SECTION | MENU MOBILE         =
=============================================*/
/*----------  START SUBSECTION | SHOW MENU MOBILE   ----------*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close')

/*-- /Validate If The Constant Exists/ --*/
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/*----------  START SUBSECTION | REMOVE MENU MOBILE   ----------*/
/*-- /Validate If The Constant Exists, Then Remove/ --*/
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}
/*=====  END OF SECTION | MENU MOBILE ======*/

/*=============================================
=             START SECTION | SWIPER         =
=============================================*/
const homeSwiper = new Swiper('.home-swiper', {
    // Optional Parameters
    speed: 1000,
    spaceBetween: 30,
    loop: true,

    // Autostart the slider
    autoplay: {
        delay: 5000
    },

    // if We need pagination
    pagination: {
        el: 'swiper-pagination',
        clickable: true,
        // type: 'bullets',
    },


});
/*=====  END OF SECTION | SWIPER ======*/

/*=============================================
=   START SECTION | CHANGE BACKGROUND NAV     =
=============================================*/
const scrollHeader = () => {
    const header = document.getElementById('header');
    // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 100) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader);
/*=====  END OF SECTION | CHANGE BACKGROUND NAV ======*/

/*=============================================
=      START SECTION | SHOW SCROLL UP         =
=============================================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    /*when the scroll is higher than 460 Viewport height, add the show-scroll class
    to the "a" tag wuth the scroll-up*/

    if (this.scrollY >= 460) {
        scrollUp.classList.add('show-scrollUp');
    } else {
        scrollUp.classList.remove('show-scrollUp');
    }
}

window.addEventListener('scroll', scrollUp);



/*=====  END OF SECTION | comment ======*/