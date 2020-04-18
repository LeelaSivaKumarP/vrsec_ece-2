$(document).ready(function(){
var original = $('.hover_65_img').src;
var obj = $('.hover_65_img');
var arr = $.makeArray(obj);
var len = arr.length;
var indexNum = 0;

$(".cover_65_img").mouseover(
  function() {
      $(this).css("display", "none");
  $(arr[indexNum]).css("display", "block");
  }) ;
$(".hover_65_img").mouseout(
      function() {
  $(".cover_65_img").attr('src',original);
      $(".cover_65_img").css("display", "block");
      $(arr[indexNum]).css("display", "none");
      indexNum++;
      if (indexNum == len) indexNum = 0;
  }
);
});
