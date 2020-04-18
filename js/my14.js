$(document).ready(function(){
var original = $('.hover_14_img').src;
var obj = $('.hover_14_img');
var arr = $.makeArray(obj);
var len = arr.length;
var indexNum = 0;

$(".cover_14_img").mouseover(
  function() {
      $(this).css("display", "none");
  $(arr[indexNum]).css("display", "block");
  }) ;
$(".hover_14_img").mouseout(
      function() {
  $(".cover_14_img").attr('src',original);
      $(".cover_14_img").css("display", "block");
      $(arr[indexNum]).css("display", "none");
      indexNum++;
      if (indexNum == len) indexNum = 0;
  }
);
});
