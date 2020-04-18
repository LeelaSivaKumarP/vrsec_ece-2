$(document).ready(function(){
var original = $('.hover_70_img').src;
var obj = $('.hover_70_img');
var arr = $.makeArray(obj);
var len = arr.length;
var indexNum = 0;

$(".cover_70_img").mouseover(
  function() {
      $(this).css("display", "none");
  $(arr[indexNum]).css("display", "block");
  }) ;
$(".hover_70_img").mouseout(
      function() {
  $(".cover_70_img").attr('src',original);
      $(".cover_70_img").css("display", "block");
      $(arr[indexNum]).css("display", "none");
      indexNum++;
      if (indexNum == len) indexNum = 0;
  }
);
});
