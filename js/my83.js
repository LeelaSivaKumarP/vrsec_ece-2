$(document).ready(function(){
var original = $('.hover_83_img').src;
var obj = $('.hover_83_img');
var arr = $.makeArray(obj);
var len = arr.length;
var indexNum = 0;

$(".cover_83_img").mouseover(
  function() {
      $(this).css("display", "none");
  $(arr[indexNum]).css("display", "block");
  }) ;
$(".hover_83_img").mouseout(
      function() {
  $(".cover_83_img").attr('src',original);
      $(".cover_83_img").css("display", "block");
      $(arr[indexNum]).css("display", "none");
      indexNum++;
      if (indexNum == len) indexNum = 0;
  }
);
});
