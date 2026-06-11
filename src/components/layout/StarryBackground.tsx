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

    const stars: { x: number, y: number, radius: number, vx: number, vy: number, alpha: number }[] = [];
    for (let i = 0; i < 150; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5,
        vx: Math.floor(Math.random() * 50) - 25,
        vy: Math.floor(Math.random() * 50) - 25,
        alpha: Math.random()
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "lighter";
      
      for (let i = 0, x = stars.length; i < x; i++) {
        const s = stars[i];
        ctx.fillStyle = `rgba(255, 255, 255, ${s.alpha})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
        ctx.fill();
      }
      
      ctx.beginPath();
      for (let i = 0, x = stars.length; i < x; i++) {
        const starI = stars[i];
        ctx.moveTo(starI.x, starI.y);
        for (let j = 0, x = stars.length; j < x; j++) {
          const starII = stars[j];
          const dist = distance(starI, starII);
          if (dist < 100) {
            ctx.lineTo(starII.x, starII.y);
          }
        }
      }
      ctx.lineWidth = 0.05;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.stroke();
    };

    const distance = (point1: any, point2: any) => {
      let xs = point2.x - point1.x;
      xs = xs * xs;
      let ys = point2.y - point1.y;
      ys = ys * ys;
      return Math.sqrt(xs + ys);
    }

    const update = () => {
      for (let i = 0, x = stars.length; i < x; i++) {
        const s = stars[i];
        s.x += s.vx / 100;
        s.y += s.vy / 100;
        
        if (s.x < 0 || s.x > width) s.vx = -s.vx;
        if (s.y < 0 || s.y > height) s.vy = -s.vy;
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
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
}
