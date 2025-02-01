import { Routes, Route } from 'react-router-dom';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Subscription from './components/Subscription/Subscription';
import HomePage from './components/Pages/HomePage';
import Profile from './components/Auth/Profile';
import Notes from './components/Pages/Notes';
import FAQs from './components/Pages/FAQs';
import ContactUs from './components/Pages/ContactUs';
import AboutUs from './components/Verify Pages/AboutUs';
import PrivacyPolicy from './components/Verify Pages/PrivacyPolicy';
import TandQ from './components/Verify Pages/T&Q';
import RefundPolicy from './components/Verify Pages/RefundPolicy';
import ForgetPass from './components/Auth/ForgetPass';
import Newpage from './components/Pages/newpage';

const App = () => (
  <Routes>
    <Route path="/" element={<Newpage/>} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path="/subscription" element={<Subscription />} />
    <Route path="/homepage" element={<Newpage/>} />
    <Route path="/profile" element={<Profile />} />
    <Route path='/resources' element={<Notes />} />
    <Route path='/faqs' element={<FAQs />} />
    <Route path='/contact' element={<ContactUs />} />
    <Route path='/aboutus' element={<AboutUs />} />
    <Route path='/privacy-policy' element={<PrivacyPolicy />} />
    <Route path='/terms-& conditions' element={<TandQ />} />
    <Route path='/refund-policy' element={<RefundPolicy />} />
    <Route path='/forgot-password' element={<ForgetPass />} />
    <Route path='/newpage' element={<Newpage/>} />
    <Route path='/notes' element={<Notes />} />
  </Routes>
);

export default App;