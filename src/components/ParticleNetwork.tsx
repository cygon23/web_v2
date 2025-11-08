import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number; // Depth layer (0-1, where 1 is closest)
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

interface ParticleNetworkProps {
  particleCount?: number;
  connectionDistance?: number;
  particleColor?: string;
  lineColor?: string;
  particleSpeed?: number;
}

const ParticleNetwork = ({
  particleCount = 80,
  connectionDistance = 150,
  particleColor = 'rgba(255, 255, 255, 0.8)',
  lineColor = 'rgba(255, 255, 255, 0.3)',
  particleSpeed = 0.3,
}: ParticleNetworkProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles with 3D depth
    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < particleCount; i++) {
        const z = Math.random(); // Depth: 0 (far) to 1 (near)
        const baseSpeed = particleSpeed * (0.3 + z * 0.7); // Faster particles appear closer

        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z,
          vx: (Math.random() - 0.5) * baseSpeed,
          vy: (Math.random() - 0.5) * baseSpeed,
          radius: 1 + z * 2.5, // Larger particles appear closer (1-3.5px)
          opacity: 0.3 + z * 0.7, // More opaque particles appear closer
        });
      }
    };
    initParticles();

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };
    canvas.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach((particle, i) => {
        // Mouse interaction - particles move away from cursor
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const interactionRadius = 150 * particle.z; // Closer particles react more

        if (distance < interactionRadius) {
          const force = (interactionRadius - distance) / interactionRadius;
          const angle = Math.atan2(dy, dx);
          particle.vx -= Math.cos(angle) * force * 0.3 * particle.z;
          particle.vy -= Math.sin(angle) * force * 0.3 * particle.z;
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Boundary wrapping
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Apply friction
        particle.vx *= 0.99;
        particle.vy *= 0.99;

        // Add slight random movement
        particle.vx += (Math.random() - 0.5) * 0.02 * particle.z;
        particle.vy += (Math.random() - 0.5) * 0.02 * particle.z;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particleColor.replace('0.8', particle.opacity.toString());
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const other = particlesRef.current[j];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Adjust connection distance based on depth
          const depthFactor = (particle.z + other.z) / 2;
          const adjustedDistance = connectionDistance * depthFactor;

          if (distance < adjustedDistance) {
            const opacity = (1 - distance / adjustedDistance) * 0.5 * depthFactor;

            // Create gradient for 3D effect
            const gradient = ctx.createLinearGradient(
              particle.x,
              particle.y,
              other.x,
              other.y
            );
            gradient.addColorStop(0, lineColor.replace('0.3', (opacity * particle.opacity).toString()));
            gradient.addColorStop(1, lineColor.replace('0.3', (opacity * other.opacity).toString()));

            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.5 + depthFactor * 0.5;
            ctx.stroke();
          }
        }
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [particleCount, connectionDistance, particleColor, lineColor, particleSpeed]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: 'auto' }}
    />
  );
};

export default ParticleNetwork;
