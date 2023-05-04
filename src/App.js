import React from 'react';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllLeads from './components/AllLeads';
import ImportList from './components/ImportList';

function App() {
  
  return (
    <div >
       <Routes>
       <Route path="/" element={<Dashboard />} ></Route>
         <Route path="/login" element={<Login />} ></Route>
         <Route path="/AllLeads" element={<AllLeads />} ></Route>
         <Route path="/ImportList" element={<ImportList />} ></Route>

       </Routes>

    </div>
  );
}

export default App;
