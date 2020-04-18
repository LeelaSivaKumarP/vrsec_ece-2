$(document).ready(function(){
var original = $('.hover_82_img').src;
var obj = $('.hover_82_img');
var arr = $.makeArray(obj);
var len = arr.length;
var indexNum = 0;

$(".cover_82_img").mouseover(
  function() {
      $(this).css("display", "none");
  $(arr[indexNum]).css("display", "block");
  }) ;
$(".hover_82_img").mouseout(
      function() {
  $(".cover_82_img").attr('src',original);
      $(".cover_82_img").css("display", "block");
      $(arr[indexNum]).css("display", "none");
      indexNum++;
      if (indexNum == len) indexNum = 0;
  }
);
});
