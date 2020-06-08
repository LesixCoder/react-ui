import React, { useState } from 'react';
import './App.css';
import LikeButton from './components/LikeButton';
import logo from './logo.svg';

interface IShowResult {
  message: string;
  status: string;
}

const DogShow: React.FC<{ data: IShowResult }> = ({ data }) => {
  return (
    <>
      <h2>Dog show: {data.status}</h2>
      <img src={data.message} />
    </>
  );
};

interface IThemeProps {
  [key: string]: { color: string; background: string };
}

const themes: IThemeProps = {
  light: {
    color: '#000',
    background: '#eee'
  },
  dark: {
    color: '#fff',
    background: '#222'
  }
};

export const ThemeContext = React.createContext(themes.light);

function App() {
  const [show, setShow] = useState(true);
  // const positions = useMousePosition();
  // HOC
  // const WrapDogShow = withLoader(DogShow, 'https://dog.ceo/api/breeds/image/random')
  // hooks
  // const [loading, data] = useURLLoader('https://dog.ceo/api/breeds/image/random', [show]);
  // const dogResult = data as IShowResult;

  return (
    <div className="App">
      <ThemeContext.Provider value={themes.dark}>
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
          {/* {loading ? <p>🐶读取中</p> : <img src={dogResult && dogResult.message} />} */}
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
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
