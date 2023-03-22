import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import Main from './Main';
import Account from './Account';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing />}></Route>
      <Route path='/main' element={<Main />}></Route>
      <Route path='/account' element={<Account />}></Route>

    </Routes>
  );
}

export default App;
