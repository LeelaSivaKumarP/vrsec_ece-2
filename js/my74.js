$(document).ready(function(){
var original = $('.hover_74_img').src;
var obj = $('.hover_74_img');
var arr = $.makeArray(obj);
var len = arr.length;
var indexNum = 0;

$(".cover_74_img").mouseover(
  function() {
      $(this).css("display", "none");
  $(arr[indexNum]).css("display", "block");
  }) ;
$(".hover_74_img").mouseout(
      function() {
  $(".cover_74_img").attr('src',original);
      $(".cover_74_img").css("display", "block");
      $(arr[indexNum]).css("display", "none");
      indexNum++;
      if (indexNum == len) indexNum = 0;
  }
);
});
