$(document).ready(function(){
var original = $('.hover_84_img').src;
var obj = $('.hover_84_img');
var arr = $.makeArray(obj);
var len = arr.length;
var indexNum = 0;

$(".cover_84_img").mouseover(
  function() {
      $(this).css("display", "none");
  $(arr[indexNum]).css("display", "block");
  }) ;
$(".hover_84_img").mouseout(
      function() {
  $(".cover_84_img").attr('src',original);
      $(".cover_84_img").css("display", "block");
      $(arr[indexNum]).css("display", "none");
      indexNum++;
      if (indexNum == len) indexNum = 0;
  }
);
});
