import { useEffect, useRef } from 'react';

interface Float3DElement {
  x: number;
  y: number;
  z: number; // Depth
  vx: number;
  vy: number;
  vz: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  hue: number;
  shape: 'circle' | 'square' | 'triangle' | 'hexagon';
}

const FloatingElements3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<Float3DElement[]>([]);
  const rafRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const elementCount = 20;

    // Initialize floating elements
    elementsRef.current = Array.from({ length: elementCount }, (_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      z: Math.random(), // 0-1, where 1 is closest
      vx: (Math.random() - 0.5) * 0.02,
      vy: (Math.random() - 0.5) * 0.02,
      vz: (Math.random() - 0.5) * 0.001,
      size: 40 + Math.random() * 80,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 0.5,
      hue: (i / elementCount) * 360,
      shape: ['circle', 'square', 'triangle', 'hexagon'][Math.floor(Math.random() * 4)] as any,
    }));

    // Create DOM elements
    elementsRef.current.forEach((element, i) => {
      const div = document.createElement('div');
      div.className = 'floating-3d-element';
      div.style.cssText = `
        position: absolute;
        width: ${element.size}px;
        height: ${element.size}px;
        left: ${element.x}%;
        top: ${element.y}%;
        transform-style: preserve-3d;
        transition: transform 0.1s ease-out;
      `;

      // Create the shape
      const shape = document.createElement('div');
      shape.style.cssText = `
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg,
          hsla(${element.hue}, 80%, 70%, 0.15),
          hsla(${element.hue + 40}, 80%, 60%, 0.1));
        backdrop-filter: blur(10px);
        border: 1px solid hsla(${element.hue}, 100%, 80%, 0.3);
        box-shadow:
          0 8px 32px hsla(${element.hue}, 80%, 60%, 0.2),
          inset 0 1px 1px hsla(${element.hue}, 100%, 100%, 0.3);
        border-radius: ${element.shape === 'circle' ? '50%' : element.shape === 'square' ? '10%' : '0'};
        transform-style: preserve-3d;
        position: relative;
      `;

      if (element.shape === 'triangle' || element.shape === 'hexagon') {
        shape.style.clipPath = element.shape === 'triangle'
          ? 'polygon(50% 0%, 0% 100%, 100% 100%)'
          : 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)';
      }

      // Add inner glow
      const innerGlow = document.createElement('div');
      innerGlow.style.cssText = `
        position: absolute;
        inset: 10%;
        background: radial-gradient(circle,
          hsla(${element.hue}, 100%, 90%, 0.3) 0%,
          transparent 70%);
        border-radius: inherit;
        animation: pulse-glow-${i} 3s ease-in-out infinite;
      `;
      shape.appendChild(innerGlow);

      div.appendChild(shape);
      container.appendChild(div);

      // Add keyframe animation
      const style = document.createElement('style');
      style.textContent = `
        @keyframes pulse-glow-${i} {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }
      `;
      document.head.appendChild(style);
    });

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current = {
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      };
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      const elements = container.querySelectorAll('.floating-3d-element');

      elementsRef.current.forEach((element, i) => {
        // Update position
        element.x += element.vx;
        element.y += element.vy;
        element.z += element.vz;

        // Boundary wrapping
        if (element.x < -10) element.x = 110;
        if (element.x > 110) element.x = -10;
        if (element.y < -10) element.y = 110;
        if (element.y > 110) element.y = -10;
        if (element.z < 0) element.z = 1;
        if (element.z > 1) element.z = 0;

        // Update rotation
        element.rotation += element.rotationSpeed;

        // Mouse parallax effect
        const dx = mouseRef.current.x - element.x;
        const dy = mouseRef.current.y - element.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        let parallaxX = 0;
        let parallaxY = 0;

        if (distance < 30) {
          const force = (30 - distance) / 30;
          parallaxX = -dx * force * 2;
          parallaxY = -dy * force * 2;
        }

        // Calculate 3D transform
        const scale = 0.5 + element.z * 0.5; // Perspective scale
        const translateZ = (element.z - 0.5) * 200; // 3D depth
        const blur = (1 - element.z) * 3; // Depth blur

        const el = elements[i] as HTMLElement;
        if (el) {
          el.style.left = `${element.x + parallaxX}%`;
          el.style.top = `${element.y + parallaxY}%`;
          el.style.transform = `
            translateZ(${translateZ}px)
            scale(${scale})
            rotateX(${parallaxY * 2}deg)
            rotateY(${parallaxX * 2}deg)
          `;
          el.style.filter = `blur(${blur}px)`;
          el.style.opacity = `${0.4 + element.z * 0.6}`;

          const shape = el.firstChild as HTMLElement;
          if (shape) {
            shape.style.transform = `rotateZ(${element.rotation}deg)`;
          }
        }
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      // Cleanup DOM elements
      container.querySelectorAll('.floating-3d-element').forEach(el => el.remove());

      // Cleanup styles
      document.querySelectorAll('style[data-floating-element]').forEach(el => el.remove());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden"
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
        pointerEvents: 'none',
      }}
    />
  );
};

export default FloatingElements3D;
