gsap.registerPlugin(ScrollTrigger);

gsap.from(".title-section", {
  scrollTrigger: {
    trigger: ".title-section",
    toggleActions: "restart none none none",
  },
  opacity: 0,
  x: 400,
  duration: 1.5,
});

gsap.from(".first-col", {
  scrollTrigger: {
    trigger: ".first-col",
    toggleActions: "restart none none none",
  },
  opacity: 0,
  x: -400,
  duration: 1.5,
});

gsap.from(".second-col", {
  scrollTrigger: {
    trigger: ".second-col",
    toggleActions: "restart none none none",
  },
  opacity: 0,
  x: 900,
  duration: 1.5,
});

gsap.from(".customer-section", {
  scrollTrigger: {
    trigger: ".customer-section",
    toggleActions: "restart none none none",
  },
  opacity: 0,
  x: 900,
  duration: 1.5,
});
