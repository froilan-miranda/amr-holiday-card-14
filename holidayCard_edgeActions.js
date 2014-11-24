/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // insert code to be run when the composition is fully loaded here

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 100, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5123, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bttn_next}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bttn_next}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bttn_prev2}", "touchstart", function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bttn_prev}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bttn_prev}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_swipe_left}", "swipeleft", function(sym, e) {
         // insert code to be run when a swipeleft event occurs on an element
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_swipe_both}", "swipeleft", function(sym, e) {
         // insert code to be run when a swipeleft event occurs on an element
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_swipe_both}", "swiperight", function(sym, e) {
         // insert code to be run when a swiperight event occurs on an element
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${btn_swipe_right}", "swiperight", function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bttn_fly}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bttn_fly}", "touchstart", function(sym, e) {
         // insert code for mouse click here
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bttn_collection}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute)
         window.open("http://www.amresorts.com", "_self");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bttn_again}", "click", function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bttn_restart2}", "click", function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bttn_restart2}", "touchstart", function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${bttn_again}", "touchstart", function(sym, e) {
         sym.play(0);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'gr_bg_sky'
   (function(symbolName) {   
   
   })("gr_bg_sky");
   //Edge symbol end:'gr_bg_sky'

   //=========================================================
   
   //Edge symbol: 'bg_sky'
   (function(symbolName) {   
   
   })("bg_sky");
   //Edge symbol end:'bg_sky'

   //=========================================================
   
   //Edge symbol: 'bttn_next'
   (function(symbolName) {   
   
   })("bttn_next");
   //Edge symbol end:'bttn_next'

   //=========================================================
   
   //Edge symbol: 'bttn_prev'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${bttn_prev}", "touchstart", function(sym, e) {
         // insert code to be run when a user touches the object (for touch devices only)
         sym.playReverse();

      });
      //Edge binding end

   })("bttn_prev");
   //Edge symbol end:'bttn_prev'

   //=========================================================
   
   //Edge symbol: 'bttn_fly'
   (function(symbolName) {   
   
   })("bttn_fly");
   //Edge symbol end:'bttn_fly'

   //=========================================================
   
   //Edge symbol: 'bttn_collection'
   (function(symbolName) {   
   
   })("bttn_collection");
   //Edge symbol end:'bttn_collection'

   //=========================================================
   
   //Edge symbol: 'clouds'
   (function(symbolName) {   
   
   })("clouds");
   //Edge symbol end:'clouds'

   //=========================================================
   
   //Edge symbol: 'cloud'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();
         
         // interval
         var timer = setInterval(onTimer,50);
         //var mysymbol = sym.getSymbol("cloud");
         var maxX = $('#Stage').width();
         var mySym = sym.getSymbolElement();
         var speed = Math.floor((Math.random() * 3) + 1);
         
         //alert(mySym.width());
         //alert(maxX);
         mySym.css("position","absolute");
         
         
         // function
         function onTimer() {
         	// clear last interval
         	//clearInterval(timer);
         
         	// action
         	var oldLeft = mySym.position().left;
         	var newLeft;
         
         	if(oldLeft > -(mySym.width())){
         		newLeft = oldLeft - speed;
         	}else{
         		newLeft = maxX;
         		mySym.css("top", randomY()+"px");
         	}
         	//console.log(newLeft);
         	mySym.css("left", newLeft+"px");
         
         }
         
         function randomY(){
         	var minY=0;
         	var maxY=150 - mySym.height();
         	return (Math.floor((Math.random() * (maxY - minY)) + 0));
         }

      });
      //Edge binding end

   })("cloud");
   //Edge symbol end:'cloud'

   //=========================================================
   
   //Edge symbol: 'clouds_med'
   (function(symbolName) {   
   
   })("clouds_med");
   //Edge symbol end:'clouds_med'

   //=========================================================
   
   //Edge symbol: 'cloud_med'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 93, function(sym, e) {
         sym.stop();
         
         // interval
         var timer = setInterval(onTimer,50);
         //var mysymbol = sym.getSymbol("cloud");
         var maxX = $('#Stage').width();
         var mySym = sym.getSymbolElement();
         var speed = Math.floor((Math.random() * 1) + 1);
         
         //alert(mySym.width());
         //alert(maxX);
         mySym.css("position","absolute");
         
         
         // function
         function onTimer() {
         	// clear last interval
         	//clearInterval(timer);
         
         	// action
         	var oldLeft = mySym.position().left;
         	var newLeft;
         
         	if(oldLeft > -(mySym.width())){
         		newLeft = oldLeft - speed;
         	}else{
         		newLeft = maxX;
         		mySym.css("top", randomY()+"px");
         	}
         	//console.log(newLeft);
         	mySym.css("left", newLeft+"px");
         
         }
         
         function randomY(){
         	var minY=0;
         	var maxY=75 - mySym.height();
         	return (Math.floor((Math.random() * (maxY - minY)) + 0));
         }

      });
      //Edge binding end

   })("cloud_med");
   //Edge symbol end:'cloud_med'

   //=========================================================
   
   //Edge symbol: 'bttn_again'
   (function(symbolName) {   
   
   })("bttn_again");
   //Edge symbol end:'bttn_again'

   //=========================================================
   
   //Edge symbol: 'bttn_restart'
   (function(symbolName) {   
   
   })("bttn_restart");
   //Edge symbol end:'bttn_restart'

   //=========================================================
   
   //Edge symbol: 'Preloader'
   (function(symbolName) {   
   
   })("Preloader");
   //Edge symbol end:'Preloader'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-35607789");