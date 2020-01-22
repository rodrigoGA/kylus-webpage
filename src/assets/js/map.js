//
// map.js
// Theme module
//

(function() {

  //
  // Variables
  //

  var map = document.querySelectorAll('[data-toggle="map"]');
  var accessToken = 'pk.eyJ1Ijoicm9nb2FiIiwiYSI6ImNqeXN6ZW9udjAxZHgzaXFkOHYwY3ppNHQifQ.9fjP6w3zWYDVvAwc36eYbg';

  //
  // Methods
  //

  function init(el) {
    var elementOptions = el.dataset.options;
        elementOptions = elementOptions ? JSON.parse(elementOptions) : {};
    var defaultOptions = {
      container: el,
      style: 'mapbox://styles/mapbox/light-v9',
      scrollZoom: false,
      interactive: false
    }
    var options = Object.assign(defaultOptions, elementOptions);

    // Get access token
    mapboxgl.accessToken = accessToken;

    // Init map
    new mapboxgl.Map(options);
  }


  //
  // Events
  //

  if (typeof mapboxgl !== 'undefined' && map) {
    [].forEach.call(map, function(el) {
      init(el);
    });
  }

})();