$(document).ready(function(){
var original = $('.hover_66_img').src;
var obj = $('.hover_66_img');
var arr = $.makeArray(obj);
var len = arr.length;
var indexNum = 0;

$(".cover_66_img").mouseover(
  function() {
      $(this).css("display", "none");
  $(arr[indexNum]).css("display", "block");
  }) ;
$(".hover_66_img").mouseout(
      function() {
  $(".cover_66_img").attr('src',original);
      $(".cover_66_img").css("display", "block");
      $(arr[indexNum]).css("display", "none");
      indexNum++;
      if (indexNum == len) indexNum = 0;
  }
);
});
