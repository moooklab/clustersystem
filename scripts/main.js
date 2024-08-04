new Swiper('section.projects div.swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    centeredSlidesBounds: true,
    navigation: {
        prevEl: document.querySelector('section.projects div.swiper-navigation > *:first-child'),
        nextEl: document.querySelector('section.projects div.swiper-navigation > *:last-child')
    },
    pagination: {
        el: document.querySelector('section.projects div.swiper-pagination'),
        clickable: true
    }
})

new Swiper('section.continuity div.swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        prevEl: document.querySelector('section.continuity div.swiper-navigation > *:first-child'),
        nextEl: document.querySelector('section.continuity div.swiper-navigation > *:last-child')
    },
    pagination: {
        el: document.querySelector('section.continuity div.swiper-pagination'),
        clickable: true
    }
})