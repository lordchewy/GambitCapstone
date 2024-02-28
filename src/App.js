// import logo from './logo.svg';
import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import { useState } from 'react';

import Board from './pages/Board/Board';
import Main from './pages/Main/Main';
import Test from './pages/Test/Test'
import Deck from './pages/Deck/Deck'
// import Alert from './components/Alert/Alert';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}>
            <Route path='/:characterId' element={<Main/>}></Route>
          </Route>
          <Route path='/deck' element={<Deck/>}></Route>
          <Route path='/board/:characterId' element={<Board/>}></Route>
          <Route path='/test' element={<Test/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
