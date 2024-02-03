// import logo from './logo.svg';
import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from 'react';

import Board from './pages/Board/Board';
import Main from './pages/Main/Main';
import Alert from './components/Alert/Alert';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
      setIsOpen(true);
  };

  const closeModal = () => {
      setIsOpen(false);
  };
  
  return (
    <div className="App">
            <div>
                <button onClick={openModal} className='modal-button'>Open Modal</button>
                <Alert isOpen={isOpen} onClose={closeModal} message="welcome to gambit, pick a hero and let's start" />
            </div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}>
            <Route path='/:characterId' element={<Main/>}></Route>
          </Route>
          <Route path='/board/:characterId' element={<Board/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
