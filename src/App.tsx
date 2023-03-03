import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import Main from './Main';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing />}></Route>
      <Route path='/main' element={<Main />}></Route>
    </Routes>
  );
}

export default App;
