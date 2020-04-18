$(document).ready(function(){
var original = $('.hover_86_img').src;
var obj = $('.hover_86_img');
var arr = $.makeArray(obj);
var len = arr.length;
var indexNum = 0;

$(".cover_86_img").mouseover(
  function() {
      $(this).css("display", "none");
  $(arr[indexNum]).css("display", "block");
  }) ;
$(".hover_86_img").mouseout(
      function() {
  $(".cover_86_img").attr('src',original);
      $(".cover_86_img").css("display", "block");
      $(arr[indexNum]).css("display", "none");
      indexNum++;
      if (indexNum == len) indexNum = 0;
  }
);
});
