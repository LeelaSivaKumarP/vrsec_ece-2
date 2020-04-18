$(document).ready(function(){
var original = $('.hover_78_img').src;
var obj = $('.hover_78_img');
var arr = $.makeArray(obj);
var len = arr.length;
var indexNum = 0;

$(".cover_78_img").mouseover(
  function() {
      $(this).css("display", "none");
  $(arr[indexNum]).css("display", "block");
  }) ;
$(".hover_78_img").mouseout(
      function() {
  $(".cover_78_img").attr('src',original);
      $(".cover_78_img").css("display", "block");
      $(arr[indexNum]).css("display", "none");
      indexNum++;
      if (indexNum == len) indexNum = 0;
  }
);
});
