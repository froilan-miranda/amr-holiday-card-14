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
         sym.$(".bg_bottom_bar").css("background-repeat","repeat-x");

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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12250, function(sym, e) {
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

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-35607789");