var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.arrow',
      },
      breakpoints: {
        546: {
          slidesPerView: 2,
        }
      }
});

var menubtn = document.querySelector('.menu-btn');
var menu = document.querySelector('.header');
menubtn.addEventListener('click', function(){
  menubtn.classList.toggle('menu-btn-active')
  menu.classList.toggle('header-active');
})