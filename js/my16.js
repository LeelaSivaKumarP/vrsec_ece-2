$(document).ready(function(){
var original = $('.hover_16_img').src;
var obj = $('.hover_16_img');
var arr = $.makeArray(obj);
var len = arr.length;
var indexNum = 0;

$(".cover_16_img").mouseover(
  function() {
      $(this).css("display", "none");
  $(arr[indexNum]).css("display", "block");
  }) ;
$(".hover_16_img").mouseout(
      function() {
  $(".cover_16_img").attr('src',original);
      $(".cover_16_img").css("display", "block");
      $(arr[indexNum]).css("display", "none");
      indexNum++;
      if (indexNum == len) indexNum = 0;
  }
);
});
