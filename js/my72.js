$(document).ready(function(){
var original = $('.hover_72_img').src;
var obj = $('.hover_72_img');
var arr = $.makeArray(obj);
var len = arr.length;
var indexNum = 0;

$(".cover_72_img").mouseover(
  function() {
      $(this).css("display", "none");
  $(arr[indexNum]).css("display", "block");
  }) ;
$(".hover_72_img").mouseout(
      function() {
  $(".cover_72_img").attr('src',original);
      $(".cover_72_img").css("display", "block");
      $(arr[indexNum]).css("display", "none");
      indexNum++;
      if (indexNum == len) indexNum = 0;
  }
);
});
