import React, { useEffect, useState } from 'react';
import useMousePosition from '../hooks/useMousePosition';

const LikeButton: React.FC = () => {
  const [like, setLike] = useState(0);
  const [on, setOn] = useState(true);
  const positions = useMousePosition();

  useEffect(() => {
    console.log('document is effect');
    document.title = `点击了${like}次`;
  }, [like]);

  console.log('before render');
  return (
    <>
      <h2>
        X: {positions.x}, Y: {positions.y}
      </h2>
      <button
        onClick={() => {
          setLike(like + 1);
        }}
      >
        like 👍
      </button>
      <button
        onClick={() => {
          setOn(!on);
        }}
      >
        {on ? 'On' : 'Off'}
      </button>
    </>
  );
};

export default LikeButton;
