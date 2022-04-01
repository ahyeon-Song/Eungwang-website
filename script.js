AOS.init(); 

// Preview img
gsap.registerPlugin(ScrollTrigger);

gsap.to(".intro-wrap", {
    scrollTrigger: {
      trigger: '.intro-wrap',
      start: '',
      end: '',
      scrub: 0.2,
      pin: true,
      pinSpacing: true,
      toggleActions: 'play none none none',
    },
    opacity:0,
    scale: 0.8
  }); 


  gsap.to(".design-text", {
    scrollTrigger: {
      trigger: '.indicator',
      start: 'top center',
      end: 'center center',
      scrub: 1,
      pin: true,
      pinSpacing: true,
      toggleActions: 'play none none none',
    },
    scale: 3
  }); 


  document.getElementById('.about-video').play();




