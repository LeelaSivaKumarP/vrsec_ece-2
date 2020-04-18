$(document).ready(function(){
var original = $('.hover_95_img').src;
var obj = $('.hover_95_img');
var arr = $.makeArray(obj);
var len = arr.length;
var indexNum = 0;

$(".cover_95_img").mouseover(
  function() {
      $(this).css("display", "none");
  $(arr[indexNum]).css("display", "block");
  }) ;
$(".hover_95_img").mouseout(
      function() {
  $(".cover_95_img").attr('src',original);
      $(".cover_95_img").css("display", "block");
      $(arr[indexNum]).css("display", "none");
      indexNum++;
      if (indexNum == len) indexNum = 0;
  }
);
});
