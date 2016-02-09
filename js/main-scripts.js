(function(){
  
/*========================  Mobile navigation slide over  ===========================*/
  
var menu_btn = document.querySelector( ".page-header__open-btn-wrapper" );
var menu = document.querySelector( ".page-header__main-navigation" );
  
menu_btn.addEventListener( "click", function() {
  var menu_icon = menu_btn.querySelector( ".open-btn" );
  var elems = menu.children
  
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

var headerSlider = document.querySelector( ".page__slider" )
headerSlider.addEventListener( "click", function ( event ){
  var btn = event.target;
  
  if( btn.classList.contains( "slider__btn" ) || btn.parentElement.classList.contains( "slider__btn" ) ) {
    addRippleEffect( event );
  } 
  
})

//rippleClickBtn.addEventListener( "click", addRippleEffect);

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
  
/*============================  Textcontent slice onload  ==========================*/
  
var offerContent = document.querySelectorAll( ".offer-item__content");
var servicesContent = document.querySelectorAll( ".services__item-content");

document.addEventListener( "DOMContentLoaded", function( event ) {
  textSlice( offerContent, 140 );
});
  
function textSlice( elemsArray, strLength ) {
  elemsArray.forEach = [].forEach;

  elemsArray.forEach( function( el, i, arr ){
    cutString( el, strLength );
  })

  function cutString( el, strLength ) {
    var text = el.textContent;

    if( text.length > strLength ) {
      el.textContent = text.substr( 0, strLength ) + "...";
    }
  }
}
  
  
  
/*============================  Main slider  ==========================*/
  
var sliderBg = document.querySelector( ".slider-wrap" );
var slides = document.querySelectorAll(".slide");
  
document.addEventListener( "click", function( event ) {
  if( event.target.classList.contains( "controls__btn" ) ) {
    mainSlider( event );
  }
})

function mainSlider( event ) {
  var index = event.target.dataset.index;
  var displayWidth = document.documentElement.clientWidth;
  var controlButtonsArray = document.querySelectorAll( ".controls__btn" );
  var slidesArray = document.querySelectorAll( ".slide" );
  var sliderBg = document.querySelector( ".slider-wrap" );
  
  event.preventDefault();
  iterate( controlButtonsArray, "active" );
  iterate( slidesArray, "slide-active" );
  sliderBg.style.backgroundPosition = displayWidth * 0.8 * ( -index ) + "px"; 
  
  function iterate( collection, classToRemove, classToAdd ) {
    collection.forEach = [].forEach;
    classToAdd = classToAdd || classToRemove;
    
    collection.forEach( function( el, i, arr ) {
      el.classList.remove( classToRemove );
      
      if( el.dataset.index == index ) {
        el.classList.add( classToAdd );
      };
    });
  }
  
}

})();




   /* event.preventDefault();
    
    var btn = event.target;
    var index = btn.dataset.index;
    var controlButtons = document.querySelectorAll( ".controls__btn" );
    
    controlButtons.forEach = [].forEach;
    controlButtons.forEach( function( el, i, arr ){
      el.classList.remove( "active" );
    })
    
    btn.classList.add( "active" )
    
    slides.forEach = [].forEach;
    slides.forEach( function( el, i, arr ){
      el.classList.remove( "slide-active" )
      if( el.dataset.index == index ) {
        el.classList.add( "slide-active" );
      }
    })
    
    sliderBg.style.backgroundPosition = (document.documentElement.clientWidth * 0.8) * (-index) + "px";*/