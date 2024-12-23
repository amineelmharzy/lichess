import { Route, Routes } from 'react-router-dom';
import './App.css'
import Login from './components/Login'
import Register from './components/Register';
import Header from './components/Header';
import Game from './components/Game';

function App() {
  return (
    <>
      <Header />
      <Game />
      {/* <Board /> */}
    </>
    // <Board />
    // <Routes>
    //   <Route path="/" element={<Login />} />
    //   <Route path="/register" element={<Register />} />
    // </Routes>
    // <Login />
    // <Register />
  );
}

export default App
