$(document).ready(function(){
var original = $('.hover_98_img').src;
var obj = $('.hover_98_img');
var arr = $.makeArray(obj);
var len = arr.length;
var indexNum = 0;

$(".cover_98_img").mouseover(
  function() {
      $(this).css("display", "none");
  $(arr[indexNum]).css("display", "block");
  }) ;
$(".hover_98_img").mouseout(
      function() {
  $(".cover_98_img").attr('src',original);
      $(".cover_98_img").css("display", "block");
      $(arr[indexNum]).css("display", "none");
      indexNum++;
      if (indexNum == len) indexNum = 0;
  }
);
});
