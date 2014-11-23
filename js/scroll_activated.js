AdobeEdge.bootstrapCallback(function(compId){
	if(AdobeEdge.$('html').hasClass('no-touch')){
		//AdobeEdge.$('body').css('height','10000px').append('<p>debug</p>');
		//AdobeEdge.$('.touchElement').remove();
		AdobeEdge.$(window).on('scroll',function(){
			//checkScroll();
		}).resize(function(){
			//checkScroll();
		});

		function checkScroll(){
			var myComposition = AdobeEdge.getComposition('EDGE-35607789');
			var scrollPos = AdobeEdge.$(window).scrollTop();
			var docHeight = AdobeEdge.$(document).height();
			var winHeight = AdobeEdge.$(window).height();
			var duration = myComposition.getStage().getDuration();

			var scrollPercent = scrollPos / (winHeight -docHeight);
			var animPosition = Math.floor(duration * (scrollPercent * -1));

			myComposition.getStage().stop(animPosition);

			AdobeEdge.$('p').html('scrollPos - '+scrollPos + '<br/> animation duration = '+duration+',<br/>scrollPercent = '+scrollPercent+'<br/>animPosition = '+animPosition);
		}
	}else{
		AdobeEdge.$('scroll_message').addClass('swipe').html('Swipe to begin');
	}
});