import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
import NavBar from './components/UI/NavBar/NavBar';

function App() {
  return (
    <BrowserRouter basename='/DarkdustrySite'>
      <NavBar />
      <Router />
    </BrowserRouter>
  );
}

export default App;
