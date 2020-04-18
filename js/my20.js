$(document).ready(function(){
var original = $('.hover_20_img').src;
var obj = $('.hover_20_img');
var arr = $.makeArray(obj);
var len = arr.length;
var indexNum = 0;

$(".cover_20_img").mouseover(
  function() {
      $(this).css("display", "none");
  $(arr[indexNum]).css("display", "block");
  }) ;
$(".hover_20_img").mouseout(
      function() {
  $(".cover_20_img").attr('src',original);
      $(".cover_20_img").css("display", "block");
      $(arr[indexNum]).css("display", "none");
      indexNum++;
      if (indexNum == len) indexNum = 0;
  }
);
});
