$(document).ready(function(){
var original = $('.hover_73_img').src;
var obj = $('.hover_73_img');
var arr = $.makeArray(obj);
var len = arr.length;
var indexNum = 0;

$(".cover_73_img").mouseover(
  function() {
      $(this).css("display", "none");
  $(arr[indexNum]).css("display", "block");
  }) ;
$(".hover_73_img").mouseout(
      function() {
  $(".cover_73_img").attr('src',original);
      $(".cover_73_img").css("display", "block");
      $(arr[indexNum]).css("display", "none");
      indexNum++;
      if (indexNum == len) indexNum = 0;
  }
);
});
