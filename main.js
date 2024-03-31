let prevScrollPos = window.pageYOffset;

window.onscroll = function () {
    const body = document.body;
    
    let navbar = document.querySelector("nav");
    let currentScrollPos = window.pageYOffset;
    console.log(pageYOffset);
    if(pageYOffset === 0){
        navbar.style.backgroundColor = "transparent";
    }
    else{
        navbar.style.backgroundColor = window.getComputedStyle(body).backgroundColor;

    }
    
    if(window.innerWidth < 1024 && !(navbar.classList.contains("mobileNav"))){
        if (prevScrollPos > currentScrollPos) {
            document.getElementById("navbar").classList.remove("hideNav");
        } else {
            document.getElementById("navbar").classList.add("hideNav");
        }
    }
    prevScrollPos = currentScrollPos;
};

const logoMotive = () => {
  const locomotiveScroll = new LocomotiveScroll();
};

const homePageAnimation = () => {
  gsap.set(".marqueeSlides", { scale: 3 });

  let timeLine = gsap.timeline({
    scrollTrigger: {
      trigger: ".home",
      start: "top top",
      end: "bottom top",
      pin: true,
      scrub: 1,
    },
  });

  timeLine.to(
    ".videodiv",
    {
      "--clip": "0%",
      ease: Power2,
    },
    "a"
  );

  timeLine.to(
    ".marqueeSlides",
    {
      scale: 1,
      ease: Power2,
    },
    "a"
  );

  timeLine.to(
    ".lft",
    {
      xPercent: -5,
      stagger: 0.03,
      ease: Power4,
    },
    "b"
  );

  timeLine.to(
    ".rgt",
    {
      xPercent: 20,
      stagger: 0.03,
      ease: Power4,
    },
    "b"
  );
};

const realSectionAnimation = () => {
  gsap.to(".slide", {
    scrollTrigger: {
      trigger: ".real",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
    },
    xPercent: -300,
    ease: Power4,
  });
};

const teamAnimation = () => {
  document.querySelectorAll(".listitem").forEach((e) => {
    e.addEventListener("mousemove", (dets) => {
      gsap.to(e.querySelector(".pictures"), {
        opacity: 1,
        x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
        ease: Power4,
        duration: 0.5,
      });
      gsap.to(e.querySelector(".blueLayer"), {
        height: "100%",
        ease: Power2,
        duration: 0.2,
      });
    });

    e.addEventListener("mouseleave", (dets) => {
      gsap.to(e.querySelector(".pictures"), {
        opacity: 0,
        x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
        ease: Power4,
        duration: 0.5,
      });
      gsap.to(".blueLayer", {
        height: "0%",
        ease: Power2,
        duration: 0.2,
      });
    });
  });
};

const lefttextAnimation = () => {
  let clutter = "";
  document
    .querySelector(".textpara")
    .textContent.split("")
    .forEach((e) => {
      if (e === " ") clutter += `<span>&nbsp;</span> `;
      clutter += `<span>${e}</span>`;
    });
  document.querySelector(".textpara").innerHTML = clutter;

  gsap.set(".textpara span", { opacity: 0.1 });
  gsap.to(".textpara span", {
    scrollTrigger: {
      trigger: ".leftText",
      start: "top 60%",
      end: "bottom 80%",
      scrub: 0.2,
    },
    opacity: 1,
    stagger: 0.03,
    ease: Power4,
  });
};
const righttextAnimation = () => {
  let clutter = "";
  document
    .querySelector(".textpara1")
    .textContent.split("")
    .forEach((e) => {
      if (e === " ") clutter += `<span>&nbsp;</span> `;
      clutter += `<span>${e}</span>`;
    });
  document.querySelector(".textpara1").innerHTML = clutter;

  gsap.set(".textpara1 span", { opacity: 0.1 });
  gsap.to(".textpara1 span", {
    scrollTrigger: {
      trigger: ".rightText",
      start: "top 50%",
      end: "bottom 80%",
      scrub: 2,
    },
    opacity: 1,
    stagger: 1,
    ease: Power4,
  });
};

const capsuleAnimation = () => {
  gsap.to(".capsule:nth-child(2)", {
    scrollTrigger: {
      trigger: ".capsuleSection",
      start: "top 70%",
      end: "bottom bottom",
      scrub: 1,
    },
    y: 0,
    ease: Power4,
  });
};

const colorChange = () => {
  document.querySelectorAll(".section").forEach(function (e) {
    ScrollTrigger.create({
      trigger: e,
      start: "top 50%",
      end: "bottom 50%",
      onEnter: function () {
        document.body.setAttribute("theme", e.dataset.color);
      },
      onEnterBack: function () {
        document.body.setAttribute("theme", e.dataset.color);
      },
    });
  });
};

const responsiveNavbar = () => {
    const navbar = document.querySelector("nav");
    
    document.querySelector(".menu").addEventListener("click", () => {
    document.getElementById("navbar").classList.toggle("mobileNav");

    if(navbar.classList.contains("mobileNav")){
        navbar.style.height = "100%"
        document.querySelector(".links").style.opacity = 1;
        
    }
    else{
        navbar.style.height = "100px"
        document.querySelector(".links").style.opacity = 0;
    }
  });

  
};

homePageAnimation();
logoMotive();
realSectionAnimation();

// console.log();

if (window.innerWidth > 1024) {
  teamAnimation();
}
lefttextAnimation();
righttextAnimation();
capsuleAnimation();
colorChange();
responsiveNavbar();
