AdobeEdge.bootstrapCallback(function(compId){
	AdobeEdge.$('body').css('height','10000px').append('<p>debug</p>');

	AdobeEdge.$(window).on('scroll',function(){
		checkScroll();
	}).resize(function(){
		checkScroll();
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

		AdobeEdge.$('p').html('scrollPos - '+scrollPos + '<br/> animation duration = '+duration+',br/>scrollPercent = '+scrollPercent+'<br/>animPosition = '+animPosition);
	}
});