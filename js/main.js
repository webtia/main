$(document).ready(function () {

/* ★★ Main Menu - 제이쿼리(2 메뉴 - menu7.풀다운메뉴 적용) ★ */

  $(".gnb").hover(function(){ //주메뉴영역전체에 오버시 
    $(this).find(".main .sub").stop().slideDown();
    $(".sub_bgbox").stop().slideDown();
  },function(){
    $(this).find(".main .sub").stop().slideUp();
    $(".sub_bgbox").stop().slideUp();
  });
});

  //________________________________________________________________________________


  /* ★★ visual 3-메인비주얼 fade3적용 ★★*/ 

  let $img = $(".changeimg ul li");
  let $text = $(".changeimg ul li .des");
  let $lbtn = $(".side_btn .lbtn");
	let $rbtn = $(".side_btn .rbtn"); 
  let oldImg=0;  
  let newImg=0; 
  let oldText=0;  
  let newText=0;
  let imgCount=$img.length;
  let textCount=$img.length;

  //이미지&텍스트 전환효과 함수
  function changeImg(newImg){ 

    if(oldImg != newImg){
      $img.eq(oldImg).removeClass("imgVisible");
			$img.eq(newImg).addClass("imgVisible"); 
    }
    oldImg = newImg;

  };

  function changeText(newText){ 

    if(oldText != newText){
      $text.eq(oldText).removeClass("textVisible");
			$text.eq(newText).addClass("textVisible"); 
    }
    oldText = newText;

  }


  //자동함수 생성
  function autoImg(){

    newImg++;
    if(newImg>imgCount-1){ 
      newImg=0;
		}
		changeImg(newImg);

  };
  function autoText(){

    newText++;
    if(newText>textCount-1){ 
      newText=0;
		}
		changeText(newText)

  };

  timer1=setInterval(autoImg,4000); 
  timer2=setInterval(autoText,4000); 

  
//좌우버튼 클릭시.....
$rbtn.click(function(){

  clearInterval(timer1);
  clearInterval(timer2);

  newImg++;
  if(newImg>imgCount-1){ 
    newImg=0;
  }
  changeImg(newImg);

  newText++;
  if(newText>textCount-1){ 
    newText=0;
  }
  changeText(newText);

  timer1=setInterval(autoImg,4000); 
  timer2=setInterval(autoText,4000); 

});

$lbtn.click(function(){

  clearInterval(timer1);
  clearInterval(timer2);

  newImg--;
  if(newImg<0){ 
    newImg=imgCount-1;
  }
  changeImg(newImg);

  newText--;
  if(newText>textCount-1){ 
    newText=textCount-1;
  }
  changeText(newText);

  timer1=setInterval(autoImg,4000); 
  timer2=setInterval(autoText,4000); 

});
  //________________________________________________________________________________

  
/* Greeting Menu - ★★ 3-메인비주얼 slide5 적용 ★★   */

let imgon_w= $(".slideon ul li").width();   //이미지의 가로너비
	let imgon_n= $(".slideon ul li").length;  //이미지의 총개수  
  let soldidxon=0;  //기존이미지
	let sindexon=0;  //선택된 새이미지

  $(".slideon ul li:last").prependTo(".slideon ul");
  //목록 마지막 이미지를 목록 안의 가장 앞으로 배치
  $(".slideon ul").css({ left:-imgon_w}); 
	//첫번째 이미지가 보여야 하므로 앞으로 온 맨뒤 이미지를 왼쪽으로 한칸 밀어두기


  //index번째 비주얼이미지 이동하는 함수생성
  function slideonImg(sindexon,m){ //m은 prev와 next를 판단 

    if(m==0){ //prev눌렀을때
    //이전 이미지가 슬라이드된후 마지막 이미지를 목록안의 제일 앞으로 배치

		$(".slideon ul").stop(true,true).animate({
      left:"+="+imgon_w+"px"},600,"easeOutCubic",function(){  //콜백함수
      $(".slideon ul li:last").prependTo(".slideon ul");				
      $(".slideon ul").css({ left:-imgon_w }); //최종목적지	
    });
    $(".slideon_btn ul li").eq(soldidxon).removeClass("activeon");  //기존버튼 비활성화
    $(".slideon_btn ul li").eq(sindexon).addClass("activeon");  //선택버튼 활성화

    }else{   //next눌렀을때
    //다음 이미지가 슬라이드된후 제일앞의 이미지를 목록안의 제일 마지막으로 배치

    $(".slideon ul").stop(true,true).animate({
      left:"-="+imgon_w+"px"},600,"easeOutCubic",function(){  //콜백함수
      $(".slideon ul li:first").appendTo(".slideon ul");				
      $(".slideon ul").css({ left:-imgon_w }); //최종목적지	
    });
    $(".slideon_btn ul li").eq(soldidxon).removeClass("activeon");  //기존버튼 비활성화
    $(".slideon_btn ul li").eq(sindexon).addClass("activeon");  //선택버튼 활성화

    }
    soldidxon=sindexon;

  };

  //슬라이드 자동함수 생성
  function slideonAuto(){
    sindexon++;	
    if(sindexon==imgon_n){ //img_n은 이미지개수 4, index는 0,1,2,3
			sindexon=0;
		}
    slideonImg(sindexon,1);
  };

  timeron=setInterval(slideonAuto,4000);

  //좌우버튼 클릭
  $(".nexon").click(function(){

    clearInterval(timeron); 
    sindexon++;	
    if(sindexon==imgon_n){ //img_n은 이미지개수 4, index는 0,1,2,3
			sindexon=0;
		}
    slideonImg(sindexon,1);
    timeron=setInterval(slideonAuto,4000);

  });

  $(".preon").click(function(){

    clearInterval(timeron); 
    sindexon--;	
    if(sindexon<0){ //img_n은 이미지개수 4, index는 0,1,2,3
			sindexon=imgon_n-1; 
		}
    slideonImg(sindexon,0);
    timeron=setInterval(slideonAuto,4000);

  });

  //하단버튼 클릭
  $(".slideon_btn ul li").click(function(){

    clearInterval(timeron);
    sindexon = $(this).index();

    //재배치
		for(let i=1; i <= imgon_n; i++){
			$(".slideon ul li.i"+i).appendTo(".slideon ul");
		}
		$(".slideon ul li:last").prependTo(".slideon ul");	
		$(".slideon ul li:last").prependTo(".slideon ul");	

    /* 위의 for문을 풀어서 쓰면....
    $(".slide ul li.i1").appendTo(".slide ul");
    $(".slide ul li.i2").appendTo(".slide ul");	
		$(".slide ul li.i3").appendTo(".slide ul");
		$(".slide ul li.i4").appendTo(".slide ul");

    ->for문 다음 2문장을 실행하면....맨 마지막것을 맨앞으로 보내라->맨끝에 있는 2개을 앞으로 보냄
    $(".slide ul li.i3").appendTo(".slide ul");
		$(".slide ul li.i4").appendTo(".slide ul");
		$(".slide ul li.i1").appendTo(".slide ul");
		$(".slide ul li.i2").appendTo(".slide ul");	
    */

    for (let i=1; i<=sindexon+1;i++) {
			slideonImg(sindexon,1);
		}

    timeron=setInterval(slideonAuto,4000);

  //________________________________________________________________________________


});