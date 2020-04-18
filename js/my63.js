$(document).ready(function(){
var original = $('.hover_63_img').src;
var obj = $('.hover_63_img');
var arr = $.makeArray(obj);
var len = arr.length;
var indexNum = 0;

$(".cover_63_img").mouseover(
  function() {
      $(this).css("display", "none");
  $(arr[indexNum]).css("display", "block");
  }) ;
$(".hover_63_img").mouseout(
      function() {
  $(".cover_63_img").attr('src',original);
      $(".cover_63_img").css("display", "block");
      $(arr[indexNum]).css("display", "none");
      indexNum++;
      if (indexNum == len) indexNum = 0;
  }
);
});
