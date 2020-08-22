$(document).ready(function(){

    /* for the sticky navigation */
$(".js--section-features").waypoint(function(direction){

    if (direction == "down"){
        $('nav').addClass("sticky");
    } else {
        $('nav').removeClass("sticky");
}
},{  offset:"60px ;"
});


    /* scroll on buttons */
    $('.js--scroll-to-products').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-products').offset().top},1000);
    });

    $('.js--scroll-to-start').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top},1000);
    });

    
    /* Navigation scroll */
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top
              }, 1000);
              return false;
            }
          }
        });
      });
      
  


      /* animations on scroll */
      
      $('.js--wp-1').waypoint(function(direction){
          $('.js--wp-1').addClass('animated fadeIn');
      }, { 
          offset: '50%'
         });

         
      $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated fadeInUp');
    }, { 
        offset: '50%'
       });


       
      $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animated fadeIn');
    }, { 
        offset: '50%'
       });




   
});




