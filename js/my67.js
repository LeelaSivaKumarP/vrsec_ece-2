$(document).ready(function(){
var original = $('.hover_67_img').src;
var obj = $('.hover_67_img');
var arr = $.makeArray(obj);
var len = arr.length;
var indexNum = 0;

$(".cover_67_img").mouseover(
  function() {
      $(this).css("display", "none");
  $(arr[indexNum]).css("display", "block");
  }) ;
$(".hover_67_img").mouseout(
      function() {
  $(".cover_67_img").attr('src',original);
      $(".cover_67_img").css("display", "block");
      $(arr[indexNum]).css("display", "none");
      indexNum++;
      if (indexNum == len) indexNum = 0;
  }
);
});
