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

  
const hoverAnimation = document.querySelector('a');
hoverAnimation.addEventListener('onmouseover', ()=> {
  console.log("okay")
});