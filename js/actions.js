jQuery(window).ready(function (){
  console.log('oi');

  //header effect
  // var shrinkHeader = 300;
  // jQuery(window).scroll(function() {
  //   var scroll = getCurrentScroll();
  //     if ( scroll >= shrinkHeader ) {
  //         jQuery('header').addClass('shrink');
  //       }
  //       else {
  //         jQuery('header').removeClass('shrink');
  //       }
  // });

  // study effects
  if(getCurrentScroll() > 300){
    jQuery('.content-blocks li').addClass('active');
  }

  jQuery(window).scroll(function(){
    if(getCurrentScroll()>300){
      jQuery('.content-blocks li').addClass('active');
    }
  });


});
function getCurrentScroll() {
  return window.pageYOffset || document.documentElement.scrollTop;
}