$(document).ready(function(){
var original = $('.hover_61_img').src;
var obj = $('.hover_61_img');
var arr = $.makeArray(obj);
var len = arr.length;
var indexNum = 0;

$(".cover_61_img").mouseover(
  function() {
      $(this).css("display", "none");
  $(arr[indexNum]).css("display", "block");
  }) ;
$(".hover_61_img").mouseout(
      function() {
  $(".cover_61_img").attr('src',original);
      $(".cover_61_img").css("display", "block");
      $(arr[indexNum]).css("display", "none");
      indexNum++;
      if (indexNum == len) indexNum = 0;
  }
);
});
