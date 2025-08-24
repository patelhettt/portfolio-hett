import { useEffect, useRef } from "react";

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Enhanced character set with cybersecurity symbols
    const characters = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン!@#$%^&*()_+-=[]{}|;:,.<>?";
    const charArray = characters.split("");

    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];
    const speeds: number[] = [];
    const opacities: number[] = [];

    // Initialize drops with varying speeds and opacities
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -canvas.height;
      speeds[i] = 0.5 + Math.random() * 2;
      opacities[i] = 0.1 + Math.random() * 0.9;
    }

    function draw() {
      if (!ctx || !canvas) return;

      // Create gradient fade effect
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "rgba(15, 23, 42, 0.1)");
      gradient.addColorStop(1, "rgba(15, 23, 42, 0.05)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Create glowing effect
        ctx.shadowColor = "#00FF41";
        ctx.shadowBlur = 5;
        ctx.fillStyle = `rgba(0, 255, 65, ${opacities[i]})`;
        ctx.fillText(text, x, y);

        // Reset shadow
        ctx.shadowBlur = 0;

        // Update drop position
        drops[i] += speeds[i] * 0.1;

        // Reset drop when it goes off screen
        if (drops[i] * fontSize > canvas.height + 50) {
          drops[i] = Math.random() * -50;
          opacities[i] = 0.1 + Math.random() * 0.9;
          speeds[i] = 0.5 + Math.random() * 2;
        }
      }
    }

    const interval = setInterval(draw, 30);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 opacity-15 pointer-events-none"
      style={{ background: "transparent" }}
    />
  );
}
