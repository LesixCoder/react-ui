import { useEffect, useState } from 'react';

const useMousePosition = () => {
  const [positions, setPositions] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log('add Effect', positions.x);
    const updatePositions = (e: MouseEvent) => {
      setPositions({
        x: e.clientX,
        y: e.clientY
      });
    };
    document.addEventListener('mousemove', updatePositions);
    return () => {
      console.log('remove Effect', positions.x);
      document.removeEventListener('mousemove', updatePositions);
    };
  }, []);

  return positions;
};

export default useMousePosition;
