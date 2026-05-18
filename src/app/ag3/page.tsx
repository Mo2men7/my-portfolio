"use client";

import { useEffect, useRef } from "react";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Floating 3D-like shapes via canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    type Shape = {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      rotation: number;
      rotSpeed: number;
      type: "torus" | "tetra" | "cube" | "gem" | "sphere" | "cone";
      opacity: number;
      color: string;
    };

    const shapes: Shape[] = [
      // torus - top left
      {
        x: 0.12,
        y: 0.5,
        size: 120,
        speedX: 0.00015,
        speedY: 0.00008,
        rotation: -0.3,
        rotSpeed: 0.003,
        type: "torus",
        opacity: 0.9,
        color: "#1a1a1a",
      },
      // tetrahedron - top center-left
      {
        x: 0.3,
        y: 0.13,
        size: 38,
        speedX: -0.0001,
        speedY: 0.00012,
        rotation: 0.2,
        rotSpeed: -0.004,
        type: "tetra",
        opacity: 0.85,
        color: "#c0452a",
      },
      // cube - top right
      {
        x: 0.88,
        y: 0.08,
        size: 80,
        speedX: -0.00008,
        speedY: 0.0001,
        rotation: 0.5,
        rotSpeed: 0.002,
        type: "cube",
        opacity: 0.8,
        color: "#1a1a1a",
      },
      // sphere - right mid
      {
        x: 0.9,
        y: 0.45,
        size: 36,
        speedX: 0.0001,
        speedY: -0.00015,
        rotation: 0,
        rotSpeed: 0,
        type: "sphere",
        opacity: 0.85,
        color: "#0d0d0d",
      },
      // gem - bottom left
      {
        x: 0.2,
        y: 0.82,
        size: 50,
        speedX: 0.00012,
        speedY: -0.0001,
        rotation: 0.7,
        rotSpeed: 0.003,
        type: "gem",
        opacity: 0.8,
        color: "#1a1a1a",
      },
      // cone/asterisk - bottom right
      {
        x: 0.82,
        y: 0.84,
        size: 40,
        speedX: -0.0001,
        speedY: 0.0001,
        rotation: 0.3,
        rotSpeed: 0.005,
        type: "cone",
        opacity: 0.75,
        color: "#c0452a",
      },
      // orange cone right bottom
      {
        x: 0.95,
        y: 0.78,
        size: 55,
        speedX: -0.00008,
        speedY: -0.0001,
        rotation: -0.5,
        rotSpeed: -0.003,
        type: "tetra",
        opacity: 0.9,
        color: "#c0452a",
      },
      // dot top-left cluster
      {
        x: 0.05,
        y: 0.25,
        size: 6,
        speedX: 0,
        speedY: 0,
        rotation: 0,
        rotSpeed: 0,
        type: "sphere",
        opacity: 0.2,
        color: "#555",
      },
    ];

    let animId: number;
    let startTime = performance.now();

    function drawTorus(
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      rot: number,
      color: string,
      opacity: number,
    ) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rot);
      ctx.globalAlpha = opacity;
      // outer ellipse
      const grad = ctx.createRadialGradient(
        -size * 0.15,
        -size * 0.15,
        size * 0.1,
        0,
        0,
        size,
      );
      grad.addColorStop(0, "#2a2a2a");
      grad.addColorStop(0.5, "#111");
      grad.addColorStop(1, "#080808");
      ctx.strokeStyle = grad;
      ctx.lineWidth = size * 0.38;
      ctx.beginPath();
      ctx.ellipse(0, 0, size * 0.7, size * 0.38, 0, 0, Math.PI * 2);
      ctx.stroke();
      // inner highlight
      ctx.strokeStyle = "rgba(60,60,60,0.4)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.ellipse(
        0,
        -size * 0.08,
        size * 0.5,
        size * 0.2,
        0,
        Math.PI * 1.05,
        Math.PI * 1.95,
      );
      ctx.stroke();
      ctx.restore();
    }

    function drawTetra(
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      rot: number,
      color: string,
      opacity: number,
    ) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rot);
      ctx.globalAlpha = opacity;
      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.lineTo(size * 0.87, size * 0.5);
      ctx.lineTo(-size * 0.87, size * 0.5);
      ctx.closePath();
      const grad = ctx.createLinearGradient(-size, -size, size, size);
      grad.addColorStop(0, color === "#c0452a" ? "#d4552f" : "#2a2a2a");
      grad.addColorStop(1, color === "#c0452a" ? "#8a2010" : "#0a0a0a");
      ctx.fillStyle = grad;
      ctx.fill();
      // face highlight
      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.lineTo(size * 0.87, size * 0.5);
      ctx.lineTo(0, size * 0.2);
      ctx.closePath();
      ctx.fillStyle = "rgba(255,255,255,0.04)";
      ctx.fill();
      ctx.restore();
    }

    function drawCube(
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      rot: number,
      color: string,
      opacity: number,
    ) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rot);
      ctx.globalAlpha = opacity;
      const s = size * 0.5;
      // top face
      ctx.beginPath();
      ctx.moveTo(0, -s * 0.6);
      ctx.lineTo(s, -s * 0.1);
      ctx.lineTo(0, s * 0.4);
      ctx.lineTo(-s, -s * 0.1);
      ctx.closePath();
      ctx.fillStyle = "#222";
      ctx.fill();
      // right face
      ctx.beginPath();
      ctx.moveTo(s, -s * 0.1);
      ctx.lineTo(s, s * 0.9);
      ctx.lineTo(0, s * 1.4);
      ctx.lineTo(0, s * 0.4);
      ctx.closePath();
      ctx.fillStyle = "#111";
      ctx.fill();
      // left face
      ctx.beginPath();
      ctx.moveTo(-s, -s * 0.1);
      ctx.lineTo(0, s * 0.4);
      ctx.lineTo(0, s * 1.4);
      ctx.lineTo(-s, s * 0.9);
      ctx.closePath();
      ctx.fillStyle = "#181818";
      ctx.fill();
      ctx.restore();
    }

    function drawSphere(
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      color: string,
      opacity: number,
    ) {
      ctx.save();
      ctx.globalAlpha = opacity;
      const grad = ctx.createRadialGradient(
        x - size * 0.3,
        y - size * 0.3,
        size * 0.05,
        x,
        y,
        size,
      );
      grad.addColorStop(0, "#2a2a2a");
      grad.addColorStop(0.5, "#111");
      grad.addColorStop(1, "#060606");
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();
      ctx.restore();
    }

    function drawGem(
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      rot: number,
      color: string,
      opacity: number,
    ) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rot);
      ctx.globalAlpha = opacity;
      // diamond/gem shape
      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.lineTo(size * 0.6, -size * 0.2);
      ctx.lineTo(size * 0.4, size * 0.8);
      ctx.lineTo(0, size);
      ctx.lineTo(-size * 0.4, size * 0.8);
      ctx.lineTo(-size * 0.6, -size * 0.2);
      ctx.closePath();
      const grad = ctx.createLinearGradient(-size, -size, size * 0.5, size);
      grad.addColorStop(0, "#252525");
      grad.addColorStop(0.4, "#181818");
      grad.addColorStop(1, "#080808");
      ctx.fillStyle = grad;
      ctx.fill();
      ctx.strokeStyle = "rgba(255,255,255,0.06)";
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();
    }

    function drawAsterisk(
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      rot: number,
      color: string,
      opacity: number,
    ) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rot);
      ctx.globalAlpha = opacity;
      ctx.strokeStyle = color === "#c0452a" ? "#c0452a" : "#333";
      ctx.lineWidth = size * 0.15;
      ctx.lineCap = "round";
      for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(Math.cos(angle) * size, Math.sin(angle) * size);
        ctx.stroke();
      }
      ctx.restore();
    }

    function drawDotGrid(
      ctx: CanvasRenderingContext2D,
      startX: number,
      startY: number,
      cols: number,
      rows: number,
      gap: number,
    ) {
      ctx.fillStyle = "rgba(80,80,80,0.2)";
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          ctx.beginPath();
          ctx.arc(startX + c * gap, startY + r * gap, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    function draw(now: number) {
      const w = canvas.width;
      const h = canvas.height;
      const elapsed = (now - startTime) * 0.001;

      ctx.clearRect(0, 0, w, h);

      // dot grids
      drawDotGrid(ctx, w * 0.02, h * 0.15, 8, 10, 18);
      drawDotGrid(ctx, w * 0.72, h * 0.55, 6, 8, 18);

      // Orbit ellipse
      ctx.save();
      ctx.translate(w * 0.5, h * 0.48);
      ctx.globalAlpha = 0.07;
      ctx.strokeStyle = "#b04030";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.ellipse(0, 0, w * 0.38, h * 0.32, -0.15, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // small accent dots on orbit
      const orbitDots = [0.2, 0.75];
      orbitDots.forEach((t) => {
        const angle = t * Math.PI * 2 - 0.15;
        const ex = w * 0.5 + Math.cos(angle) * w * 0.38;
        const ey = h * 0.48 + Math.sin(angle) * h * 0.32;
        ctx.save();
        ctx.globalAlpha = 0.6;
        ctx.fillStyle = "#c0452a";
        ctx.beginPath();
        ctx.arc(ex, ey, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Draw shapes with slow oscillation
      shapes.forEach((s, i) => {
        const oscX = Math.sin(elapsed * s.speedX * 1000 + i) * 0.015;
        const oscY = Math.cos(elapsed * s.speedY * 1000 + i * 1.3) * 0.02;
        const ax = (s.x + oscX) * w;
        const ay = (s.y + oscY) * h;
        const rot = s.rotation + elapsed * s.rotSpeed;

        switch (s.type) {
          case "torus":
            drawTorus(ctx, ax, ay, s.size, rot, s.color, s.opacity);
            break;
          case "tetra":
            drawTetra(ctx, ax, ay, s.size * 0.5, rot, s.color, s.opacity);
            break;
          case "cube":
            drawCube(ctx, ax, ay, s.size, rot, s.color, s.opacity);
            break;
          case "sphere":
            drawSphere(ctx, ax, ay, s.size, s.color, s.opacity);
            break;
          case "gem":
            drawGem(ctx, ax, ay, s.size * 0.4, rot, s.color, s.opacity);
            break;
          case "cone":
            drawAsterisk(ctx, ax, ay, s.size * 0.5, rot, s.color, s.opacity);
            break;
        }
      });

      animId = requestAnimationFrame(draw);
    }

    animId = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="hero">
      {/* Nav */}
      <nav className="nav">
        <div className="logo">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path
              d="M4 4L14 4L14 14L4 14Z"
              stroke="#c0452a"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M14 14L24 14L24 24"
              stroke="#c0452a"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
          <span className="logo-text">MOMEN</span>
        </div>
        <button className="menu-btn" aria-label="Menu">
          <span />
          <span />
        </button>
      </nav>

      {/* Canvas bg */}
      <canvas ref={canvasRef} className="canvas-bg" />

      {/* Content */}
      <div className="content">
        <p className="eyebrow">FRONTEND DEVELOPER</p>
        <h1 className="headline">
          <span className="line-white">Crafting</span>
          <span className="line-orange">
            <em>Experiences</em>
          </span>
        </h1>
        <p className="sub">
          I build modern, fast &amp; accessible web experiences
          <br />
          with clean code and great attention to detail.
        </p>

        <div className="scroll-cta">
          <div className="scroll-circle">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M9 3V15M9 15L4 10M9 15L14 10"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="scroll-label">SCROLL TO EXPLORE</span>
        </div>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=Montserrat:wght@300;400;500&display=swap");

        .hero {
          position: relative;
          width: 100%;
          height: 100svh;
          min-height: 600px;
          background: #080808;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .canvas-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        /* subtle radial vignette */
        .hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse 70% 60% at 50% 50%,
            transparent 30%,
            #080808 100%
          );
          z-index: 2;
          pointer-events: none;
        }

        /* Nav */
        .nav {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 28px 40px;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .logo-text {
          font-family: "Montserrat", sans-serif;
          font-weight: 500;
          font-size: 13px;
          letter-spacing: 0.2em;
          color: #fff;
        }

        .menu-btn {
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding: 4px;
        }

        .menu-btn span {
          display: block;
          width: 24px;
          height: 1.5px;
          background: #fff;
        }

        /* Content */
        .content {
          position: relative;
          z-index: 10;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 0 24px;
          gap: 0;
          margin-top: -40px;
        }

        .eyebrow {
          font-family: "Montserrat", sans-serif;
          font-weight: 300;
          font-size: 11px;
          letter-spacing: 0.35em;
          color: rgba(255, 255, 255, 0.55);
          margin: 0 0 24px;
          animation: fadeUp 1s ease 0.2s both;
        }

        .headline {
          margin: 0 0 28px;
          line-height: 0.95;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .line-white {
          display: block;
          font-family: "Cormorant Garamond", serif;
          font-weight: 600;
          font-size: clamp(72px, 10vw, 130px);
          color: #fff;
          letter-spacing: -0.01em;
          animation: fadeUp 1s ease 0.35s both;
        }

        .line-orange {
          display: block;
          font-family: "Cormorant Garamond", serif;
          font-weight: 400;
          font-style: italic;
          font-size: clamp(72px, 10vw, 130px);
          color: #c0452a;
          letter-spacing: -0.01em;
          animation: fadeUp 1s ease 0.5s both;
        }

        .sub {
          font-family: "Montserrat", sans-serif;
          font-weight: 300;
          font-size: clamp(13px, 1.4vw, 16px);
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.45);
          margin: 0 0 52px;
          animation: fadeUp 1s ease 0.65s both;
        }

        .scroll-cta {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          animation: fadeUp 1s ease 0.8s both;
        }

        .scroll-circle {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition:
            border-color 0.3s,
            transform 0.3s;
          animation: scrollBounce 2s ease-in-out 1.5s infinite;
        }

        .scroll-circle:hover {
          border-color: rgba(255, 255, 255, 0.6);
          transform: scale(1.08);
        }

        .scroll-label {
          font-family: "Montserrat", sans-serif;
          font-weight: 300;
          font-size: 10px;
          letter-spacing: 0.3em;
          color: rgba(255, 255, 255, 0.4);
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scrollBounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(5px);
          }
        }
      `}</style>
    </section>
  );
}
