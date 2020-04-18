$(document).ready(function(){
var original = $('.hover_91_img').src;
var obj = $('.hover_91_img');
var arr = $.makeArray(obj);
var len = arr.length;
var indexNum = 0;

$(".cover_91_img").mouseover(
  function() {
      $(this).css("display", "none");
  $(arr[indexNum]).css("display", "block");
  }) ;
$(".hover_91_img").mouseout(
      function() {
  $(".cover_91_img").attr('src',original);
      $(".cover_91_img").css("display", "block");
      $(arr[indexNum]).css("display", "none");
      indexNum++;
      if (indexNum == len) indexNum = 0;
  }
);
});
