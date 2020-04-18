$(document).ready(function(){
var original = $('.hover_94_img').src;
var obj = $('.hover_94_img');
var arr = $.makeArray(obj);
var len = arr.length;
var indexNum = 0;

$(".cover_94_img").mouseover(
  function() {
      $(this).css("display", "none");
  $(arr[indexNum]).css("display", "block");
  }) ;
$(".hover_94_img").mouseout(
      function() {
  $(".cover_94_img").attr('src',original);
      $(".cover_94_img").css("display", "block");
      $(arr[indexNum]).css("display", "none");
      indexNum++;
      if (indexNum == len) indexNum = 0;
  }
);
});
