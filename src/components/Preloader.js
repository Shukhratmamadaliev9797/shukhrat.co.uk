import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Preloader = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const tll = gsap.timeline({
      paused: true,
    });

    tll.to("#percent, #bar", {
      duration: 0.2,
      opacity: 0,
      zIndex: -1,
    });

    tll.to("#preloader", {
      duration: 0.8,
      height: "0%",
    });

    tll.from(
      containerRef.current,
      {
        duration: 1.5,
        y: "150%",
      },
      "-=.2"
    );

    tll.to(".container h1", {
      opacity: 1,
      textShadow: "12px 20px rgba(255,255,255,0.23)",
      skewY: 10,
      y: "10%",
      stagger: {
        amount: 0.4,
      },
    });

    let width = 1;
    const bar = document.getElementById("barconfrm");
    let id;

    function move() {
      id = setInterval(frame, 10);
    }

    function frame() {
      if (width >= 100) {
        clearInterval(id);
        tll.play();
      } else {
        width++;
        bar.style.width = width + "%";
        document.getElementById("percent").innerHTML = width + "%";
      }
    }

    move();

    return () => {
      clearInterval(id);
      tll.kill();
    };
  }, []);

  return (
    <div>
      <div id="preloader">
        <div id="percent">1%</div>
        <div id="bar">
          <div id="barconfrm"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
