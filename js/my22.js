$(document).ready(function(){
var original = $('.hover_22_img').src;
var obj = $('.hover_22_img');
var arr = $.makeArray(obj);
var len = arr.length;
var indexNum = 0;

$(".cover_22_img").mouseover(
  function() {
      $(this).css("display", "none");
  $(arr[indexNum]).css("display", "block");
  }) ;
$(".hover_22_img").mouseout(
      function() {
  $(".cover_22_img").attr('src',original);
      $(".cover_22_img").css("display", "block");
      $(arr[indexNum]).css("display", "none");
      indexNum++;
      if (indexNum == len) indexNum = 0;
  }
);
});
