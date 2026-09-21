"use client";
import { useEffect, useRef } from "react";

const INTERACTIVE_SELECTOR = "a, button, img, input, textarea, select";
const DOT_SMOOTHNESS = 0.2;
const BORDER_DOT_SMOOTHNESS = 0.1;
const BORDER_SIZE_IDLE = 28;
const BORDER_SIZE_HOVER = 44;

export default function SmoothFollower() {
  const dotRef = useRef(null);
  const borderRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const mousePosition = { x: 0, y: 0 };
    const dotPosition = { x: 0, y: 0 };
    const borderDotPosition = { x: 0, y: 0 };
    let isHovering = false;

    const handleMouseMove = (e) => {
      mousePosition.x = e.clientX;
      mousePosition.y = e.clientY;
    };
    // Delegated on document so it keeps working after client-side
    // navigation adds/removes interactive elements.
    const handleMouseOver = (e) => {
      if (e.target.closest(INTERACTIVE_SELECTOR)) {
        isHovering = true;
        borderRef.current.style.width = `${BORDER_SIZE_HOVER}px`;
        borderRef.current.style.height = `${BORDER_SIZE_HOVER}px`;
      }
    };
    const handleMouseOut = (e) => {
      if (e.target.closest(INTERACTIVE_SELECTOR)) {
        isHovering = false;
        borderRef.current.style.width = `${BORDER_SIZE_IDLE}px`;
        borderRef.current.style.height = `${BORDER_SIZE_IDLE}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    const lerp = (start, end, factor) => start + (end - start) * factor;

    const animate = () => {
      dotPosition.x = lerp(dotPosition.x, mousePosition.x, DOT_SMOOTHNESS);
      dotPosition.y = lerp(dotPosition.y, mousePosition.y, DOT_SMOOTHNESS);
      borderDotPosition.x = lerp(
        borderDotPosition.x,
        mousePosition.x,
        BORDER_DOT_SMOOTHNESS
      );
      borderDotPosition.y = lerp(
        borderDotPosition.y,
        mousePosition.y,
        BORDER_DOT_SMOOTHNESS
      );

      dotRef.current.style.transform = `translate(${dotPosition.x}px, ${dotPosition.y}px) translate(-50%, -50%)`;
      borderRef.current.style.transform = `translate(${borderDotPosition.x}px, ${borderDotPosition.y}px) translate(-50%, -50%)`;

      animationId = requestAnimationFrame(animate);
    };
    let animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 custom-cursor">
      <div
        ref={dotRef}
        className="absolute top-0 left-0 rounded-full bg-[--green]"
        style={{ width: "8px", height: "8px" }}
      />
      <div
        ref={borderRef}
        className="absolute top-0 left-0 rounded-full border border-[--green]"
        style={{
          width: `${BORDER_SIZE_IDLE}px`,
          height: `${BORDER_SIZE_IDLE}px`,
          transition: "width 0.3s, height 0.3s",
        }}
      />
    </div>
  );
}
