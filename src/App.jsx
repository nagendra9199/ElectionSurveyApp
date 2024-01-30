import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import HomePage from './components/HomePage/home';
import Dashboard from './components/Dashboard/dashboard';
import Users from './components/UsersPage/users';
import Allocatedbooths from './components/Allocatedbooths/allocated';
import Reports from './components/Reports/reports';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="dashboard/users" element={<Users />} />
          <Route path='dashboard/allocated' element={<Allocatedbooths/>}/>
          <Route path='dashboard/reports' element={<Reports/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
