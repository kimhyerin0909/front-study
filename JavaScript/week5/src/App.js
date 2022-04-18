/* eslint-disable */

import './App.css';
import Header from './components/Header';
import Sns from './components/Sns';
import Abouts from './components/Abouts';
import Icons from './components/Icons';

function App() {
  return (
    <div className="App">
      <div className='content'>
        <div className='profile'>
          <img src="./myface.jpg" />
          <Header />
          <Sns />
          <Abouts />
          <Icons />
        </div>
      </div>
    </div>
  );
}

export default App;
