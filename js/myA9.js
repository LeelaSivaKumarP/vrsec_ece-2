$(document).ready(function(){
var original = $('.hover_A9_img').src;
var obj = $('.hover_A9_img');
var arr = $.makeArray(obj);
var len = arr.length;
var indexNum = 0;

$(".cover_A9_img").mouseover(
  function() {
      $(this).css("display", "none");
  $(arr[indexNum]).css("display", "block");
  }) ;
$(".hover_A9_img").mouseout(
      function() {
  $(".cover_A9_img").attr('src',original);
      $(".cover_A9_img").css("display", "block");
      $(arr[indexNum]).css("display", "none");
      indexNum++;
      if (indexNum == len) indexNum = 0;
  }
);
});
