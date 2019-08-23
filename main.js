$(document).ready(function(){
  $('.owl-1').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
   
})
  $('.owl-2').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
    items:1
   
})
});
