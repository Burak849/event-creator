// app.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Main';
import Login from './pages/Entrance';
import RegisterPage from './pages/Register';
import ProfilePage from './pages/Profile';
import ProfileEditPage from './pages/ProfileEdit';
import DriverPage from './pages/Driver';
import AboutPage from './pages/About';
import UserPage from './pages/UserPage';
import EventPage from './pages/eventPage';
import AdminPage from './pages/AdminPage';
import EventCreatePage from './pages/eventcreatePage';
import AdminProfilPage from './pages/AdminProfil';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get('/api/user'); //burasi users olmasi gerkeiyor olabilir
        setUsers(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    getUsers();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile-edit" element={<ProfileEditPage />} />
        <Route path="/arac-cagir" element={<DriverPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/userpage" element={<UserPage />} />
        <Route path="/adminpage" element={<AdminPage />} />
        <Route path="/adminprofilpage" element={<AdminProfilPage />} />
        <Route path="/eventpage" element={<EventPage />} />
        <Route path="/eventcreatepage" element={<EventCreatePage />} />
        {users.map((user) => (
          <Route key={user._id} path={`/profile/${user._id}`} element={<ProfilePage id={user._id} />} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
