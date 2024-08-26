import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import BusinessForm from './components/BusinessForm';
import CreatorForm from './components/CreatorForm';
import BusinessDetails from './components/BusinessDetails';
import CreatorDetails from './components/CreatorDetails';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Register from './components/Register';
import Protected from './components/Protected';
import YourProfile from './components/yourprofile'

const RoutesComponent = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  const handleLogout = () => {
    setToken('');
    localStorage.removeItem('token');
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBar token={token} onLogout={handleLogout} />
        <main className="flex-grow ">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/business-form" element={<BusinessForm onSubmit={(data) => console.log(data)} />} />
            <Route path="/creator-form" element={<CreatorForm onSubmit={(data) => console.log(data)} />} />
            <Route path="/business-details" element={<BusinessDetails />} />
            <Route path="/creator-details" element={<CreatorDetails />} />
            <Route path="/your-profile" element={<YourProfile />} />
            <Route path="/login" element={<Login setToken={setToken} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/protected" element={token ? <Protected token={token} /> : <Login setToken={setToken} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default RoutesComponent;
