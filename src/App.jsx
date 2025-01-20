import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Subscription from './components/Subscription/Subscription';
import HomePage from './components/Pages/HomePage';
import Profile from './components/Auth/Profile';
import Notes from './components/Pages/Notes';
import FAQs from './components/Pages/FAQs';
import ContactUs from './components/Pages/ContactUs';

const App = () => (
  <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path="/subscription" element={<Subscription />} />
    <Route path="/homepage" element={<HomePage/>} />
    <Route path="/profile" element={<Profile />} />
    <Route path='/notes' element={<Notes />} />
    <Route path='/faqs' element={<FAQs />} />
    <Route path='/contactus' element={<ContactUs />} />
  </Routes>
);

export default App;