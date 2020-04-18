$(document).ready(function(){
var original = $('.hover_18_img').src;
var obj = $('.hover_18_img');
var arr = $.makeArray(obj);
var len = arr.length;
var indexNum = 0;

$(".cover_18_img").mouseover(
  function() {
      $(this).css("display", "none");
  $(arr[indexNum]).css("display", "block");
  }) ;
$(".hover_18_img").mouseout(
      function() {
  $(".cover_18_img").attr('src',original);
      $(".cover_18_img").css("display", "block");
      $(arr[indexNum]).css("display", "none");
      indexNum++;
      if (indexNum == len) indexNum = 0;
  }
);
});
