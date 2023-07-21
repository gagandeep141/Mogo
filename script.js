$(document).ready(function(){
    $('.bx-slider').bxSlider();
    
    $('.wrap-1 a').click(function() {
      $('.wrap-1 a').removeClass('active');
      $(this).toggleClass('active');
    });

    // not working because .toggle() adds display:none and block to .col-9

    // if(screen.width<=980){
    //   let nodeList=document.querySelectorAll('.wrap-1 ul li a');
    //   nodeList.forEach(function(i){
    //     i.addEventListener('click',function(){
    //       document.querySelector('header .col-9').classList.add('collapse');
    //     });
    //   });}

    $('.wrap-6 ul li').click(function(e) {
      event.preventDefault();
      $(this).find('p').slideToggle();
    });

   if(screen.width<=980){
    $('.wrap-1 ul li a').click(function(){
      $('header .col-9').toggle();
    });
    $('header button').click(function(){
      $('header .col-9').toggle();
    });
   }
  });

  if(screen.width<=980){
    document.querySelector('.wrap-1 header .col-2').classList.remove('display-none');
  }


// let btn=document.querySelector('header button');
// btn.addEventListener('click',function(){
//   document.querySelector('header .col-9').classList.remove('collapse');
//   document.querySelector('header .col-9').classList.remove('height-0');
// })

