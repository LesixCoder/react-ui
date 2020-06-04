import React, { useEffect, useState } from 'react';

const MouseTracker: React.FC = () => {
  const [positions, setPositions] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePositions = (e: MouseEvent) => {
      console.log('inner', e);

      setPositions({
        x: e.clientX,
        y: e.clientY
      });
    };
    document.addEventListener('click', updatePositions);
    return () => {
      document.removeEventListener('click', updatePositions);
    }
  });

  return (
    <p>
      X: {positions.x}, Y: {positions.y}
    </p>
  );
};

export default MouseTracker;
