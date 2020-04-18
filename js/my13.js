$(document).ready(function(){
var original = $('.hover_13_img').src;
var obj = $('.hover_13_img');
var arr = $.makeArray(obj);
var len = arr.length;
var indexNum = 0;

$(".cover_13_img").mouseover(
  function() {
      $(this).css("display", "none");
  $(arr[indexNum]).css("display", "block");
  }) ;
$(".hover_13_img").mouseout(
      function() {
  $(".cover_13_img").attr('src',original);
      $(".cover_13_img").css("display", "block");
      $(arr[indexNum]).css("display", "none");
      indexNum++;
      if (indexNum == len) indexNum = 0;
  }
);
});
