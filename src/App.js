import React from 'react';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllLeads from './components/AllLeads';

function App() {
  
  return (
    <div >
       <Routes>
       <Route path="/" element={<Dashboard />} ></Route>
         <Route path="/login" element={<Login />} ></Route>
         <Route path="/AllLeads" element={<AllLeads />} ></Route>

       </Routes>

    </div>
  );
}

export default App;
