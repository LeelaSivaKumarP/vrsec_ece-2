$(document).ready(function(){
var original = $('.hover_B6_img').src;
var obj = $('.hover_B6_img');
var arr = $.makeArray(obj);
var len = arr.length;
var indexNum = 0;

$(".cover_B6_img").mouseover(
  function() {
      $(this).css("display", "none");
  $(arr[indexNum]).css("display", "block");
  }) ;
$(".hover_B6_img").mouseout(
      function() {
  $(".cover_B6_img").attr('src',original);
      $(".cover_B6_img").css("display", "block");
      $(arr[indexNum]).css("display", "none");
      indexNum++;
      if (indexNum == len) indexNum = 0;
  }
);
});
