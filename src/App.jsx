import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/Pages/HomePage';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Subscription from './components/Pages/Subscription';
import Profile from './components/Pages/Profile';
import Notes from './components/Pages/Notes';
import FAQs from './components/Pages/FAQs';
import ContactUs from './components/Pages/ContactUs';
import AboutUs from './components/Pages/AboutUs';
import PrivacyPolicy from './components/Verify Pages/PrivacyPolicy';
import TandQ from './components/Verify Pages/T&Q';
import RefundPolicy from './components/Verify Pages/RefundPolicy';
import ForgetPass from './components/Auth/ForgetPass';

const App = () => (
  <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path="/subscription" element={<Subscription />} />
    <Route path="/homepage" element={<HomePage/>} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/notes" element={<Notes />} />
    <Route path="/faqs" element={<FAQs />} />
    <Route path="/contactus" element={<ContactUs />} />
    <Route path="/about" element={<AboutUs />} />
    <Route path="/privacy" element={<PrivacyPolicy />} />
    <Route path="/terms" element={<TandQ />} />
    <Route path="/refund" element={<RefundPolicy />} />
    <Route path="/forgot-password" element={<ForgetPass />} />
  </Routes>
);

export default App;