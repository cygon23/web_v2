import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { LucideIcon } from 'lucide-react';

interface CircularStatProps {
  number: string;
  label: string;
  icon: LucideIcon;
  maxValue: number;
  isVisible: boolean;
  delay?: number;
}

const CircularStat: React.FC<CircularStatProps> = ({
  number,
  label,
  icon: Icon,
  maxValue,
  isVisible,
  delay = 0
}) => {
  const [progress, setProgress] = useState(0);
  const numericValue = parseInt(number);

  // Calculate percentage (assuming max of 3000 for visual consistency)
  const percentage = Math.min((numericValue / maxValue) * 100, 100);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setProgress(percentage);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, percentage, delay]);

  // SVG circle parameters
  const size = 180;
  const strokeWidth = 12;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className='flex flex-col items-center justify-center'>
      {/* Circular Progress Ring */}
      <div className='relative mb-6' style={{ width: size, height: size }}>
        {/* Background Circle */}
        <svg
          className='transform -rotate-90'
          width={size}
          height={size}>
          {/* Background ring */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke='hsl(327, 73%, 95%)'
            strokeWidth={strokeWidth}
            fill='none'
          />
          {/* Progress ring with gradient */}
          <defs>
            <linearGradient id={`gradient-${label}`} x1='0%' y1='0%' x2='100%' y2='100%'>
              <stop offset='0%' stopColor='hsl(327, 73%, 56%)' />
              <stop offset='100%' stopColor='hsl(327, 73%, 70%)' />
            </linearGradient>
            {/* Glow filter */}
            <filter id={`glow-${label}`}>
              <feGaussianBlur stdDeviation='3' result='coloredBlur'/>
              <feMerge>
                <feMergeNode in='coloredBlur'/>
                <feMergeNode in='SourceGraphic'/>
              </feMerge>
            </filter>
          </defs>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={`url(#gradient-${label})`}
            strokeWidth={strokeWidth}
            fill='none'
            strokeLinecap='round'
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{
              transition: 'stroke-dashoffset 2s ease-out',
              filter: `url(#glow-${label})`
            }}
          />
        </svg>

        {/* Center content */}
        <div className='absolute inset-0 flex flex-col items-center justify-center'>
          {/* Icon at top */}
          <div className='mb-2 p-2 rounded-full bg-gradient-to-br from-primary/10 to-primary/5'>
            <Icon className='w-6 h-6 text-primary' />
          </div>
          {/* Animated number */}
          <div className='text-4xl font-heading font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent'>
            {isVisible && (
              <CountUp
                end={numericValue}
                duration={2.5}
                suffix='+'
              />
            )}
          </div>
        </div>

        {/* Outer glow ring */}
        <div
          className='absolute inset-0 rounded-full opacity-30 blur-xl'
          style={{
            background: `radial-gradient(circle, hsl(327, 73%, 56%, 0.4) 0%, transparent 70%)`,
            transform: 'scale(1.1)',
            transition: 'opacity 0.3s ease'
          }}
        />
      </div>

      {/* Label */}
      <p className='text-muted-foreground font-semibold text-sm text-center max-w-[140px]'>
        {label}
      </p>
    </div>
  );
};

export default CircularStat;
