import { Route, Routes } from 'react-router-dom';
import './App.css'
import Login from './components/Login'
import Register from './components/Register';
import Header from './components/Header';
import Playground from './components/Playground';
import ModeSelect from './components/ModeSelect';

function App() {
  return (
    <>
      <Header />
      <Playground />
    </>
  );
}

export default App
