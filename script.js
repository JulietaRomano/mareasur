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

//RESPONSIVE

var theToggle = document.getElementById('toggle');

// based on Todd Motto functions
// https://toddmotto.com/labs/reusable-js/

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

// gsap.registerPlugin(ScrollTrigger);

// const pageContainer = document.querySelector(".container");

// /* SMOOTH SCROLL */
// const scroller = new LocomotiveScroll({
//   el: pageContainer,
//   smooth: true
// });

// scroller.on("scroll", ScrollTrigger.update);

// ScrollTrigger.scrollerProxy(pageContainer, {
//   scrollTop(value) {
//     return arguments.length
//       ? scroller.scrollTo(value, 0, 0)
//       : scroller.scroll.instance.scroll.y;
//   },
//   getBoundingClientRect() {
//     return {
//       left: 0,
//       top: 0,
//       width: window.innerWidth,
//       height: window.innerHeight
//     };
//   },
//   pinType: pageContainer.style.transform ? "transform" : "fixed"
// });

// ////////////////////////////////////
// ////////////////////////////////////
// window.addEventListener("load", function () {
//   let pinBoxes = document.querySelectorAll(".pin-wrap > *");
//   let pinWrap = document.querySelector(".pin-wrap");
//   let pinWrapWidth = pinWrap.offsetWidth;
//   let horizontalScrollLength = pinWrapWidth - window.innerWidth;

//   // Pinning and horizontal scrolling

//   gsap.to(".pin-wrap", {
//     scrollTrigger: {
//       scroller: pageContainer, //locomotive-scroll
//       scrub: true,
//       trigger: "#sectionPin",
//       pin: true,
//       // anticipatePin: 1,
//       start: "top top",
//       end: pinWrapWidth
//     },
//     x: -horizontalScrollLength,
//     ease: "none"
//   });

//   ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll

//   ScrollTrigger.refresh();
// });




///final

// gsap.registerPlugin(ScrollTrigger);

//  const lenis = new Lenis();

// function raf(time) {
//   lenis.raf(time);
//   requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);

// function scroll() {
// 	const imgWraps = document.querySelectorAll('.js-image-wrap');
// 	const imgs = document.querySelectorAll('.js-image');
	
// 	imgWraps.forEach((imgWrap) => {
// 		gsap.fromTo(imgWrap, {
//             yPercent: 5,
// 			opacity: 0
//         }, {
//             ease: 'none',
//             yPercent: 0,
// 			opacity: 1,
//             scrollTrigger: {
//                 trigger: imgWrap,
//                 start: 'top bottom-=200px',
//             }
//         });
// 	});
	
// 	imgs.forEach((img) => {
// 		gsap.fromTo(img, {
//             xPercent: 30
//         }, {
//             ease: 'none',
//             xPercent: -20,
//             scrollTrigger: {
//                 trigger: img,
//                 start: 'top bottom',
//                 end: 'bottom top',
//                 scrub: true,
//             }
//         });
// 	});
// }

// // GSAP Scroll Triggers
// scroll();




















// gsap.registerPlugin(ScrollTrigger)

// let sections = gsap.utils.toArray(".box");
// gsap.to(sections, {
//   xPercent: -100 * (sections.length-1),
//   ease:"none",
//   scrollTrigger:{
//   trigger:".container",
//   pin:true,
//   scrub:1,
//   snap: 1 / (sections.length - 1),
//     end:() => "+=" + document.querySelector(".container").offsetWidth  }
// })












// const pathsToAnimate = document.querySelectorAll("path");

// pathsToAnimate.forEach((path) => {
//   const finalPath = path.getAttribute("data-animate-to");
//   const start = path.getAttribute("data-start");
//   const end = path.getAttribute("data-end");

//   console.log(finalPath);

//   gsap
//     .timeline({
//       scrollTrigger: {
//         trigger: path,
//         start,
//         end,
//         scrub: 1
//       }
//     })
//     .to(path, {
//       attr: {
//         d: finalPath
//       },
//       ease: "none"
//     });
// });
















// const tl = new TimelineLite()

// TweenMax.set('.line', {marginTop:50, marginLeft:0});
// tl.from(".line", 5, {scaleX:0, transformOrigin:"center"})



































// gsap.from(".top .title", {
//   y: -200,
//   duration: 1,
//   opacity: 0
// });

gsap.to(".container", {
  x: '-200vw',
  scrollTrigger: {
      trigger: '.container',
      pin: true,
      start: 'center center',
      end: '+=4000',
      scrub: true,
      toggleActions: 'play none reverse none'
  }
});











