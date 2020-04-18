$(document).ready(function(){
var original = $('.hover_85_img').src;
var obj = $('.hover_85_img');
var arr = $.makeArray(obj);
var len = arr.length;
var indexNum = 0;

$(".cover_85_img").mouseover(
  function() {
      $(this).css("display", "none");
  $(arr[indexNum]).css("display", "block");
  }) ;
$(".hover_85_img").mouseout(
      function() {
  $(".cover_85_img").attr('src',original);
      $(".cover_85_img").css("display", "block");
      $(arr[indexNum]).css("display", "none");
      indexNum++;
      if (indexNum == len) indexNum = 0;
  }
);
});
