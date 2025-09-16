import React from "react";
import { Briefcase, TrendingUp, Users, Target } from "lucide-react";

const LoadingIndicator = () => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-purple-50'>
      <div className='text-center space-y-8'>
        {/* Logo Animation */}
        <div className='relative'>
          <div className='w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl shadow-lg flex items-center justify-center transform animate-pulse'>
            <Briefcase className='w-10 h-10 text-white' />
          </div>

          {/* Floating Icons Animation */}
          <div
            className='absolute -top-4 -left-4 w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center animate-bounce'
            style={{ animationDelay: "0s" }}>
            <Target className='w-4 h-4 text-pink-600' />
          </div>
          <div
            className='absolute -top-4 -right-4 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center animate-bounce'
            style={{ animationDelay: "0.5s" }}>
            <TrendingUp className='w-4 h-4 text-purple-600' />
          </div>
          <div
            className='absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center animate-bounce'
            style={{ animationDelay: "1s" }}>
            <Users className='w-4 h-4 text-blue-600' />
          </div>
        </div>

        {/* Brand Text */}
        <div className='space-y-2'>
          <h1 className='text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent'>
            Career Na Mimi
          </h1>
          <p className='text-gray-600 text-sm font-medium'>
            Your Journey, Your Success
          </p>
        </div>

        {/* Progress Animation */}
        <div className='w-64 mx-auto'>
          <div className='h-1 bg-gray-200 rounded-full overflow-hidden'>
            <div
              className='h-full bg-gradient-to-r from-pink-500 to-purple-600 rounded-full animate-pulse'
              style={{
                width: "100%",
                animation: "loading-progress 2s ease-in-out infinite",
              }}></div>
          </div>
        </div>

        {/* Loading Text with Typing Effect */}
        <div className='space-y-1'>
          <p className='text-gray-500 text-sm animate-pulse'>
            Empowering your career journey...
          </p>
        </div>

        {/* Motivational Stats Animation */}
        <div className='grid grid-cols-3 gap-4 max-w-sm mx-auto text-center'>
          <div className='transform hover:scale-105 transition-transform'>
            <div className='text-lg font-bold text-pink-600 animate-pulse'>
              500+
            </div>
            <div className='text-xs text-gray-500'>Careers</div>
          </div>
          <div
            className='transform hover:scale-105 transition-transform'
            style={{ animationDelay: "0.5s" }}>
            <div className='text-lg font-bold text-purple-600 animate-pulse'>
              350+
            </div>
            <div className='text-xs text-gray-500'>Mentored</div>
          </div>
          <div
            className='transform hover:scale-105 transition-transform'
            style={{ animationDelay: "1s" }}>
            <div className='text-lg font-bold text-blue-600 animate-pulse'>
              200+
            </div>
            <div className='text-xs text-gray-500'>Success</div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-10 left-10 w-4 h-4 bg-pink-500 rounded-full animate-ping'></div>
        <div
          className='absolute top-20 right-16 w-3 h-3 bg-purple-500 rounded-full animate-ping'
          style={{ animationDelay: "1s" }}></div>
        <div
          className='absolute bottom-20 left-20 w-5 h-5 bg-blue-500 rounded-full animate-ping'
          style={{ animationDelay: "2s" }}></div>
        <div
          className='absolute bottom-32 right-12 w-2 h-2 bg-pink-500 rounded-full animate-ping'
          style={{ animationDelay: "0.5s" }}></div>
      </div>

      <style>{`
        @keyframes loading-progress {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default LoadingIndicator;
