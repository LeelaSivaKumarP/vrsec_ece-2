$(document).ready(function(){
var original = $('.hover_A8_img').src;
var obj = $('.hover_A8_img');
var arr = $.makeArray(obj);
var len = arr.length;
var indexNum = 0;

$(".cover_A8_img").mouseover(
  function() {
      $(this).css("display", "none");
  $(arr[indexNum]).css("display", "block");
  }) ;
$(".hover_A8_img").mouseout(
      function() {
  $(".cover_A8_img").attr('src',original);
      $(".cover_A8_img").css("display", "block");
      $(arr[indexNum]).css("display", "none");
      indexNum++;
      if (indexNum == len) indexNum = 0;
  }
);
});
