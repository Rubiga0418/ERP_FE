import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Authentication (Signin, Forgot)
import Signin from './app/authentication/Signin/Signin';

// Master management
import Admin from './app/layouts/Admin/Admin';

// Staff management
import Staff from './app/layouts/Staff/Staff';

// Student management
import Student from './app/layouts/Student/Student'

function App() { 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/adm/*" element={<Admin />} />
        <Route path="/staff/*" element={<Staff />} />
        <Route path="/student/*" element={<Student />} />
      </Routes>
    </Router>
  );
}

export default App;
