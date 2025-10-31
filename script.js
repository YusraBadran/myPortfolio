const swiper = new Swiper('.slider-warpper', {
    loop: true,
    grabCursor : true,
    spaceBetween : 30,

  // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable : true,
        dynamicBullets : true,
    },

  // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // responsive breakpoints
    breakpoints:{
        0:{
            sliderPerView : 1
        },

        768:{
            sliderPerView : 2
        },

        1024:{
            sliderPerView : 3
        },
    }

});