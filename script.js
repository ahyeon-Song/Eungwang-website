// Preview img
gsap.registerPlugin(ScrollTrigger);

gsap.to(".preview", {
    scrollTrigger: {
      trigger: '.preview',
      start: '+=20',
      end: '+=150',
      scrub: 1,
      pin: true,
      pinSpacing: false,
      toggleActions: 'play none none none',
    },
    scale: 2,
    opacity: 0
  }); 




    

  