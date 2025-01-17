import React from 'react';

const AnimationBackground: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute w-[1050px] h-[950px] bg-[#4D69FF] rounded-full animate-orbit1"></div>
      <div className="absolute w-[800px] h-[800px] bg-[#7A8EFC] rounded-full animate-orbit2"></div>
    </div>
  );
};

export default AnimationBackground;
