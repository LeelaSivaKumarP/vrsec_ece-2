$(document).ready(function(){
var original = $('.hover_A2_img').src;
var obj = $('.hover_A2_img');
var arr = $.makeArray(obj);
var len = arr.length;
var indexNum = 0;

$(".cover_A2_img").mouseover(
  function() {
      $(this).css("display", "none");
  $(arr[indexNum]).css("display", "block");
  }) ;
$(".hover_A2_img").mouseout(
      function() {
  $(".cover_A2_img").attr('src',original);
      $(".cover_A2_img").css("display", "block");
      $(arr[indexNum]).css("display", "none");
      indexNum++;
      if (indexNum == len) indexNum = 0;
  }
);
});
