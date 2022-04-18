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