//
// navbar.js
// Theme module
//

'use strict';

(function() {
  
  //
  // Variables
  //

  var navbar = document.querySelector('.navbar');
  var imgLogo = document.querySelector('.navbar-brand-img');
  var isLight = false;
  var isTogglable = navbar ? navbar.classList.contains('navbar-togglable') : false;


  //
  // Functions
  //

  function makeNavbarLight() {
    if (!isLight && isTogglable) {
      //navbar.classList.remove('navbar-dark');
      //navbar.classList.add('navbar-light');
      navbar.classList.add('bg-white');
      navbar.classList.add('border-bottom');

      if (navbar.classList.contains('cambiar-color') ){
        navbar.classList.add('navbar-light');
        imgLogo.src = imgLogo.src.replace("brand-negro-transparente2.svg", "brand-blanco-transparente2.svg");
        navbar.classList.remove('navbar-dark');
      }  

     

      isLight = true;
    }
  }
  
  function makeNavbarDark() {
    if (isLight && isTogglable) {
      //navbar.classList.remove('navbar-light');
      navbar.classList.remove('bg-white');
      navbar.classList.remove('border-bottom');
      //navbar.classList.add('navbar-dark');
     
      if (navbar.classList.contains('cambiar-color') ){
        navbar.classList.add('navbar-dark');
        imgLogo.src = imgLogo.src.replace("brand-blanco-transparente2.svg", "brand-negro-transparente2.svg");
        navbar.classList.remove('navbar-light');
      } 
      
      repaintNav();

      isLight = false;
    }
  }

  // Repaint hack for Safari overscroll bug
  function repaintNav() {
    navbar.style.display='none';
    navbar.offsetHeight;
    navbar.style.display='block';
  }

  function toggleNavbar(event) {
    var scrollTop = window.pageYOffset;

    if (scrollTop > 0 && !isLight) {
      makeNavbarLight();
    } else if (scrollTop == 0 || scrollTop < 0 && isLight) {
      makeNavbarDark();
    }
  }

  
  //
  // Events
  //

  if (navbar && isTogglable) {
    "load scroll".split(' ').forEach(function(e) {
      window.addEventListener(e, function(e) {
        var type = e.type;

        toggleNavbar(type);
      });
    });
    makeNavbarLight();
  }

})();