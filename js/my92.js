$(document).ready(function(){
var original = $('.hover_92_img').src;
var obj = $('.hover_92_img');
var arr = $.makeArray(obj);
var len = arr.length;
var indexNum = 0;

$(".cover_92_img").mouseover(
  function() {
      $(this).css("display", "none");
  $(arr[indexNum]).css("display", "block");
  }) ;
$(".hover_92_img").mouseout(
      function() {
  $(".cover_92_img").attr('src',original);
      $(".cover_92_img").css("display", "block");
      $(arr[indexNum]).css("display", "none");
      indexNum++;
      if (indexNum == len) indexNum = 0;
  }
);
});
