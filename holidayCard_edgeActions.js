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

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
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

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-35607789");