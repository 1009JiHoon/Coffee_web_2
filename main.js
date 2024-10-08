const searchEl = document.querySelector('.search');
const InputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
    InputEl.focus();
});

InputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    InputEl.setAttribute('placeholder', '통합검색');
});

InputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    InputEl.setAttribute('placeholder', '');
});

const BadgesEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', function(){
    if(scrollY > 500){
        gsap.to(BadgesEl, .6, {
            opacity: 0
        });

        gsap.to(toTopEl, 1, {
            opacity: 1,
            x:0
        });
    }
    else {
        gsap.to(BadgesEl, .6, {
            opacity: 1
        });

        gsap.to(toTopEl, 1, {
            opacity: 0,
            x:100
        });
    }
});

const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach(function(fadeEl, index){
    gsap.to(fadeEl, 1, {
        delay : 0.7 * (index + 1),
        opacity : 1
    });
});

const swiper = new Swiper('.notice .swiper', {
    direction : 'vertical',
    loop : true,
    autoplay : true
});

const promotionBTN = document.querySelector('.notice .inner-right .material-icons');
const promotion = document.querySelector('.promotion');

promotionBTN.addEventListener('click', function(){
    if(promotion.classList.contains('hide')){
        promotion.classList.remove('hide');
    }
    else {
        promotion.classList.add('hide');
    }
});


new Swiper('.promotion .swiper', {
    loop : true,
    autoplay : true,
    slidesPerView : 3,
    spaceBetween : 10,
    centeredSlides : true,
    pagination : {
        el : '.promotion .swiper-pagination',
        clickable : true
    },
    navigation : {
        prevEl : '.promotion .swiper-button-prev',
        nextEl : '.promotion .swiper-button-next'
    }
});

gsap.to('.floating1', 2, {
    delay : 1,
    y: 25,
    repeat: -1,
    rotation: 27,
    yoyo: true,
    ease: Power1.easeInOut
});

gsap.to('.floating2', 2, {
    delay : 1,
    x: 25,
    repeat: -1,
    rotation: 42,
    yoyo: true,
    ease: Power1.easeInOut
});

gsap.to('.floating3', 5, {
    delay : 1,
    y: -225,
    repeat: -1,
    rotation: 360,
    yoyo: true,
    ease: 'bounce.out'
});

const spyEls = document.querySelectorAll('section.scroll-spy');

spyEls.forEach(function(spyEl){
    new ScrollMagic
    .Scene({
        triggerElement : spyEl,
        triggerHook : .7
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

new Swiper('.awards .swiper', {
    autoplay : true,
    loop : true,
    slidesPerView : 5,
    spaceBetween : 10,
    navigation : {
        prevEl : '.awards .swiper-button-prev',
        nextEl : '.awards .swiper-button-next',
    }
});

const thisYear = document.querySelector('.this-year');

thisYear.textContent = new Date().getFullYear();

toTopEl.addEventListener('click', function(){
    gsap.to(window, .8, {
        scrollTo: 0
    });
});