import React from 'react';
import Button, { ButtonSize, ButtonType } from './components/Button/button';

function App() {
  return (
    <div className="App">
        <header className="App-header">
          <p>
            <Button disabled btnType={ButtonType.Danger} size={ButtonSize.Large}>123</Button>
            <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>456</Button>
            <Button btnType={ButtonType.Link} href="www.baidu.com" size={ButtonSize.Mini}>789</Button>
          </p>
        </header>
    </div>
  );
}

export default App;
