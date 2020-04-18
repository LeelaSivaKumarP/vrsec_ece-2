$(document).ready(function(){
var original = $('.hover_89_img').src;
var obj = $('.hover_89_img');
var arr = $.makeArray(obj);
var len = arr.length;
var indexNum = 0;

$(".cover_89_img").mouseover(
  function() {
      $(this).css("display", "none");
  $(arr[indexNum]).css("display", "block");
  }) ;
$(".hover_89_img").mouseout(
      function() {
  $(".cover_89_img").attr('src',original);
      $(".cover_89_img").css("display", "block");
      $(arr[indexNum]).css("display", "none");
      indexNum++;
      if (indexNum == len) indexNum = 0;
  }
);
});
