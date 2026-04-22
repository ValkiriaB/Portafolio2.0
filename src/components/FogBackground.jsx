import { useEffect, useRef } from "react";
import { useColorMode } from "@chakra-ui/react";

export default function FogBackground() {
  const canvasRef = useRef(null);
  const { colorMode } = useColorMode();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
 
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // Crear partículas con velocidades más altas
    const particles = [];
    const particleCount = 70;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 100 + Math.random() * 250,
        speedX: (Math.random() - 0.5) * (0.5 + Math.random() * 0.8), // aumento velocidad
        speedY: (Math.random() - 0.5) * (0.5 + Math.random() * 0.8),
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach(p => {
        const color = colorMode === "light"
          ? `rgba(210,150,255,0.6)`   // Light Mode rosa/morado
          : `rgba(255,255,255,0.15)`; // Dark Mode gris

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Mover partículas
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around edges
        if (p.x - p.radius > width) p.x = -p.radius;
        if (p.x + p.radius < 0) p.x = width + p.radius;
        if (p.y - p.radius > height) p.y = -p.radius;
        if (p.y + p.radius < 0) p.y = height + p.radius;
      });

      requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        willChange: "transform",
      }}
    />
  );
}
