
    var swiper = new Swiper(".product-slider", {
      loop:true,
      spaceBetween: 20,
      autoplay:{
        delay:5000,
        disableOnInteraction:false,
      },
      centeredSlides: true,
      freeMode: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1020: {
          slidesPerView: 3,
        },
      },
    });
    
    var swiper = new Swiper(".review-slider", {
      loop:true,
      spaceBetween: 10,
      autoplay:{
        delay:500,
        disableOnInteraction:false,
      },
      grabCursor: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1020: {
          slidesPerView: 3,
        },
      },
    });