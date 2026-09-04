import { useEffect, useRef } from 'react';

export default function StarryBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    interface Star {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      alpha: number;
      colorType: number;
    }

    const stars: Star[] = [];
    const starCount = Math.min(Math.floor((width * height) / 9000), 120);

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.8 + 0.5,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.6 + 0.2,
        colorType: Math.floor(Math.random() * 3)
      });
    }

    const distance = (x1: number, y1: number, x2: number, y2: number) => {
      const dx = x2 - x1;
      const dy = y2 - y1;
      return Math.sqrt(dx * dx + dy * dy);
    };

    const draw = () => {
      const isDark = document.documentElement.classList.contains('dark');
      ctx.clearRect(0, 0, width, height);

      // Particle colors based on theme
      const darkColors = [
        'rgba(20, 184, 166, ',   // accent teal
        'rgba(56, 189, 248, ',   // cyan
        'rgba(255, 255, 255, '   // white
      ];

      const lightColors = [
        'rgba(13, 148, 136, ',   // teal accent
        'rgba(99, 102, 241, ',   // indigo
        'rgba(51, 65, 85, '      // slate
      ];

      const colors = isDark ? darkColors : lightColors;

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        
        ctx.fillStyle = `${colors[s.colorType]}${s.alpha})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Constellation connection lines
      ctx.beginPath();
      for (let i = 0; i < stars.length; i++) {
        const s1 = stars[i];
        for (let j = i + 1; j < stars.length; j++) {
          const s2 = stars[j];
          const dist = distance(s1.x, s1.y, s2.x, s2.y);
          if (dist < 110) {
            const lineAlpha = (1 - dist / 110) * (isDark ? 0.15 : 0.1);
            ctx.strokeStyle = isDark ? `rgba(20, 184, 166, ${lineAlpha})` : `rgba(13, 148, 136, ${lineAlpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(s1.x, s1.y);
            ctx.lineTo(s2.x, s2.y);
            ctx.stroke();
          }
        }
      }
    };

    const update = () => {
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.x += s.vx;
        s.y += s.vy;

        // Bounce off canvas boundaries
        if (s.x < 0 || s.x > width) s.vx = -s.vx;
        if (s.y < 0 || s.y > height) s.vy = -s.vy;

        // Subtle mouse repulsion effect
        const mouseDist = distance(mouseX, mouseY, s.x, s.y);
        if (mouseDist < 120 && mouseDist > 0) {
          const force = (120 - mouseDist) / 120;
          const angle = Math.atan2(s.y - mouseY, s.x - mouseX);
          s.x += Math.cos(angle) * force * 1.5;
          s.y += Math.sin(angle) * force * 1.5;
        }
      }
    };

    let animationFrameId: number;
    const loop = () => {
      draw();
      update();
      animationFrameId = requestAnimationFrame(loop);
    };

    loop();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full opacity-70"
      />
      {/* Ambient background blur glow Orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-minimal-accent/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '3s' }} />
    </div>
  );
}
