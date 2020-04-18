$(document).ready(function(){
var original = $('.hover_71_img').src;
var obj = $('.hover_71_img');
var arr = $.makeArray(obj);
var len = arr.length;
var indexNum = 0;

$(".cover_71_img").mouseover(
  function() {
      $(this).css("display", "none");
  $(arr[indexNum]).css("display", "block");
  }) ;
$(".hover_71_img").mouseout(
      function() {
  $(".cover_71_img").attr('src',original);
      $(".cover_71_img").css("display", "block");
      $(arr[indexNum]).css("display", "none");
      indexNum++;
      if (indexNum == len) indexNum = 0;
  }
);
});
