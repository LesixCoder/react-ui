import React, { useEffect, useState } from 'react';

const MouseTracker: React.FC = () => {
  const [positions, setPositions] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log('add Effect')
    const updatePositions = (e: MouseEvent) => {
      console.log('inner', e);

      setPositions({
        x: e.clientX,
        y: e.clientY
      });
    };
    document.addEventListener('click', updatePositions);
    return () => {
      console.log('remove Effect')
      document.removeEventListener('click', updatePositions);
    }
  }, []);

  console.log('before render')
  return (
    <p>
      X: {positions.x}, Y: {positions.y}
    </p>
  );
};

export default MouseTracker;
