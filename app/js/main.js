$(function () {
   
    
    $('.slider__follow').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrow:true,
          prevArrow:'<button class="slick-arrow slick-prev"></button>',
        nextArrow:'<button class="slick-arrow slick-next"></button>'
        
        
       


    });



  $('.weekly__slider').slick({
   
    arrow: true,
    prevArrow: '<button class="slick-arrow slick-prev__weekly"></button>',
    nextArrow: '<button class="slick-arrow slick-next__weekly"></button>'





  });
  $(".rate-star").rateYo({
    rating: 5,
    starWidth: "12px",
    readOnly: true
  });
  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 200,
    to: 500,
    grid: true
});


$('.icon-th-list').on('click', function(){
  $('.cart__item').addClass('list');
  $('.icon-th-list').addClass('active');
  $('.icon-th-large').removeClass('active')
});
$('.icon-th-large').on('click', function(){
  $('.cart__item').removeClass('list');
  $('.icon-th-large').addClass('active');
  $('.icon-th-list').removeClass('active')
});






var mixer = mixitup('.cart__inner');


});
$(".rate-star").rateYo({
  rating: 5,
  starWidth: "12px",
  readOnly: true
});


$(document).ready(function(){
    
  
  $(".click").click(function(){
   
    $(".drop-down__list").toggle(300);
      
  
  });  
});