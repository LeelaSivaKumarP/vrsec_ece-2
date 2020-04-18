$(document).ready(function(){
var original = $('.hover_A3_img').src;
var obj = $('.hover_A3_img');
var arr = $.makeArray(obj);
var len = arr.length;
var indexNum = 0;

$(".cover_A3_img").mouseover(
  function() {
      $(this).css("display", "none");
  $(arr[indexNum]).css("display", "block");
  }) ;
$(".hover_A3_img").mouseout(
      function() {
  $(".cover_A3_img").attr('src',original);
      $(".cover_A3_img").css("display", "block");
      $(arr[indexNum]).css("display", "none");
      indexNum++;
      if (indexNum == len) indexNum = 0;
  }
);
});
