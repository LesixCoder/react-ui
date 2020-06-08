import React, { useContext, useEffect, useRef, useState } from 'react';
import { ThemeContext } from '../App';

const LikeButton: React.FC = () => {
  const [like, setLike] = useState(0);
  const likeRef = useRef(0);
  const didMountRef = useRef(false);
  const domRef = useRef<HTMLInputElement>(null);
  const theme = useContext(ThemeContext);

  const style = {
    color: theme.color,
    background: theme.background
  };

  useEffect(() => {
    console.log('document is effect');
    document.title = `点击了${like}次`;
  }, [like]);

  useEffect(() => {
    didMountRef.current ? console.log('this is updated') : (didMountRef.current = true);
  });

  useEffect(() => {
    domRef && domRef.current && domRef.current.focus();
  });

  function handleAlertClick() {
    setTimeout(() => {
      alert('you clicked on ' + likeRef.current);
    }, 3000);
  }

  return (
    <>
      <input type="text" ref={domRef} />
      <button
        style={style}
        onClick={() => {
          setLike(like + 1);
          likeRef.current++;
        }}
      >
        like 👍{like}
      </button>
      <button style={style} onClick={handleAlertClick}>
        Alert
      </button>
    </>
  );
};

export default LikeButton;
