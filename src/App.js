import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Authentication (Signin, Forgot)
import Signin from './app/authentication/Signin/Signin';

// Master management
import Admin from './app/layouts/Admin/Admin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/adm/*" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
