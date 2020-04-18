$(document).ready(function(){
var original = $('.hover_90_img').src;
var obj = $('.hover_90_img');
var arr = $.makeArray(obj);
var len = arr.length;
var indexNum = 0;

$(".cover_90_img").mouseover(
  function() {
      $(this).css("display", "none");
  $(arr[indexNum]).css("display", "block");
  }) ;
$(".hover_90_img").mouseout(
      function() {
  $(".cover_90_img").attr('src',original);
      $(".cover_90_img").css("display", "block");
      $(arr[indexNum]).css("display", "none");
      indexNum++;
      if (indexNum == len) indexNum = 0;
  }
);
});
