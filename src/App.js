import React from 'react';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      <Dashboard />
       <Routes>
         <Route path="/login" element={<Login />} ></Route>
       </Routes>

    </div>
  );
}

export default App;
