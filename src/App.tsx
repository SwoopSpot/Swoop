import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import Login from './Login';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing />}></Route>
      <Route path='/Login' element={<Login />}></Route>
    </Routes>
  );
}

export default App;
