$(document).ready(function(){
var original = $('.hover_79_img').src;
var obj = $('.hover_79_img');
var arr = $.makeArray(obj);
var len = arr.length;
var indexNum = 0;

$(".cover_79_img").mouseover(
  function() {
      $(this).css("display", "none");
  $(arr[indexNum]).css("display", "block");
  }) ;
$(".hover_79_img").mouseout(
      function() {
  $(".cover_79_img").attr('src',original);
      $(".cover_79_img").css("display", "block");
      $(arr[indexNum]).css("display", "none");
      indexNum++;
      if (indexNum == len) indexNum = 0;
  }
);
});
