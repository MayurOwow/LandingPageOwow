// LottieAnimation.js
import React, { useState } from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/Animation-1705030892977.json';

const LottieAnimation = () => {
  const [isAnimationStopped, setAnimationStopped] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    isStopped: isAnimationStopped,
  };

  const handleAnimationClick = () => {
    // Toggle animation state on click
    setAnimationStopped(!isAnimationStopped);
  };

  return (
    <div onClick={handleAnimationClick}>
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default LottieAnimation;
