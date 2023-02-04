 let loginForm = document.querySelector('.login-form-container');
 document.querySelector('#login-btn').onclick=()=>{
  loginForm.classList.toggle('active')
 }
 document.querySelector('#close-login-btn').onclick=()=>{
  loginForm.classList.remove('active')
 }  


var swiper = new Swiper(".books-slider", {
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:2000,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });
  var swiper = new Swiper(".book-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grabCursor:true,
    centeredSlides:true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });




  