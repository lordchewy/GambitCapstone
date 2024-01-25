import logo from './logo.svg';
import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Board from './routes/Board/Board';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Board/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
