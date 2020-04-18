$(document).ready(function(){
var original = $('.hover_81_img').src;
var obj = $('.hover_81_img');
var arr = $.makeArray(obj);
var len = arr.length;
var indexNum = 0;

$(".cover_81_img").mouseover(
  function() {
      $(this).css("display", "none");
  $(arr[indexNum]).css("display", "block");
  }) ;
$(".hover_81_img").mouseout(
      function() {
  $(".cover_81_img").attr('src',original);
      $(".cover_81_img").css("display", "block");
      $(arr[indexNum]).css("display", "none");
      indexNum++;
      if (indexNum == len) indexNum = 0;
  }
);
});
