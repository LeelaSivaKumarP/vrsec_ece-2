$(document).ready(function(){
var original = $('.hover_15_img').src;
var obj = $('.hover_15_img');
var arr = $.makeArray(obj);
var len = arr.length;
var indexNum = 0;

$(".cover_15_img").mouseover(
  function() {
      $(this).css("display", "none");
  $(arr[indexNum]).css("display", "block");
  }) ;
$(".hover_15_img").mouseout(
      function() {
  $(".cover_15_img").attr('src',original);
      $(".cover_15_img").css("display", "block");
      $(arr[indexNum]).css("display", "none");
      indexNum++;
      if (indexNum == len) indexNum = 0;
  }
);
});
