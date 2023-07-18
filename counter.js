var crsr = document.querySelector("#cursor");
var crsrblur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  crsrblur.style.left = dets.x - 260 + "px";
  crsrblur.style.top = dets.y - 260 + "px";
});

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 2;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95c11e";
    crsr.style.backgroundColor = "#95c11e";
  });
});

gsap.to("#nav", {
  backgroundColor: "#000",
  height: "90px",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 3,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -20%",
    end: "top -60%",
    scrub: 3,
  },
});

gsap.from("#about-us img, about-us-in", {
  y: 50,
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});
gsap.from(".card", {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});

gsap.from("#colon1", {
  x: -50,
  y: -40,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 50%",
    end: "top 70%",
    scrub: 4,
  },
});

gsap.from("#colon2", {
  x: 50,
  y: 40,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 50%",
    end: "top 70%",
    scrub: 4,
  },
});

gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    start: "top 75%",
    end: "top 60%",
    scrub: 1,
  },
});
