$(document).ready(function(){
var original = $('.hover_B5_img').src;
var obj = $('.hover_B5_img');
var arr = $.makeArray(obj);
var len = arr.length;
var indexNum = 0;

$(".cover_B5_img").mouseover(
  function() {
      $(this).css("display", "none");
  $(arr[indexNum]).css("display", "block");
  }) ;
$(".hover_B5_img").mouseout(
      function() {
  $(".cover_B5_img").attr('src',original);
      $(".cover_B5_img").css("display", "block");
      $(arr[indexNum]).css("display", "none");
      indexNum++;
      if (indexNum == len) indexNum = 0;
  }
);
});
