(function() {
var element = document.querySelectorAll( ".element" );
var phrase = document.querySelectorAll(".testimonals__phrase");

for(var i = 0; i < element.length; i++ ) {
  element[i].addEventListener( "click", function(event) {
    
    for( i = 0; i < element.length; i++ ) {
      element[i].classList.remove( "active" );
    }
    
    this.classList.add("active");
    
    function showPhrase(){  
  
      for ( i = 0; i < element.length; i++ ){
        phrase[i].classList.remove("show");
        
        if(element[i].classList.contains("active")){
          phrase[i].classList.toggle("show");
        }

      }

    }
    
    showPhrase();
  }, false);
};
  
})();