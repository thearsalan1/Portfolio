"use client";

import { useEffect } from "react";

const FirefliesBackground = () => {
  useEffect(() => {
    const container = document.getElementById("fireflies-container");
    if (!container) return;

    container.innerHTML = "";

    const colors: string[] = [
      "rgba(99,102,241,0.3)", // blue dot
      "rgba(236,72,153,0.3)", // pink dot
    ];

    for (let i = 0; i < 15; i++) {
      const firefly = document.createElement("div");
      firefly.className = "firefly";

      const color = colors[Math.floor(Math.random() * colors.length)];
      firefly.style.backgroundColor = color;
      firefly.style.boxShadow = `0 0 12px ${color}`;

      // Random initial position across full viewport
      firefly.style.top = `${Math.random() * window.innerHeight}px`;
      firefly.style.left = `${Math.random() * window.innerWidth}px`;

      // Much slower animation duration and varied delay
      firefly.style.animationDuration = `${40 + Math.random() * 20}s`; // 40–60s
      firefly.style.animationDelay = `${Math.random() * 10}s`;

      container.appendChild(firefly);
    }
  }, []);

  return <div id="fireflies-container" style={containerStyle}></div>;
};

const containerStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  pointerEvents: "none",
  zIndex: 10,
};

if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.innerHTML = `
    .firefly {
      position: absolute;
      width: 8px;   /* small dot size */
      height: 8px;
      border-radius: 50%;
      animation: drift linear infinite;
      opacity: 0.7;
    }

    @keyframes drift {
      0%   { transform: translate(0, 0) scale(1); opacity: 0.9; }
      25%  { transform: translate(80px, -100px) scale(1.05); opacity: 0.7; }
      50%  { transform: translate(-100px, 80px) scale(0.95); opacity: 0.8; }
      75%  { transform: translate(60px, 100px) scale(1.1); opacity: 0.6; }
      100% { transform: translate(0, 0) scale(1); opacity: 0.9; }
    }
  `;
  document.head.appendChild(style);
}

export default FirefliesBackground;