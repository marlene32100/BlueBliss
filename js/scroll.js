gsap.registerPlugin(ScrollTrigger);

gsap.from(".title-section", {
  scrollTrigger: {
    trigger: ".title-section",
    toggleActions: "restart none none none",
  },
  opacity: 0,
  x: 400,
  duration: 1,
});

gsap.from(".first-col", {
  scrollTrigger: {
    trigger: ".first-col",
    toggleActions: "restart none none none",
  },
  opacity: 0,
  x: -400,
  duration: 1,
});

gsap.from(".second-col", {
  scrollTrigger: {
    trigger: ".second-col",
    toggleActions: "restart none none none",
  },
  opacity: 0,
  x: 900,
  duration: 1,
});

gsap.utils.toArray(".review-image").forEach((i) => {
  gsap.from(i, {
    scrollTrigger: {
      trigger: i,
      toggleActions: "restart none none none",
    },
    x: 1000,
    ease: Power2.easeOut,
    rotation: 360,
    duration: 2.5,
  });
});
