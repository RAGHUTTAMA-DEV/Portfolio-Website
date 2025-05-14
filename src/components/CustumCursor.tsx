import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<SVGSVGElement>(null);
  const cursorOutlineRef = useRef<SVGSVGElement>(null);
  const cursorDotRef = useRef<SVGCircleElement>(null);

  useGSAP(() => {
    if (window.innerWidth < 768) return;

    const cursor = cursorRef.current;
    const cursorOutline = cursorOutlineRef.current;
    const cursorDot = cursorDotRef.current;

    if (!cursor || !cursorOutline || !cursorDot) return;

    // Make cursor visible
    gsap.set([cursor, cursorOutline], {
      visibility: "visible",
      opacity: 1,
    });

    let mouseX = 0;
    let mouseY = 0;
    let posX = 0;
    let posY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Check if cursor is over clickable elements
      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("clickable");

      if (isClickable) {
        gsap.to(cursorOutline, {
          scale: 1.5,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(cursorDot, {
          scale: 0.5,
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        gsap.to(cursorOutline, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
        gsap.to(cursorDot, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const handleMouseDown = () => {
      gsap.to(cursorOutline, {
        scale: 0.8,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    const handleMouseUp = () => {
      gsap.to(cursorOutline, {
        scale: 1,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    // Animate the cursor
    const ticker = () => {
      const speed = 0.15;
      posX += (mouseX - posX) * speed;
      posY += (mouseY - posY) * speed;

      gsap.set(cursor, {
        x: mouseX,
        y: mouseY,
      });

      gsap.set(cursorOutline, {
        x: posX - 15,
        y: posY - 15,
      });
    };
    gsap.ticker.add(ticker);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Handle cursor leaving the window
    const handleMouseLeave = () => {
      gsap.to([cursor, cursorOutline], {
        opacity: 0,
        duration: 0.3,
      });
    };

    // Handle cursor entering the window
    const handleMouseEnter = () => {
      gsap.to([cursor, cursorOutline], {
        opacity: 1,
        duration: 0.3,
      });
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      gsap.ticker.remove(ticker);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        style={{ position: "fixed", top: 0, left: 0, zIndex: 50, pointerEvents: "none", visibility: "hidden" }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={cursorRef}
      >
        <circle
          ref={cursorDotRef}
          cx="5"
          cy="5"
          r="5"
          fill="black"
          className="origin-center"
        />
      </svg>

      {/* Cursor outline */}
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        style={{ position: "fixed", top: 0, left: 0, zIndex: 50, pointerEvents: "none", visibility: "hidden" }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={cursorOutlineRef}
      >
        <circle
          cx="15"
          cy="15"
          r="12"
          stroke="black"
          strokeWidth="1"
          fill="transparent"
          className="origin-center"
        />
      </svg>
    </>
  );
};

export default CustomCursor;