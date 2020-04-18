$(document).ready(function(){
var original = $('.hover_68_img').src;
var obj = $('.hover_68_img');
var arr = $.makeArray(obj);
var len = arr.length;
var indexNum = 0;

$(".cover_68_img").mouseover(
  function() {
      $(this).css("display", "none");
  $(arr[indexNum]).css("display", "block");
  }) ;
$(".hover_68_img").mouseout(
      function() {
  $(".cover_68_img").attr('src',original);
      $(".cover_68_img").css("display", "block");
      $(arr[indexNum]).css("display", "none");
      indexNum++;
      if (indexNum == len) indexNum = 0;
  }
);
});
