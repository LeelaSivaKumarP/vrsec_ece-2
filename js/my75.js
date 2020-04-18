$(document).ready(function(){
var original = $('.hover_75_img').src;
var obj = $('.hover_75_img');
var arr = $.makeArray(obj);
var len = arr.length;
var indexNum = 0;

$(".cover_75_img").mouseover(
  function() {
      $(this).css("display", "none");
  $(arr[indexNum]).css("display", "block");
  }) ;
$(".hover_75_img").mouseout(
      function() {
  $(".cover_75_img").attr('src',original);
      $(".cover_75_img").css("display", "block");
      $(arr[indexNum]).css("display", "none");
      indexNum++;
      if (indexNum == len) indexNum = 0;
  }
);
});
