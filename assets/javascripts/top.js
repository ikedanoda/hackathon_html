$(function(){
	
	//コンテンツ全体の幅
	var slideContents = $('#slideContents');
	var slideContentsWidth = slideContents.width();
	
	//本棚一つの幅
	var shelfWidth = 203;
	
	//ウィンドウ幅
	var windowWidth = $(window).width();
	
	//移動幅（コンテンツの幅 ー ウィンドウ幅）用の変数
	var moveLimit = 0;
	
	//ポジションの値
	var contentsPotision = 0;
	
	//初期幅チェックのフラグ
	var flag1 = false;
	
	//ウィンドウ幅より大きければtrue
	if (slideContentsWidth > windowWidth) {
		flag1 = true;
	} else {
		$('#slideBtn').hide();
	}
	
	if (flag1) {
		moveLimit = -(slideContentsWidth - windowWidth);
		contentsPotision = Math.ceil(moveLimit / 2);
	}
	
	slideContents.css({
		"left": contentsPotision
	});
	
	//移動用の関数
	function contentsMove(w) {
		slideContents.animate({
			"left": w
		});
	}
	
	$('#btnNext').click(function (){
		if (moveLimit > (contentsPotision - shelfWidth)) {
			contentsPotision = moveLimit;
		} else {
			contentsPotision = contentsPotision - shelfWidth;
		}
		
		console.log(contentsPotision);
		contentsMove(contentsPotision);
	}); 
	
	
	$('#btnPrev').click(function (){
		if (0 < (contentsPotision + shelfWidth)) {
			contentsPotision = 0;
		} else {
			contentsPotision = contentsPotision + shelfWidth;
		}
		
		console.log(contentsPotision);
		contentsMove(contentsPotision);
	}); 
	
	
	
	console.log(slideContentsWidth);
});