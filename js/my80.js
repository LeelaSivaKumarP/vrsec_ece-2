$(document).ready(function(){
var original = $('.hover_80_img').src;
var obj = $('.hover_80_img');
var arr = $.makeArray(obj);
var len = arr.length;
var indexNum = 0;

$(".cover_80_img").mouseover(
  function() {
      $(this).css("display", "none");
  $(arr[indexNum]).css("display", "block");
  }) ;
$(".hover_80_img").mouseout(
      function() {
  $(".cover_80_img").attr('src',original);
      $(".cover_80_img").css("display", "block");
      $(arr[indexNum]).css("display", "none");
      indexNum++;
      if (indexNum == len) indexNum = 0;
  }
);
});
