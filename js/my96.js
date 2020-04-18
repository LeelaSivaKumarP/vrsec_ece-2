$(document).ready(function(){
var original = $('.hover_96_img').src;
var obj = $('.hover_96_img');
var arr = $.makeArray(obj);
var len = arr.length;
var indexNum = 0;

$(".cover_96_img").mouseover(
  function() {
      $(this).css("display", "none");
  $(arr[indexNum]).css("display", "block");
  }) ;
$(".hover_96_img").mouseout(
      function() {
  $(".cover_96_img").attr('src',original);
      $(".cover_96_img").css("display", "block");
      $(arr[indexNum]).css("display", "none");
      indexNum++;
      if (indexNum == len) indexNum = 0;
  }
);
});
