new Swiper('section.projects div.swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    centeredSlidesBounds: true,
    initialSlide: 1,
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

new Swiper('section.gallery div.swiper', {
    slidesPerView: 1,
    navigation: {
        prevEl: document.querySelector('section.gallery div.swiper-navigation > *:first-child'),
        nextEl: document.querySelector('section.gallery div.swiper-navigation > *:last-child')
    },
    pagination: {
        el: document.querySelector('section.gallery div.swiper-pagination'),
        clickable: true
    },
    on: {
        init: handleSlideChange,
        transitionEnd: handleSlideChange
    }
})

new Swiper('section.about div.swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        prevEl: document.querySelector('section.about div.swiper-navigation > *:first-child'),
        nextEl: document.querySelector('section.about div.swiper-navigation > *:last-child')
    },
    pagination: {
        el: document.querySelector('section.about div.swiper-pagination'),
        clickable: true
    }, 
    breakpoints: {
        640: {
            slidesPerView: 2
        }
    }
})

tabsBlocks = document.querySelectorAll('div.tabs')
tabsBlocks.forEach( tabBlock => {
    let tabCaptionsSlider = new Swiper(tabBlock.querySelector('div.swiper.tabs_captions'), {
        slidesPerView: 'auto',
        spaceBetween: 40,
        slideToClickedSlide: true,
    })
    
    let tabContensSlider = new Swiper(tabBlock.querySelector('div.swiper.tabs_contents'), {
        autoHeight: true,
        thumbs: {
            swiper: tabCaptionsSlider
        }
    })
    
    tabContensSlider.on('slideChange', () => { tabCaptionsSlider.slideTo(tabContensSlider.activeIndex) })
    tabCaptionsSlider.on('slideChange', () => { tabContensSlider.slideTo(tabCaptionsSlider.activeIndex) })
    tabContensSlider.on('click', () => {
        setTimeout(() => {
            tabContensSlider.updateAutoHeight(1000)
        }, 500)
    })
})

function handleSlideChange (swiper) {
    var currentSlide = this.realIndex + 1
    var totalSlides = this.slides.length
    var counterCurrent = document.querySelector('section.gallery div.counter span.current')
    var counterTotal = document.querySelector('section.gallery div.counter span.total')

    counterCurrent.innerHTML = currentSlide.toString().padStart(2, '0')
    counterTotal.innerHTML = '/ ' + totalSlides.toString().padStart(2, '0')
}