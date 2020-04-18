$(document).ready(function(){
var original = $('.hover_77_img').src;
var obj = $('.hover_77_img');
var arr = $.makeArray(obj);
var len = arr.length;
var indexNum = 0;

$(".cover_77_img").mouseover(
  function() {
      $(this).css("display", "none");
  $(arr[indexNum]).css("display", "block");
  }) ;
$(".hover_77_img").mouseout(
      function() {
  $(".cover_77_img").attr('src',original);
      $(".cover_77_img").css("display", "block");
      $(arr[indexNum]).css("display", "none");
      indexNum++;
      if (indexNum == len) indexNum = 0;
  }
);
});
