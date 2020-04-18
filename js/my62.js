$(document).ready(function(){
var original = $('.hover_62_img').src;
var obj = $('.hover_62_img');
var arr = $.makeArray(obj);
var len = arr.length;
var indexNum = 0;

$(".cover_62_img").mouseover(
  function() {
      $(this).css("display", "none");
  $(arr[indexNum]).css("display", "block");
  }) ;
$(".hover_62_img").mouseout(
      function() {
  $(".cover_62_img").attr('src',original);
      $(".cover_62_img").css("display", "block");
      $(arr[indexNum]).css("display", "none");
      indexNum++;
      if (indexNum == len) indexNum = 0;
  }
);
});
