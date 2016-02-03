(function() {
  
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
  
  
/*========================  Mobile navigation slide over  ===========================*/
  
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
    icon.classList.toggle( "active" );
  }, 1000 );
  
}, false ); 
  
  
  
/*========================== Category button-list ===============================*/
  
var category_btn = document.querySelector( ".gallery-nav__category" );
var category_list = document.querySelector( ".category-list" );
  
category_btn.addEventListener( "click", function( event ) {
  if( event.target == category_btn && window.innerWidth > 825 ) {
    category_list.classList.toggle( "category-list--active" );
    category_btn.classList.toggle( "gallery-nav__category--active" );
  }
});

category_list.addEventListener( "click", function( event ) {
  event.target.classList.toggle( "item-active" );
});



/*========================= Portfolio gallery grid buttons ==========================*/
var gallery_panel = document.querySelector( ".gallery-nav" );
var btn_square = document.querySelector( ".gallery-nav__grid-btn--square" );
var btn_lines = document.querySelector( ".gallery-nav__grid-btn--lines" );
var gallery = document.querySelector( ".gallery-container" );

gallery_panel.addEventListener( "click", function( event ) {
  
  if( event.target == btn_square && btn_lines.classList.contains( "lines-active" ) ) {
    event.target.classList.add( "square-active" );
    btn_lines.classList.remove( "lines-active" );
    gallery.classList.add( "gallery-grid--square" );
    gallery.classList.remove( "gallery-grid--lines" );
  }
  
  else if ( event.target == btn_lines && btn_square.classList.contains( "square-active" ) ) {
    event.target.classList.add( "lines-active" );
    btn_square.classList.remove( "square-active" );
    gallery.classList.add( "gallery-grid--lines" );
    gallery.classList.remove( "gallery-grid--square" );
  }
  
});

/*============================  Textcontent slice onload  ==========================*/

var gallery_content = document.querySelectorAll( ".gallery-item__intro" );
  
document.addEventListener( "DOMContentLoaded", function( event ) {
  
  for( i = 0; i < gallery_content.length; i++ ) {
    
    if( gallery_content[i].textContent.length > 120 ) {
      gallery_content[i].textContent =  gallery_content[i].textContent.substr(0, 120) + "...";
    }
    
  }
  
});

/*============================Category list buttons ===========================*/
var group_list = document.querySelector( ".gallery-nav__groups-list" );
  
group_list.addEventListener( "click", function( event ) {

  if( event.target.tagName.toUpperCase() == "LI" ) {
    event.target.classList.toggle( "groups-list__item--active" );
  }
  
})

})();




/*

function addClickListener(btn, text) {
  btn.addEventListener("click", function ( event ) {
    console.log(text);
  })
}

addClickListener( document.querySelector( ".page-header__search" ), "123123123" );
addClickListener( document.querySelector( ".page-banner__title" ), "asdasdasda" );

*/













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














