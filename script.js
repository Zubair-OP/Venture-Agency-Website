function locoAnimation() {
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});

// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
locoAnimation()

function animateCursor() {
  let circle = document.querySelector(".circle");
  let page1Content = document.querySelector(".page1-content");

  page1Content.addEventListener("mousemove", function (e) {
    // circle.style.left = e.x + 'px'
    // circle.style.top = e.y + 'px'

    gsap.to(circle, {
      x: e.x,
      y: e.y,
    });
  });

  page1Content.addEventListener("mouseenter", () => {
    gsap.to(circle, {
      scale: 1,
      opacity: 1,
    });
  });
  page1Content.addEventListener("mouseleave", () => {
    gsap.to(circle, {
      scale: 0,
      opacity: 0,
    });
  });
}
animateCursor()


gsap.registerPlugin(ScrollTrigger);
function page2animate() {
  gsap.to('.animated-text span', {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power4.out",
    stagger: 0.05,
    scrollTrigger: {
      trigger: '.page2',
      scroller:'.main',
      start: 'top 80%',
      end: 'top 60%',
      once: true
    }
  });
}

page2animate();


function SwiperAnimation() {
   var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
       autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
}

SwiperAnimation()


var t1 = gsap.timeline();

t1.from('#loader h3',{
  x:200,
  opacity:0,
  duration:1,
  stagger:0.3,
})

t1.to('#loader h3',{
  opacity:0,
  x: -20,
  stagger:0.1,
  duration:.5
})

t1.to('#loader',{
  opacity:0
})

gsap.set('.page1-content #BTM span', {
  y: 100,
  opacity: 0
});


t1.to('.page1-content #BTM span',{
  y:0,
  opacity:1,
  stagger:0.1,
  duration:0.5,
  delay:-0.5
})

t1.to('#loader',{
  display:'none'
})

