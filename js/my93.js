$(document).ready(function(){
var original = $('.hover_93_img').src;
var obj = $('.hover_93_img');
var arr = $.makeArray(obj);
var len = arr.length;
var indexNum = 0;

$(".cover_93_img").mouseover(
  function() {
      $(this).css("display", "none");
  $(arr[indexNum]).css("display", "block");
  }) ;
$(".hover_93_img").mouseout(
      function() {
  $(".cover_93_img").attr('src',original);
      $(".cover_93_img").css("display", "block");
      $(arr[indexNum]).css("display", "none");
      indexNum++;
      if (indexNum == len) indexNum = 0;
  }
);
});
