import React from "react";
import { Briefcase, TrendingUp, Users, Target, Lightbulb, Sparkles } from "lucide-react";

const LoadingIndicator = () => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-purple-50'>
      <div className='text-center'>
        {/* Career Path Network Animation */}
        <div className='relative w-80 h-80 mx-auto'>
          {/* SVG Connection Lines */}
          <svg className='absolute inset-0 w-full h-full' viewBox='0 0 320 320'>
            <defs>
              {/* Gradient for lines */}
              <linearGradient id='lineGradient' x1='0%' y1='0%' x2='100%' y2='100%'>
                <stop offset='0%' stopColor='#ec4899' stopOpacity='0.8' />
                <stop offset='50%' stopColor='#d946ef' stopOpacity='0.8' />
                <stop offset='100%' stopColor='#9333ea' stopOpacity='0.8' />
              </linearGradient>

              {/* Animated gradient for pulse effect */}
              <linearGradient id='pulseGradient' x1='0%' y1='0%' x2='100%' y2='0%'>
                <stop offset='0%' stopColor='#ec4899' stopOpacity='0'>
                  <animate attributeName='offset' values='0;1' dur='2s' repeatCount='indefinite' />
                </stop>
                <stop offset='50%' stopColor='#d946ef' stopOpacity='1'>
                  <animate attributeName='offset' values='0;1' dur='2s' repeatCount='indefinite' />
                </stop>
                <stop offset='100%' stopColor='#9333ea' stopOpacity='0'>
                  <animate attributeName='offset' values='0;1' dur='2s' repeatCount='indefinite' />
                </stop>
              </linearGradient>
            </defs>

            {/* Connection Lines - Creating Network Effect */}
            {/* Center to Target (top-right) */}
            <line x1='160' y1='160' x2='240' y2='80' stroke='url(#lineGradient)' strokeWidth='2' opacity='0.6' className='connection-line' style={{ animationDelay: '0.2s' }} />

            {/* Center to TrendingUp (bottom-right) */}
            <line x1='160' y1='160' x2='240' y2='240' stroke='url(#lineGradient)' strokeWidth='2' opacity='0.6' className='connection-line' style={{ animationDelay: '0.4s' }} />

            {/* Center to Users (bottom-left) */}
            <line x1='160' y1='160' x2='80' y2='240' stroke='url(#lineGradient)' strokeWidth='2' opacity='0.6' className='connection-line' style={{ animationDelay: '0.6s' }} />

            {/* Center to Lightbulb (top-left) */}
            <line x1='160' y1='160' x2='80' y2='80' stroke='url(#lineGradient)' strokeWidth='2' opacity='0.6' className='connection-line' style={{ animationDelay: '0.8s' }} />

            {/* Inter-node connections for network effect */}
            <line x1='240' y1='80' x2='240' y2='240' stroke='url(#lineGradient)' strokeWidth='1.5' opacity='0.3' className='connection-line' style={{ animationDelay: '1s' }} />
            <line x1='80' y1='80' x2='80' y2='240' stroke='url(#lineGradient)' strokeWidth='1.5' opacity='0.3' className='connection-line' style={{ animationDelay: '1.2s' }} />
            <line x1='80' y1='80' x2='240' y2='80' stroke='url(#lineGradient)' strokeWidth='1.5' opacity='0.3' className='connection-line' style={{ animationDelay: '1.4s' }} />
            <line x1='80' y1='240' x2='240' y2='240' stroke='url(#lineGradient)' strokeWidth='1.5' opacity='0.3' className='connection-line' style={{ animationDelay: '1.6s' }} />

            {/* Network Nodes (dots) */}
            <circle cx='160' cy='160' r='4' fill='#ec4899' className='network-node' />
            <circle cx='240' cy='80' r='3' fill='#d946ef' className='network-node' style={{ animationDelay: '0.2s' }} />
            <circle cx='240' cy='240' r='3' fill='#9333ea' className='network-node' style={{ animationDelay: '0.4s' }} />
            <circle cx='80' cy='240' r='3' fill='#d946ef' className='network-node' style={{ animationDelay: '0.6s' }} />
            <circle cx='80' cy='80' r='3' fill='#ec4899' className='network-node' style={{ animationDelay: '0.8s' }} />
          </svg>

          {/* Central Briefcase Hub */}
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'>
            <div className='relative'>
              {/* Glow effect */}
              <div className='absolute inset-0 w-24 h-24 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl blur-xl opacity-50 animate-pulse'></div>

              {/* Main briefcase */}
              <div className='relative w-24 h-24 bg-gradient-to-br from-pink-500 via-pink-600 to-purple-600 rounded-2xl shadow-2xl flex items-center justify-center breathing-scale'>
                <Briefcase className='w-12 h-12 text-white' strokeWidth={2.5} />

                {/* Sparkles effect */}
                <div className='absolute -top-2 -right-2'>
                  <Sparkles className='w-5 h-5 text-pink-400 animate-pulse' />
                </div>
              </div>
            </div>
          </div>

          {/* Orbiting Career Icons */}
          {/* Target - Top Right */}
          <div className='absolute top-12 right-12 orbit-icon' style={{ animationDelay: '0s' }}>
            <div className='relative'>
              <div className='w-16 h-16 bg-gradient-to-br from-pink-100 to-pink-200 dark:from-pink-900/30 dark:to-pink-800/30 rounded-xl shadow-lg flex items-center justify-center border-2 border-pink-300/50 icon-float'>
                <Target className='w-8 h-8 text-pink-600' strokeWidth={2} />
              </div>
              {/* Particle trail */}
              <div className='absolute inset-0 rounded-xl bg-pink-400 opacity-20 animate-ping' style={{ animationDuration: '3s' }}></div>
            </div>
          </div>

          {/* TrendingUp - Bottom Right */}
          <div className='absolute bottom-12 right-12 orbit-icon' style={{ animationDelay: '0.5s' }}>
            <div className='relative'>
              <div className='w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 rounded-xl shadow-lg flex items-center justify-center border-2 border-purple-300/50 icon-float'>
                <TrendingUp className='w-8 h-8 text-purple-600' strokeWidth={2} />
              </div>
              <div className='absolute inset-0 rounded-xl bg-purple-400 opacity-20 animate-ping' style={{ animationDuration: '3s', animationDelay: '0.5s' }}></div>
            </div>
          </div>

          {/* Users - Bottom Left */}
          <div className='absolute bottom-12 left-12 orbit-icon' style={{ animationDelay: '1s' }}>
            <div className='relative'>
              <div className='w-16 h-16 bg-gradient-to-br from-fuchsia-100 to-fuchsia-200 dark:from-fuchsia-900/30 dark:to-fuchsia-800/30 rounded-xl shadow-lg flex items-center justify-center border-2 border-fuchsia-300/50 icon-float'>
                <Users className='w-8 h-8 text-fuchsia-600' strokeWidth={2} />
              </div>
              <div className='absolute inset-0 rounded-xl bg-fuchsia-400 opacity-20 animate-ping' style={{ animationDuration: '3s', animationDelay: '1s' }}></div>
            </div>
          </div>

          {/* Lightbulb - Top Left */}
          <div className='absolute top-12 left-12 orbit-icon' style={{ animationDelay: '1.5s' }}>
            <div className='relative'>
              <div className='w-16 h-16 bg-gradient-to-br from-violet-100 to-violet-200 dark:from-violet-900/30 dark:to-violet-800/30 rounded-xl shadow-lg flex items-center justify-center border-2 border-violet-300/50 icon-float'>
                <Lightbulb className='w-8 h-8 text-violet-600' strokeWidth={2} />
              </div>
              <div className='absolute inset-0 rounded-xl bg-violet-400 opacity-20 animate-ping' style={{ animationDuration: '3s', animationDelay: '1.5s' }}></div>
            </div>
          </div>

          {/* Energy Particles */}
          <div className='absolute top-1/4 left-1/4 w-2 h-2 bg-pink-400 rounded-full particle' style={{ animationDelay: '0s' }}></div>
          <div className='absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full particle' style={{ animationDelay: '0.7s' }}></div>
          <div className='absolute bottom-1/3 left-1/3 w-2 h-2 bg-fuchsia-400 rounded-full particle' style={{ animationDelay: '1.4s' }}></div>
          <div className='absolute bottom-1/4 right-1/3 w-1.5 h-1.5 bg-violet-400 rounded-full particle' style={{ animationDelay: '2.1s' }}></div>
        </div>

        {/* Brand Text */}
        <div className='space-y-2 mt-8'>
          <h1 className='text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent'>
            Career Na Mimi
          </h1>
          <p className='text-gray-600 dark:text-gray-400 text-sm font-medium animate-pulse'>
            Mapping your career journey...
          </p>
        </div>
      </div>

      {/* Background Ambient Particles */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none opacity-10'>
        <div className='absolute top-20 left-20 w-3 h-3 bg-pink-500 rounded-full animate-ping' style={{ animationDuration: '4s' }}></div>
        <div className='absolute top-40 right-32 w-2 h-2 bg-purple-500 rounded-full animate-ping' style={{ animationDuration: '3s', animationDelay: '1s' }}></div>
        <div className='absolute bottom-32 left-40 w-4 h-4 bg-fuchsia-500 rounded-full animate-ping' style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
        <div className='absolute bottom-20 right-20 w-2 h-2 bg-violet-500 rounded-full animate-ping' style={{ animationDuration: '4s', animationDelay: '0.5s' }}></div>
      </div>

      <style>{`
        @keyframes drawLine {
          from {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
          }
          to {
            stroke-dasharray: 1000;
            stroke-dashoffset: 0;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes breathe {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes orbitPulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }

        @keyframes particleFloat {
          0% {
            transform: translate(0, 0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translate(20px, -40px);
            opacity: 0;
          }
        }

        .connection-line {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: drawLine 1.5s ease-out forwards;
        }

        .network-node {
          animation: fadeIn 0.8s ease-out forwards, breathe 2s ease-in-out infinite;
        }

        .breathing-scale {
          animation: breathe 3s ease-in-out infinite;
        }

        .icon-float {
          animation: float 3s ease-in-out infinite;
        }

        .orbit-icon {
          animation: orbitPulse 2s ease-in-out infinite;
        }

        .particle {
          animation: particleFloat 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingIndicator;
