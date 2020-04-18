$(document).ready(function(){
var original = $('.hover_C0_img').src;
var obj = $('.hover_C0_img');
var arr = $.makeArray(obj);
var len = arr.length;
var indexNum = 0;

$(".cover_C0_img").mouseover(
  function() {
      $(this).css("display", "none");
  $(arr[indexNum]).css("display", "block");
  }) ;
$(".hover_C0_img").mouseout(
      function() {
  $(".cover_C0_img").attr('src',original);
      $(".cover_C0_img").css("display", "block");
      $(arr[indexNum]).css("display", "none");
      indexNum++;
      if (indexNum == len) indexNum = 0;
  }
);
});
