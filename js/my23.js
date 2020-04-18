$(document).ready(function(){
var original = $('.hover_23_img').src;
var obj = $('.hover_23_img');
var arr = $.makeArray(obj);
var len = arr.length;
var indexNum = 0;

$(".cover_23_img").mouseover(
  function() {
      $(this).css("display", "none");
  $(arr[indexNum]).css("display", "block");
  }) ;
$(".hover_23_img").mouseout(
      function() {
  $(".cover_23_img").attr('src',original);
      $(".cover_23_img").css("display", "block");
      $(arr[indexNum]).css("display", "none");
      indexNum++;
      if (indexNum == len) indexNum = 0;
  }
);
});
