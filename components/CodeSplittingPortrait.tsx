"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { Terminal, Code2, Sparkles, RefreshCw, Eye } from "lucide-react";

interface Particle {
  originX: number;
  originY: number;
  currentX: number;
  currentY: number;
  char: string;
  color: string;
  brightness: number;
  size: number;
  dispAngle: number;
  dispSpeed: number;
}

const CODE_CHARS = [
  "0", "1", "<", ">", "/", "{", "}", ";", "=", "λ", 
  "AI", "MERN", "RAG", "sys", "0x", "ptr", "fn", "var",
  "vec", "ts", "py", "node", "git", "*", "&", "=>"
];

const PHOTOS = [
  { label: "Studio Silhouette", src: "/images/sagar-portrait-blue.jpg" },
  { label: "Developer Workspace", src: "/images/sagar-laptop-coding.jpg" },
  { label: "Executive Outdoor", src: "/images/sagar-outdoor-smile.jpg" },
];

export default function CodeSplittingPortrait() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [scrollFactor, setScrollFactor] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const mouseRef = useRef({ x: -1000, y: -1000, radius: 100 });
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number | null>(null);

  // Initialize Particles from Image
  const initParticles = useCallback((imgSrc: string, width: number, height: number) => {
    const img = new window.Image();
    img.crossOrigin = "anonymous";
    img.src = imgSrc;
    img.onload = () => {
      const offCanvas = document.createElement("canvas");
      offCanvas.width = width;
      offCanvas.height = height;
      const offCtx = offCanvas.getContext("2d");
      if (!offCtx) return;

      const imgAspect = img.naturalWidth / img.naturalHeight;
      const canvasAspect = width / height;
      let drawW = width;
      let drawH = height;
      let offsetX = 0;
      let offsetY = 0;

      if (imgAspect > canvasAspect) {
        drawW = height * imgAspect;
        offsetX = (width - drawW) / 2;
      } else {
        drawH = width / imgAspect;
        offsetY = (height - drawH) / 2;
      }

      offCtx.drawImage(img, offsetX, offsetY, drawW, drawH);
      const imgData = offCtx.getImageData(0, 0, width, height).data;

      // Fine density grid
      const step = 7;
      const particles: Particle[] = [];

      for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
          const index = (y * width + x) * 4;
          const r = imgData[index];
          const g = imgData[index + 1];
          const b = imgData[index + 2];
          const a = imgData[index + 3];

          if (a > 30) {
            const brightness = (r * 0.299 + g * 0.587 + b * 0.114) / 255;
            const char = CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)];
            const angle = Math.atan2(y - height / 2, x - width / 2) + (Math.random() - 0.5) * 0.4;
            const speed = (Math.random() * 2 + 1) * 360;

            particles.push({
              originX: x,
              originY: y,
              currentX: x,
              currentY: y,
              char,
              color: `rgb(${r}, ${g}, ${b})`,
              brightness,
              size: step * 1.05,
              dispAngle: angle,
              dispSpeed: speed,
            });
          }
        }
      }

      particlesRef.current = particles;
      setIsLoaded(true);
    };
  }, []);

  // Reload particles when photo changes or container changes
  useEffect(() => {
    setIsLoaded(false);
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width || 480;
      canvas.height = rect.height || 600;
      initParticles(PHOTOS[photoIndex].src, canvas.width, canvas.height);
    }
  }, [photoIndex, initParticles]);

  // Handle Scroll Progress
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far container has scrolled past top
      // 0 = top of viewport, 1 = fully scrolled out
      const progress = Math.max(0, Math.min(1.2, -rect.top / (windowHeight * 0.75)));
      setScrollFactor(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Main Render Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let scanlineY = 0;

    const render = () => {
      // Clear canvas cleanly
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      const factor = scrollFactor;
      const mouse = mouseRef.current;

      scanlineY = (scanlineY + 3) % canvas.height;

      // Draw subtle holographic scanline
      if (factor < 0.8) {
        ctx.fillStyle = "rgba(217, 221, 228, 0.08)";
        ctx.fillRect(0, scanlineY, canvas.width, 2);
      }

      // If at rest and mouse is outside, keep canvas transparent so crystal-clear photo shines underneath!
      const hasMouseInteraction = mouse.x > 0 && mouse.y > 0;
      if (factor <= 0.02 && !hasMouseInteraction) {
        animationFrameRef.current = requestAnimationFrame(render);
        return;
      }

      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const disperseProgress = Math.pow(factor, 1.35);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // 1. Calculate Split Dispersion from Scroll
        const isOddRow = Math.floor(p.originY / 14) % 2 === 0;
        const splitDirection = isOddRow ? 1 : -1;
        
        const targetX = p.originX + (Math.cos(p.dispAngle) * p.dispSpeed * disperseProgress * splitDirection);
        const targetY = p.originY + (Math.sin(p.dispAngle) * p.dispSpeed * disperseProgress) + (disperseProgress * 150);

        // 2. Mouse Repulsion / Glitch
        const dx = mouse.x - p.currentX;
        const dy = mouse.y - p.currentY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let mouseDisplaceX = 0;
        let mouseDisplaceY = 0;

        if (dist < mouse.radius) {
          const force = (1 - dist / mouse.radius) * 45;
          const angle = Math.atan2(dy, dx);
          mouseDisplaceX = -Math.cos(angle) * force;
          mouseDisplaceY = -Math.sin(angle) * force;
        }

        // Interpolate smoothly
        p.currentX += (targetX + mouseDisplaceX - p.currentX) * 0.2;
        p.currentY += (targetY + mouseDisplaceY - p.currentY) * 0.2;

        // Render code glyphs
        const charSize = Math.max(9, Math.floor(p.size * 1.15));
        ctx.font = `${charSize}px "IBM Plex Mono", monospace`;

        // Glowing Matrix / Chrome palette during code split
        if (p.brightness > 0.4) {
          ctx.fillStyle = factor > 0.25 
            ? (i % 3 === 0 ? "#10B981" : i % 3 === 1 ? "#38BDF8" : "#F5F5F5") 
            : p.color;
        } else {
          ctx.fillStyle = factor > 0.2 ? "rgba(161, 161, 170, 0.8)" : p.color;
        }

        ctx.fillText(p.char, p.currentX, p.currentY);
      }

      animationFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [scrollFactor]);

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      if (!canvasRef.current) return;
      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width || 480;
      canvas.height = rect.height || 600;
      initParticles(PHOTOS[photoIndex].src, canvas.width, canvas.height);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [photoIndex, initParticles]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseRef.current.x = e.clientX - rect.left;
    mouseRef.current.y = e.clientY - rect.top;
  };

  const handleMouseLeave = () => {
    mouseRef.current.x = -1000;
    mouseRef.current.y = -1000;
  };

  // Base Photo Opacity: Crystal clear 100% at top, dissolves cleanly as code takes over on scroll
  const basePhotoOpacity = Math.max(0, 1 - scrollFactor * 2.5);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-lg mx-auto flex flex-col items-center select-none"
    >
      {/* Corner HUD Marks */}
      <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-[#D9DDE4]/40 z-20 pointer-events-none" />
      <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-[#D9DDE4]/40 z-20 pointer-events-none" />
      <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-[#D9DDE4]/20 z-20 pointer-events-none" />
      <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-[#D9DDE4]/20 z-20 pointer-events-none" />

      {/* Main Container with Metallic Frame */}
      <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden border border-[#D9DDE4]/25 bg-[#08090C] shadow-[0_25px_60px_rgba(0,0,0,0.95)]">
        
        {/* Layer 1: Razor-Sharp, High-Resolution Crystal Clear Photo */}
        <div 
          className="absolute inset-0 z-0 transition-opacity duration-300"
          style={{ opacity: basePhotoOpacity }}
        >
          <Image
            src={PHOTOS[photoIndex].src}
            alt="Sagar Kumar — Full-Stack Developer & AI Engineer Intern"
            fill
            priority
            className="object-cover object-center filter contrast-105 brightness-100"
          />
          {/* Subtle gradient vignette at bottom for typography contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Layer 2: Interactive Code Splitting Canvas */}
        <canvas
          ref={canvasRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="absolute inset-0 z-10 w-full h-full cursor-crosshair block"
        />

        {/* Loading Spinner */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-[#050505] flex flex-col items-center justify-center gap-3 z-30">
            <div className="w-10 h-10 border-2 border-[#D9DDE4]/20 border-t-emerald-400 rounded-full animate-spin" />
            <span className="font-mono-tech text-xs text-[#777B84]">
              SYNTHESIZING NEURAL PIXEL MATRIX...
            </span>
          </div>
        )}

        {/* HUD Telemetry Top Overlay */}
        <div className="absolute top-0 inset-x-0 p-3 bg-gradient-to-b from-black/85 via-black/40 to-transparent flex items-center justify-between text-[10px] font-mono-tech pointer-events-none z-20">
          <div className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>NEURAL ENCODER // LIVE</span>
          </div>
          <div className="text-[#D9DDE4]/90 flex items-center gap-2">
            <Eye className="w-3.5 h-3.5 text-cyan-400" />
            <span>{PHOTOS[photoIndex].label}</span>
          </div>
        </div>

        {/* HUD Bottom Status Banner */}
        <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black via-black/90 to-transparent flex items-center justify-between z-20 pointer-events-auto">
          <div>
            <div className="font-mono-tech text-[10px] text-emerald-400 flex items-center gap-1.5">
              <Terminal className="w-3 h-3" />
              <span>THE HUMAN BEHIND THE MACHINE</span>
            </div>
            <div className="font-display text-base font-bold text-white">
              Sagar Kumar
            </div>
            <div className="font-mono-tech text-[10px] text-[#A1A1AA]">
              {scrollFactor > 0.08 ? `DISPERSED: ${(scrollFactor * 100).toFixed(0)}% INTO CODE` : "SCROLL TO DECONSTRUCT INTO CODE"}
            </div>
          </div>

          {/* Quick Photo Switcher Button */}
          <button
            onClick={() => setPhotoIndex((prev) => (prev + 1) % PHOTOS.length)}
            className="p-2.5 rounded-lg bg-[#161922] border border-[#D9DDE4]/20 text-[#D9DDE4] hover:text-white hover:border-[#D9DDE4]/50 transition-all flex items-center gap-1.5 cursor-pointer shadow-md text-[11px] font-mono-tech"
            title="Cycle portrait angle"
          >
            <RefreshCw className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden sm:inline">CYCLE PHOTO</span>
          </button>
        </div>
      </div>

      {/* Interactive Helper Caption */}
      <div className="mt-3 flex items-center justify-between w-full font-mono-tech text-[11px] text-[#777B84] px-1">
        <span className="flex items-center gap-1 text-[#A1A1AA]">
          <Code2 className="w-3.5 h-3.5 text-emerald-400" />
          Crystal clear at rest &bull; Splits into code on scroll
        </span>
        <span className="hidden sm:inline text-cyan-400/80 flex items-center gap-1">
          <Sparkles className="w-3 h-3" />
          Cursor Ripple
        </span>
      </div>
    </div>
  );
}
