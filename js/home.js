const overlay = document.getElementById("overlay-container");

const tl = gsap.timeline({ paused: true, reversed: true });

const animation = tl
  .from(".overlay-container", 1, {
    x: 1000,
    ease: Power2.easeOut,
    duration: 2.5,
  })
  .from(".btn-index", 1, {
    ease: Power2.easeOut,
    y: 500,
  })
  .to("#first-btn", 0.5, {
    backgroundColor: "white",
    color: "black",
  })
  .to("#second-btn", 0.5, {
    backgroundColor: "white",
    color: "black",
  })
  .to("#first-btn", 0.5, {
    background: "transparent",
    color: "white",
  })
  .to("#second-btn", 0.5, {
    background: "transparent",
    color: "white",
  });

window.addEventListener("load", () => {
  animation.play();
});
