"use client";
import { useEffect, useRef } from "react";

const BUBBLE_COUNT = 20;

export default function BubbleCursor() {
  const bubblesRef = useRef([]);
  const positions = useRef([]);

  useEffect(() => {
    positions.current = new Array(BUBBLE_COUNT).fill({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });

    const handleMouseMove = (e) => {
      positions.current.unshift({ x: e.clientX, y: e.clientY });
      positions.current = positions.current.slice(0, BUBBLE_COUNT);
    };

    const animate = () => {
      positions.current.forEach((pos, i) => {
        const el = bubblesRef.current[i];
        if (!el) return;
        const { x, y } = pos;
        el.style.transform = `translate(${x}px, ${y}px) scale(${
          1 - i / BUBBLE_COUNT
        })`;
        el.style.opacity = `${1 - i / BUBBLE_COUNT}`;
      });
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(animate);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="bubble-cursor">
      {new Array(BUBBLE_COUNT).fill(0).map((_, i) => (
        <div
          key={i}
          ref={(el) => (bubblesRef.current[i] = el)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "40px",
            height: "40px",
            backgroundColor: "rgba(195, 79, 90, 0.6)",
            borderRadius: "50%",
            pointerEvents: "none",
            zIndex: 9999,
            transform: "translate(-1000px, -1000px)", // off-screen default
            transition: "transform 40ms linear",
          }}
        />
      ))}
      <style jsx global>
        {`
          @media (min-width: 769px) {
            * {
              cursor: none;
            }
          }
        `}
      </style>
    </div>
  );
}
