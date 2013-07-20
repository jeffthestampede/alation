// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

fadeSpeed = 400;
$(document).ready(function() {
  $(".quantity").mouseover(function(){
    $(".quantity_arrow_box").removeClass('hidden');
    $(".quantity_arrow_box").hide().fadeIn(fadeSpeed);
  });
  $(".quantity").mouseleave(function(){
    $(".quantity_arrow_box").fadeOut(fadeSpeed, function() {$(".quantity_arrow_box").addClass('hidden');});
  });
});


// $( document ).ready(function() {

//   var active = 0;
//   $('#navigate td').each(function(idx){$(this).html(idx);});
//   rePosition();

//   $(document).keydown(function(e){
//       reCalculate(e);
//       rePosition();
//       return false;
//   });

//   $('td').click(function(){
//      active = $(this).closest('table').find('td').index(this);
//      rePosition();
//   });

//   function reCalculate(e){
//     var rows = $('#navigate tr').length;
//     var columns = $('#navigate tr:eq(0) td').length;
//     //alert(columns + 'x' + rows);

//     if (e.keyCode == 37) { //move left or wrap
//         active = (active>0)?active-1:active;
//     }
//     if (e.keyCode == 38) { // move up
//         active = (active-columns>=0)?active-columns:active;
//     }
//     if (e.keyCode == 39) { // move right or wrap
//        active = (active<(columns*rows)-1)?active+1:active;
//     }
//     if (e.keyCode == 40) { // move down
//         active = (active+columns<=(rows*columns)-1)?active+columns:active;
//     }
//   }

//   function rePosition(){
//     $('.active').removeClass('active');
//     $('#navigate tr td').eq(active).addClass('active');
//     scrollInView();
//   }

//   function scrollInView(){
//     var target = $('#navigate tr td:eq('+active+')');
//     if (target.length)
//     {
//         var top = target.offset().top;

//         $('html,body').stop().animate({scrollTop: top-100}, 400);
//         return false;
//     }
//   }
// });
