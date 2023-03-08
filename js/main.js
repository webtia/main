$(document).ready(function () {

  $(".gnb").hover(function(){ //주메뉴영역전체에 오버시 
    $(this).find(".main .sub").stop().slideDown();
    $(".sub_bgbox").stop().slideDown();
  },function(){
    $(this).find(".main .sub").stop().slideUp();
    $(".sub_bgbox").stop().slideUp();
  });

});