$(document).ready(function(){
var original = $('.hover_24_img').src;
var obj = $('.hover_24_img');
var arr = $.makeArray(obj);
var len = arr.length;
var indexNum = 0;

$(".cover_24_img").mouseover(
  function() {
      $(this).css("display", "none");
  $(arr[indexNum]).css("display", "block");
  }) ;
$(".hover_24_img").mouseout(
      function() {
  $(".cover_24_img").attr('src',original);
      $(".cover_24_img").css("display", "block");
      $(arr[indexNum]).css("display", "none");
      indexNum++;
      if (indexNum == len) indexNum = 0;
  }
);
});
