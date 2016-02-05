(function(){
  
/*========================  Mobile navigation slide over  ===========================*/
  
var menu_btn = document.querySelector( ".page-header__open-btn-wrapper" );
var menu = document.querySelector( ".page-header__main-navigation" );
  
menu_btn.addEventListener( "click", function() {
  var menu_icon = menu_btn.querySelector( ".open-btn" );
  var elems = menu.children
  console.log(1);
  menu_icon.classList.toggle( "open-btn--active" );
  timeOut( elems, 0 );
});
  
function timeOut( arr, i ) {
  
  setTimeout(function(){
    arr[i].classList.toggle( "page-header__navigation-item--view" );
    
    if( i !== arr.length ) {
      timeOut( arr, i + 1 );
    }
    
  },200 );
  
};
  
/*================================= Ripple effect button =============================*/

var rippleClickBtn = document.querySelector( ".slider__btn" );

  rippleClickBtn.addEventListener( "click", addRippleEffect);

  function addRippleEffect( event ) {
    event.preventDefault();
    var btn = event.target;

    while( btn.tagName.toLowerCase() !== "a") {
      btn = btn.parentElement;
    };

    var coords = btn.getBoundingClientRect();

    if( btn.lastElementChild.classList.contains( "circle" ) ) {
      btn.removeChild( btn.lastElementChild )
      var circle = createCircle( btn, coords, event );

      circle.addEventListener( "animationend", function( event ) {
        btn.removeChild( circle );
      });
    }
    else {
      var circle = createCircle( btn, coords, event );

      circle.addEventListener( "animationend", function( event ) {
        btn.removeChild( circle );
      });
    }

    function createCircle ( elem, coords, event ) {
    var circle = document.createElement( "div" );

    circle.classList.add( "circle" );
    circle.style.top = event.clientY - coords.top + "px";
    circle.style.left = event.clientX - coords.left + "px";
    elem.appendChild( circle );
    circle.classList.add( 'transform' );

    return circle;
    }
  }
  
  /*=============================  Testimonals slider  ================================*/
  
var element = document.querySelectorAll( ".element" );
var phrase = document.querySelectorAll(".testimonals__phrase");

for( var i = 0; i < element.length; i++ ) {
  element[i].addEventListener( "click", function( event ) {
    
    for( i = 0; i < element.length; i++ ) {
      element[i].classList.remove( "active" );
    }
    
    this.classList.add( "active" );
    
    function showPhrase() {  
  
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
  
})();