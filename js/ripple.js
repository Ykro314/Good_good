/*================================= Ripple effect button =============================*/
(function(){  
  
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
  
})();