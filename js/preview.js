const title = document.getElementsByClassName("project-title");
const tl = gsap.timeline({ paused: true, reversed: true });
const firstLink = document.getElementById("first-link");
const secondLink = document.getElementById("second-link");
const thirdLink = document.getElementById("third-link");
const fourthLink = document.getElementById("fourth-link");
const fifthLink = document.getElementById("fifth-link");
const sixthLink = document.getElementById("sixth-link");
const seventhLink = document.getElementById("seventh-link");
const imagePreview = document.getElementById("project-image");

let hover = tl.to(".project-image", 0.5, {
  width: "50%",
  duration: 10,
  ease: "slow(0.9,0.1, false)",
  y: 100,
});

for (i = 0; i < title.length; i++) {
  title[i].addEventListener("mouseenter", () => hover.play());
  title[i].addEventListener("mouseleave", () => hover.reverse());
}

firstLink.addEventListener(
  "mouseover",
  () => (imagePreview.style.backgroundImage = "url('./media/images/wiam.png')")
);

secondLink.addEventListener(
  "mouseover",
  () =>
    (imagePreview.style.backgroundImage = "url('./media/images/nordic.png')")
);

thirdLink.addEventListener(
  "mouseover",
  () =>
    (imagePreview.style.backgroundImage = "url('./media/images/tattoo.png')")
);

fourthLink.addEventListener(
  "mouseover",
  () =>
    (imagePreview.style.backgroundImage =
      "url('./media/images/sherocks-home.png')")
);

fifthLink.addEventListener(
  "mouseover",
  () =>
    (imagePreview.style.backgroundImage = "url('./media/images/karolina.png')")
);

sixthLink.addEventListener(
  "mouseover",
  () => (imagePreview.style.backgroundImage = "url('./media/images/chef.png')")
);

seventhLink.addEventListener(
  "mouseover",
  () =>
    (imagePreview.style.backgroundImage = "url('./media/images/weather.png')")
);
