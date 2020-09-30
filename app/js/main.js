$(function () {
    var mixer = mixitup('.cart__inner');
    
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

});
$(".rate-star").rateYo({
  rating: 5,
  starWidth: "12px",
  readOnly: true
});


