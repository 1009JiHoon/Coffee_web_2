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

window.addEventListener('scroll', function(){
    if(scrollY > 500){
        gsap.to(BadgesEl, .6, {
            opacity: 0
        });
    }
    else {
        gsap.to(BadgesEl, .6, {
            opacity: 1
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

