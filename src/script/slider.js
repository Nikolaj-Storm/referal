$(document).ready(function () {
  $('.real-slider').slick({
    slidesToShow: 4 /* Number of images visible at a time */,
    slidesToScroll: 1 /* Number of images to scroll per click */,
    autoplay: true /* Enable auto-slide */,
    autoplaySpeed: 0 /* No delay between slides */,
    speed: 3000 /* Speed for sliding */,
    cssEase: 'linear' /* Continuous scrolling */,
    infinite: true /* Enable infinite looping */,
    arrows: false /* Remove previous/next arrows */,
    pauseOnHover: false /* Keeps sliding even on hover */,
    variableWidth: true /* Adjusts width dynamically based on image size */,
  });
});
$(document).ready(function () {
  $('.artwork-slider').slick({
    slidesToShow: 1 /* Number of images visible at a time */,
    slidesToScroll: 1 /* Number of images to scroll per click */,
    autoplay: true /* Enable auto-slide */,
    autoplaySpeed: 0 /* No delay between slides */,
    speed: 13000 /* Speed for sliding */,
    cssEase: 'linear' /* Continuous scrolling */,
    infinite: true /* Enable infinite looping */,
    arrows: false /* Remove previous/next arrows */,
    pauseOnHover: false /* Keeps sliding even on hover */,
    variableWidth: true /* Adjusts width dynamically based on image size */,
  });
});
$(document).ready(function () {
  $('.logos-slider').slick({
    slidesToShow: 5, 
    autoplay: true,             
    autoplaySpeed: 0,            
    speed: 4000,                  
    cssEase: 'linear',            
    infinite: true,               
    arrows: false,            
    pauseOnHover: false,          
    variableWidth: true,          
    centerMode: true,        
  });
});
$('.choose-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: false,
    prevArrow: $('.choose-prev-arrow'),
    nextArrow: $('.choose-next-arrow')
});
$('.revenue-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: false,
    centerMode: true, 
    centerPadding: '5%', 
});
$('.testimonial-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    adaptiveHeight: true,
    autoplay: true,
    prevArrow: $('.testimonial-prev-arrow'),
    nextArrow: $('.testimonial-next-arrow'),
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
});

	