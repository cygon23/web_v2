import { useEffect, useRef, useState } from 'react';
import { Target, Lightbulb, Award, TrendingUp, Zap, Rocket } from 'lucide-react';

interface PathNode {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  radius: number;
  icon: string;
  hue: number;
  opacity: number;
  scale: number;
  rotation: number;
}

interface PathConnection {
  from: PathNode;
  to: PathNode;
  progress: number;
  particles: PathParticle[];
}

interface PathParticle {
  progress: number;
  speed: number;
  size: number;
  hue: number;
}

const CareerPathConnector = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<PathNode[]>([]);
  const connectionsRef = useRef<PathConnection[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, isMoving: false });
  const timeRef = useRef(0);
  const [loaded, setLoaded] = useState(false);

  const icons = ['🎯', '💡', '🏆', '📈', '⚡', '🚀', '🌟', '💼', '🎓', '🔥'];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      initializeNodes();
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize nodes representing career milestones
    const initializeNodes = () => {
      const nodeCount = 8;
      nodesRef.current = [];

      for (let i = 0; i < nodeCount; i++) {
        const angle = (i / nodeCount) * Math.PI * 2;
        const radiusX = canvas.offsetWidth * 0.35;
        const radiusY = canvas.offsetHeight * 0.3;
        const centerX = canvas.offsetWidth / 2;
        const centerY = canvas.offsetHeight / 2;

        nodesRef.current.push({
          x: centerX + Math.cos(angle) * radiusX,
          y: centerY + Math.sin(angle) * radiusY,
          targetX: centerX + Math.cos(angle) * radiusX,
          targetY: centerY + Math.sin(angle) * radiusY,
          radius: 30 + Math.random() * 20,
          icon: icons[i % icons.length],
          hue: (i / nodeCount) * 360,
          opacity: 0.8,
          scale: 1,
          rotation: Math.random() * Math.PI * 2,
        });
      }

      // Create connections
      connectionsRef.current = [];
      for (let i = 0; i < nodesRef.current.length; i++) {
        const next = (i + 1) % nodesRef.current.length;
        const particles: PathParticle[] = [];

        // Create flowing particles along the path
        for (let p = 0; p < 3; p++) {
          particles.push({
            progress: p / 3,
            speed: 0.002 + Math.random() * 0.003,
            size: 3 + Math.random() * 4,
            hue: Math.random() * 360,
          });
        }

        connectionsRef.current.push({
          from: nodesRef.current[i],
          to: nodesRef.current[next],
          progress: 0,
          particles,
        });
      }

      setLoaded(true);
    };

    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        isMoving: true,
      };

      // Nodes react to mouse
      nodesRef.current.forEach((node) => {
        const dx = mouseRef.current.x - node.x;
        const dy = mouseRef.current.y - node.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          const force = (150 - distance) / 150;
          node.targetX = node.x - (dx * force * 30);
          node.targetY = node.y - (dy * force * 30);
          node.scale = 1 + force * 0.5;
        } else {
          // Return to original position
          const centerX = canvas.offsetWidth / 2;
          const centerY = canvas.offsetHeight / 2;
          const angle = Math.atan2(node.y - centerY, node.x - centerX);
          const radiusX = canvas.offsetWidth * 0.35;
          const radiusY = canvas.offsetHeight * 0.3;
          node.targetX = centerX + Math.cos(angle) * radiusX;
          node.targetY = centerY + Math.sin(angle) * radiusY;
          node.scale = 1;
        }
      });
    };

    const handleMouseLeave = () => {
      mouseRef.current.isMoving = false;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Animation loop
    const animate = () => {
      timeRef.current += 0.01;

      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      // Draw morphing gradient background blobs
      drawMorphingBackground(ctx, canvas.offsetWidth, canvas.offsetHeight);

      // Update and draw connections
      connectionsRef.current.forEach((connection, idx) => {
        connection.progress += 0.002;
        if (connection.progress > 1) connection.progress = 0;

        // Draw glowing path
        drawGlowingPath(ctx, connection);

        // Update and draw particles
        connection.particles.forEach((particle) => {
          particle.progress += particle.speed;
          if (particle.progress > 1) particle.progress = 0;

          const x = connection.from.x + (connection.to.x - connection.from.x) * particle.progress;
          const y = connection.from.y + (connection.to.y - connection.from.y) * particle.progress;

          // Particle glow
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, particle.size * 3);
          gradient.addColorStop(0, `hsla(${particle.hue}, 100%, 70%, 0.8)`);
          gradient.addColorStop(0.5, `hsla(${particle.hue}, 100%, 50%, 0.4)`);
          gradient.addColorStop(1, 'transparent');

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(x, y, particle.size * 3, 0, Math.PI * 2);
          ctx.fill();

          // Core particle
          ctx.fillStyle = `hsla(${particle.hue}, 100%, 80%, 1)`;
          ctx.beginPath();
          ctx.arc(x, y, particle.size, 0, Math.PI * 2);
          ctx.fill();
        });
      });

      // Update and draw nodes
      nodesRef.current.forEach((node, idx) => {
        // Smooth movement
        node.x += (node.targetX - node.x) * 0.1;
        node.y += (node.targetY - node.y) * 0.1;
        node.rotation += 0.01;

        drawNode(ctx, node, idx);
      });

      // Draw center light effect
      drawCenterLight(ctx, canvas.offsetWidth, canvas.offsetHeight);

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Draw morphing gradient background
  const drawMorphingBackground = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const blobCount = 4;

    for (let i = 0; i < blobCount; i++) {
      const angle = (timeRef.current * 0.3 + (i / blobCount) * Math.PI * 2);
      const x = width / 2 + Math.cos(angle) * (width * 0.2);
      const y = height / 2 + Math.sin(angle) * (height * 0.2);
      const radius = 150 + Math.sin(timeRef.current * 0.5 + i) * 50;
      const hue = (timeRef.current * 20 + i * 90) % 360;

      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
      gradient.addColorStop(0, `hsla(${hue}, 80%, 60%, 0.15)`);
      gradient.addColorStop(0.5, `hsla(${hue}, 80%, 50%, 0.08)`);
      gradient.addColorStop(1, 'transparent');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }
  };

  // Draw glowing connection path
  const drawGlowingPath = (ctx: CanvasRenderingContext2D, connection: PathConnection) => {
    const gradient = ctx.createLinearGradient(
      connection.from.x,
      connection.from.y,
      connection.to.x,
      connection.to.y
    );
    gradient.addColorStop(0, `hsla(${connection.from.hue}, 80%, 60%, 0.3)`);
    gradient.addColorStop(0.5, `hsla(${(connection.from.hue + connection.to.hue) / 2}, 80%, 60%, 0.5)`);
    gradient.addColorStop(1, `hsla(${connection.to.hue}, 80%, 60%, 0.3)`);

    // Outer glow
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 3;
    ctx.shadowBlur = 15;
    ctx.shadowColor = `hsla(${connection.from.hue}, 80%, 60%, 0.5)`;
    ctx.beginPath();
    ctx.moveTo(connection.from.x, connection.from.y);
    ctx.lineTo(connection.to.x, connection.to.y);
    ctx.stroke();

    // Inner line
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 1;
    ctx.shadowBlur = 5;
    ctx.beginPath();
    ctx.moveTo(connection.from.x, connection.from.y);
    ctx.lineTo(connection.to.x, connection.to.y);
    ctx.stroke();

    ctx.shadowBlur = 0;
  };

  // Draw 3D-style node with glassmorphism
  const drawNode = (ctx: CanvasRenderingContext2D, node: PathNode, idx: number) => {
    ctx.save();
    ctx.translate(node.x, node.y);
    ctx.scale(node.scale, node.scale);
    ctx.rotate(node.rotation);

    // Outer glow
    const glowGradient = ctx.createRadialGradient(0, 0, node.radius * 0.5, 0, 0, node.radius * 1.5);
    glowGradient.addColorStop(0, `hsla(${node.hue}, 100%, 70%, 0.4)`);
    glowGradient.addColorStop(0.5, `hsla(${node.hue}, 100%, 60%, 0.2)`);
    glowGradient.addColorStop(1, 'transparent');

    ctx.fillStyle = glowGradient;
    ctx.beginPath();
    ctx.arc(0, 0, node.radius * 1.5, 0, Math.PI * 2);
    ctx.fill();

    // Glassmorphic circle
    const bgGradient = ctx.createRadialGradient(0, -node.radius * 0.3, 0, 0, 0, node.radius);
    bgGradient.addColorStop(0, `hsla(${node.hue}, 80%, 80%, 0.3)`);
    bgGradient.addColorStop(1, `hsla(${node.hue}, 80%, 60%, 0.2)`);

    ctx.fillStyle = bgGradient;
    ctx.beginPath();
    ctx.arc(0, 0, node.radius, 0, Math.PI * 2);
    ctx.fill();

    // Border with shimmer
    ctx.strokeStyle = `hsla(${node.hue}, 100%, 80%, ${0.6 + Math.sin(timeRef.current * 2 + idx) * 0.4})`;
    ctx.lineWidth = 2;
    ctx.shadowBlur = 10;
    ctx.shadowColor = `hsla(${node.hue}, 100%, 70%, 0.8)`;
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Icon/emoji
    ctx.font = `${node.radius * 0.8}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = 'white';
    ctx.fillText(node.icon, 0, 0);

    ctx.restore();
  };

  // Draw center light rays
  const drawCenterLight = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const centerX = width / 2;
    const centerY = height / 2;
    const rayCount = 8;

    for (let i = 0; i < rayCount; i++) {
      const angle = (timeRef.current * 0.5 + (i / rayCount) * Math.PI * 2);
      const length = 200 + Math.sin(timeRef.current * 2 + i) * 50;
      const endX = centerX + Math.cos(angle) * length;
      const endY = centerY + Math.sin(angle) * length;

      const gradient = ctx.createLinearGradient(centerX, centerY, endX, endY);
      gradient.addColorStop(0, `hsla(${(i / rayCount) * 360}, 100%, 80%, 0.2)`);
      gradient.addColorStop(0.7, `hsla(${(i / rayCount) * 360}, 100%, 60%, 0.1)`);
      gradient.addColorStop(1, 'transparent');

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(endX, endY);
      ctx.stroke();
    }

    // Center pulse
    const pulseSize = 20 + Math.sin(timeRef.current * 3) * 10;
    const pulseGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, pulseSize);
    pulseGradient.addColorStop(0, 'hsla(200, 100%, 80%, 0.8)');
    pulseGradient.addColorStop(0.5, 'hsla(280, 100%, 70%, 0.4)');
    pulseGradient.addColorStop(1, 'transparent');

    ctx.fillStyle = pulseGradient;
    ctx.beginPath();
    ctx.arc(centerX, centerY, pulseSize, 0, Math.PI * 2);
    ctx.fill();
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <canvas
        ref={canvasRef}
        className={`w-full h-full transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ pointerEvents: 'auto' }}
      />
    </div>
  );
};

export default CareerPathConnector;
