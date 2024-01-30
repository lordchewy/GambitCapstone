// import logo from './logo.svg';
import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Board from './pages/Board/Board';
import Main from './pages/Main/Main';

function App() {
  return (
    <div className="App">
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
