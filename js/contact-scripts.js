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

/*========================  Google map  ===========================*/
  
function initialize() {
  var markerCoords = {lat: 29.767448, lng: -95.365962}
  var mapOptions = {
    center: new google.maps.LatLng( markerCoords.lat, markerCoords.lng ),
    zoom: 7,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true
  }
  var mapCanvas = document.getElementById("map");
  
  var map = new google.maps.Map(mapCanvas, mapOptions); 
  var marker = new google.maps.Marker({
    position: markerCoords,
    map: map,
    title: "We are here."
  })
}
  
google.maps.event.addDomListener(window, 'load', initialize);

})();