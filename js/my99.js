$(document).ready(function(){
var original = $('.hover_99_img').src;
var obj = $('.hover_99_img');
var arr = $.makeArray(obj);
var len = arr.length;
var indexNum = 0;

$(".cover_99_img").mouseover(
  function() {
      $(this).css("display", "none");
  $(arr[indexNum]).css("display", "block");
  }) ;
$(".hover_99_img").mouseout(
      function() {
  $(".cover_99_img").attr('src',original);
      $(".cover_99_img").css("display", "block");
      $(arr[indexNum]).css("display", "none");
      indexNum++;
      if (indexNum == len) indexNum = 0;
  }
);
});
