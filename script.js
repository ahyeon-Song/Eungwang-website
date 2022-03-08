// gsap.registerPlugin(ScrollTrigger);

// gsap.to("#intro-logo", {
//     scrollTrigger: {
//       trigger: '#intro-logo',
//       start: 'top top',
//       // end: '+=150',
//       // scrub: 1,
//       pin: true,
//       pinSpacing: true,
//       toggleActions: 'play none none none',
//     },
//     scale: 0.15,
//   }); 


// const introLogo = document.getElementById("intro-logo");
// const currWidth = introLogo.clientWidth;

// function introLogoZoom(event) {
//   introLogo.style.width = (currWidth - 450) + "px";
// }

// introLogo.addEventListener("load", introLogoZoom(event));


gsap.registerPlugin(ScrollTrigger);

gsap.to("#intro-logo" , {
    zoom: 0.09,
    duration: 1.2,
    delay: 1,
    scrolltrigger: "#intro-logo"
})


gsap.to("#intro-text" , {
    y: -200,
    duration: 2,
    scrolltrigger: "#intro-text"
})

gsap.to("img-1" , {
  x: 50,
  y: -80,
  duration: 2,
  scrolltrigger: "img-1"
})

gsap.to("img-3" , {
  y: -100,
  duration: 2,
  scrolltrigger: "img-1"
})

gsap.to("img-4" , {
  x: -50,
  y: -80,
  duration: 2,
  scrolltrigger: "img-1"
})
  