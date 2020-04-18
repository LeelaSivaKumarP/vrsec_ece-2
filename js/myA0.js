$(document).ready(function(){
var original = $('.hover_A0_img').src;
var obj = $('.hover_A0_img');
var arr = $.makeArray(obj);
var len = arr.length;
var indexNum = 0;

$(".cover_A0_img").mouseover(
  function() {
      $(this).css("display", "none");
  $(arr[indexNum]).css("display", "block");
  }) ;
$(".hover_A0_img").mouseout(
      function() {
  $(".cover_A0_img").attr('src',original);
      $(".cover_A0_img").css("display", "block");
      $(arr[indexNum]).css("display", "none");
      indexNum++;
      if (indexNum == len) indexNum = 0;
  }
);
});
