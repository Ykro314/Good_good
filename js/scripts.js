(function() {
var element = document.querySelectorAll( ".element" );
var phrase = document.querySelectorAll(".testimonals__phrase");

for( var i = 0; i < element.length; i++ ) {
  element[i].addEventListener( "click", function( event ) {
    
    for( i = 0; i < element.length; i++ ) {
      element[i].classList.remove( "active" );
    }
    
    this.classList.add( "active" );
    
    function showPhrase(){  
  
      for ( i = 0; i < element.length; i++ ){
        phrase[i].classList.remove( "show" );
        
        if( element[i].classList.contains( "active" ) ){
          phrase[i].classList.toggle( "show" );
        }

      }

    }
    
    showPhrase();
  }, false );
};
  
var btn = document.querySelector( ".page-header__open-btn" );
var menu = document.querySelector( ".page-header__main-navigation" );
var icon = btn.firstElementChild;
  
btn.addEventListener( "click", function( event ) {
  menu.classList.toggle( "page-header__main-navigation--translated" );
  
  if( btn.classList.contains( "page-header__open-btn--animation" ) ) {
    btn.classList.toggle( "page-header__open-btn--animation-2" );
  }
  else if (  btn.classList.contains( "page-header__open-btn--animation-2") ) {
    btn.classList.toggle( "page-header__open-btn--animation" );
  }
  else {
    btn.classList.add( "page-header__open-btn--animation" );
  }
  
  setTimeout( function() {
    icon.classList.toggle( "active" )
  }, 1000 );
  
}, false ); 
  
  
})();



/*
var btn = document.querySelector( ".page-header__open-btn" );
var menu = document.querySelector( ".page-header__main-navigation" );
var icon = btn.firstElementChild;
  
btn.addEventListener( "click", function(event) {
  menu.classList.toggle( "page-header__main-navigation--translated" );
  btn.classList.toggle( "page-header__open-btn--animation")
  
  setTimeout( function () {
    icon.classList.toggle("active")
  }, 1000);
  
}, false ); */