import { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';

interface StatItem {
  number: string;
  label: string;
  value: number;
  color: string;
}

interface AnimatedStatsGraphProps {
  stats: StatItem[];
}

const AnimatedStatsGraph = ({ stats }: AnimatedStatsGraphProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const animationRef = useRef<number>();
  const progressRef = useRef<number[]>(stats.map(() => 0));

  useEffect(() => {
    // Trigger animation after mount
    setTimeout(() => setIsVisible(true), 300);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation loop
    const animate = () => {
      const width = canvas.width / window.devicePixelRatio;
      const height = canvas.height / window.devicePixelRatio;

      ctx.clearRect(0, 0, width, height);

      const barWidth = width / stats.length;
      const maxValue = Math.max(...stats.map(s => s.value));

      stats.forEach((stat, index) => {
        // Animate progress
        const targetProgress = stat.value / maxValue;
        if (progressRef.current[index] < targetProgress) {
          progressRef.current[index] += 0.015;
          if (progressRef.current[index] > targetProgress) {
            progressRef.current[index] = targetProgress;
          }
        }

        const x = index * barWidth;
        const barHeight = (height * 0.7) * progressRef.current[index];
        const y = height - barHeight;

        // Draw bar background (subtle)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
        ctx.fillRect(x + barWidth * 0.15, height - (height * 0.7), barWidth * 0.7, height * 0.7);

        // Draw animated bar with gradient
        const gradient = ctx.createLinearGradient(x, height, x, y);
        gradient.addColorStop(0, stat.color);
        gradient.addColorStop(1, stat.color.replace('1)', '0.6)'));

        ctx.fillStyle = gradient;
        ctx.fillRect(x + barWidth * 0.15, y, barWidth * 0.7, barHeight);

        // Draw glow effect
        ctx.shadowBlur = 20;
        ctx.shadowColor = stat.color;
        ctx.fillRect(x + barWidth * 0.15, y, barWidth * 0.7, barHeight);
        ctx.shadowBlur = 0;

        // Draw connecting line between bars
        if (index < stats.length - 1) {
          const nextIndex = index + 1;
          const nextX = nextIndex * barWidth;
          const nextBarHeight = (height * 0.7) * progressRef.current[nextIndex];
          const nextY = height - nextBarHeight;

          ctx.beginPath();
          ctx.moveTo(x + barWidth * 0.85, y + barHeight / 2);
          ctx.lineTo(nextX + barWidth * 0.15, nextY + nextBarHeight / 2);
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
          ctx.lineWidth = 2;
          ctx.stroke();

          // Animated dot traveling along the line
          const dotProgress = (Date.now() % 2000) / 2000;
          const dotX = x + barWidth * 0.85 + (nextX + barWidth * 0.15 - (x + barWidth * 0.85)) * dotProgress;
          const dotY = (y + barHeight / 2) + ((nextY + nextBarHeight / 2) - (y + barHeight / 2)) * dotProgress;

          ctx.beginPath();
          ctx.arc(dotX, dotY, 4, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
          ctx.fill();

          // Glow for dot
          ctx.shadowBlur = 10;
          ctx.shadowColor = '#ffffff';
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [stats]);

  return (
    <div className="w-full">
      {/* Canvas Graph */}
      <div className="relative w-full h-48 mb-8">
        <canvas
          ref={canvasRef}
          className="w-full h-full"
          style={{ display: 'block' }}
        />
      </div>

      {/* Stats Labels */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`text-center transform transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="mb-2">
              <CountUp
                start={0}
                end={stat.value}
                duration={2.5}
                suffix="+"
                delay={0.5}
                className="text-4xl md:text-5xl font-bold font-heading"
                style={{ color: stat.color }}
              />
            </div>
            <p className="text-sm md:text-base text-white/80 font-medium">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedStatsGraph;
