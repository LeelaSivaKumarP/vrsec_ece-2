$(document).ready(function(){
var original = $('.hover_17_img').src;
var obj = $('.hover_17_img');
var arr = $.makeArray(obj);
var len = arr.length;
var indexNum = 0;

$(".cover_17_img").mouseover(
  function() {
      $(this).css("display", "none");
  $(arr[indexNum]).css("display", "block");
  }) ;
$(".hover_17_img").mouseout(
      function() {
  $(".cover_17_img").attr('src',original);
      $(".cover_17_img").css("display", "block");
      $(arr[indexNum]).css("display", "none");
      indexNum++;
      if (indexNum == len) indexNum = 0;
  }
);
});
