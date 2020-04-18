$(document).ready(function(){
var original = $('.hover_97_img').src;
var obj = $('.hover_97_img');
var arr = $.makeArray(obj);
var len = arr.length;
var indexNum = 0;

$(".cover_97_img").mouseover(
  function() {
      $(this).css("display", "none");
  $(arr[indexNum]).css("display", "block");
  }) ;
$(".hover_97_img").mouseout(
      function() {
  $(".cover_97_img").attr('src',original);
      $(".cover_97_img").css("display", "block");
      $(arr[indexNum]).css("display", "none");
      indexNum++;
      if (indexNum == len) indexNum = 0;
  }
);
});
