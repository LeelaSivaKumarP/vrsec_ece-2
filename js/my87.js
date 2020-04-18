$(document).ready(function(){
var original = $('.hover_87_img').src;
var obj = $('.hover_87_img');
var arr = $.makeArray(obj);
var len = arr.length;
var indexNum = 0;

$(".cover_87_img").mouseover(
  function() {
      $(this).css("display", "none");
  $(arr[indexNum]).css("display", "block");
  }) ;
$(".hover_87_img").mouseout(
      function() {
  $(".cover_87_img").attr('src',original);
      $(".cover_87_img").css("display", "block");
      $(arr[indexNum]).css("display", "none");
      indexNum++;
      if (indexNum == len) indexNum = 0;
  }
);
});
