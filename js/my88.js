$(document).ready(function(){
var original = $('.hover_88_img').src;
var obj = $('.hover_88_img');
var arr = $.makeArray(obj);
var len = arr.length;
var indexNum = 0;

$(".cover_88_img").mouseover(
  function() {
      $(this).css("display", "none");
  $(arr[indexNum]).css("display", "block");
  }) ;
$(".hover_88_img").mouseout(
      function() {
  $(".cover_88_img").attr('src',original);
      $(".cover_88_img").css("display", "block");
      $(arr[indexNum]).css("display", "none");
      indexNum++;
      if (indexNum == len) indexNum = 0;
  }
);
});
