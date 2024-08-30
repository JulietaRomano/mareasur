document.addEventListener("DOMContentLoaded", function() {
  const preloader = document.getElementById('js-preloader');
  const loadText = document.getElementById('js-load-percent');
  
  // Simula la carga del contenido (esto es solo para demostración, puedes eliminarlo)
  let loadPercentage = 0;
  const interval = setInterval(() => {
    loadPercentage += 10;
    loadText.textContent = loadPercentage + '%';
    if (loadPercentage >= 100) {
      clearInterval(interval);
    }
  }, 100);

  window.addEventListener("load", function() {
    preloader.classList.add('done');
  });
});

//RESPONSIVE Menu

var theToggle = document.getElementById('toggle');

// hasClass
function hasClass(elem, className) {
	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
// addClass
function addClass(elem, className) {
    if (!hasClass(elem, className)) {
    	elem.className += ' ' + className;
    }
}
// removeClass
function removeClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ') + ' ';
	if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}
// toggleClass
function toggleClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0 ) {
            newClass = newClass.replace( " " + className + " " , " " );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}

theToggle.onclick = function() {
   toggleClass(this, 'on');
   return false;
}





















