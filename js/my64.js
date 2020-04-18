$(document).ready(function(){
var original = $('.hover_64_img').src;
var obj = $('.hover_64_img');
var arr = $.makeArray(obj);
var len = arr.length;
var indexNum = 0;

$(".cover_64_img").mouseover(
  function() {
      $(this).css("display", "none");
  $(arr[indexNum]).css("display", "block");
  }) ;
$(".hover_64_img").mouseout(
      function() {
  $(".cover_64_img").attr('src',original);
      $(".cover_64_img").css("display", "block");
      $(arr[indexNum]).css("display", "none");
      indexNum++;
      if (indexNum == len) indexNum = 0;
  }
);
});
