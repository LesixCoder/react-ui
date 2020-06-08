import React, { useState } from 'react';
import './App.css';
import LikeButton from './components/LikeButton';
import useMousePosition from './hooks/useMousePosition';
import logo from './logo.svg';

interface IShowResult {
  message: string
  status: string
}

const DogShow: React.FC<{data: IShowResult}> = ({data}) => {
  return (
    <>
      <h2>Dog show: {data.status}</h2>
      <img src={data.message} />
    </>
  )
}

function App() {
  const [show, setShow] = useState(true);
  const positions = useMousePosition();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <button
            onClick={() => {
              setShow(!show);
            }}
          >
            toggle tracker
          </button>
        </p>
        {/* {show && <MouseTracker />} */}
        <p>
          X: {positions.x}, Y: {positions.y}
        </p>
        <LikeButton />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
