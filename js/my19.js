$(document).ready(function(){
var original = $('.hover_19_img').src;
var obj = $('.hover_19_img');
var arr = $.makeArray(obj);
var len = arr.length;
var indexNum = 0;

$(".cover_19_img").mouseover(
  function() {
      $(this).css("display", "none");
  $(arr[indexNum]).css("display", "block");
  }) ;
$(".hover_19_img").mouseout(
      function() {
  $(".cover_19_img").attr('src',original);
      $(".cover_19_img").css("display", "block");
      $(arr[indexNum]).css("display", "none");
      indexNum++;
      if (indexNum == len) indexNum = 0;
  }
);
});
