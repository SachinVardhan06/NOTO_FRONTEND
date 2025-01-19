import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu } from "@headlessui/react";
import { toast } from "react-toastify";
import { 
  FaBook, 
  FaLightbulb, 
  FaUserGraduate, 
  FaClock, 
  FaMobileAlt, 
  FaCheckCircle 
} from 'react-icons/fa';
import NoteCard from "./NotoCard";

function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/homepage");
    toast.success("Logged out successfully!");
  };
  const latestNotes = [
    {
      id: 1,
      title: "Physics Notes - Mechanics",
      description: "Comprehensive study material covering Newton's Laws, Kinematics, and Dynamics",
      subject: "Physics",
      class: "12",
      thumbnail: "https://img.freepik.com/premium-vector/physics-background-with-formulas-symbols_53500-1892.jpg?w=360",
      isFree: true
    },
    {
      id: 2,
      title: "Chemistry - Organic Reactions",
      description: "Detailed notes on reaction mechanisms and organic compounds",
      subject: "Chemistry",
      class: "12",
      thumbnail: "https://img.freepik.com/premium-vector/chemistry-colorful-modern-vector-science-concept-illustration-banner_104589-2057.jpg",
      isFree: false
    },
    {
      id: 3,
      title: "Mathematics - Calculus",
      description: "Complete guide to differentiation and integration",
      subject: "Mathematics",
      class: "12",
      thumbnail: "https://www.raedwaldtrust.com/wp-content/uploads/2020/05/realistic-math-chalkboard-background_23-2148154055.jpg",
      isFree: false
    }
  ];
  const features = [
    {
      title: "Quality Study Materials",
      description: "Access comprehensive notes and study materials crafted by experts",
      icon: FaBook
    },
    {
      title: "Smart Learning",
      description: "Interactive learning experience with practice questions and solutions",
      icon: FaLightbulb
    },
    {
      title: "Expert Guidance",
      description: "Get support from experienced educators and mentors",
      icon: FaUserGraduate
    },
    {
      title: "24/7 Access",
      description: "Study anytime, anywhere with our digital platform",
      icon: FaClock
    },
    {
      title: "Mobile Friendly",
      description: "Seamless experience across all devices",
      icon: FaMobileAlt
    },
    {
      title: "Regular Updates",
      description: "Stay updated with latest study materials and exam patterns",
      icon: FaCheckCircle
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-black to-blue-900">
        {/* Navbar */}
        <nav className="fixed w-full z-50 bg-gradient-to-r from-black to-blue-900 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <Link to="/" className="flex items-center">
                <h1 className="text-2xl font-bold text-white tracking-wider hover:text-blue-200 transition-all duration-300">
                  NOTO
                </h1>
              </Link>

              <div className="hidden md:flex items-center space-x-8">
                <Link
                  to="/"
                  className="text-white hover:text-blue-200 transition-all duration-300"
                >
                  Home
                </Link>
                <Link
                  to="/notes"
                  className="text-white hover:text-blue-200 transition-all duration-300"
                >
                  Notes
                </Link>
                <Link
                  to="/subscription"
                  className="text-white hover:text-blue-200 transition-all duration-300"
                >
                  Subscription
                </Link>
              </div>

              <div className="flex items-center space-x-4">
                {!isLoggedIn ? (
                  <>
                    <Link to="/login">
                      <button className="px-6 py-2 rounded-lg text-white hover:bg-white hover:text-blue-700 transition-all duration-300 border border-white">
                        Login
                      </button>
                    </Link>
                    <Link to="/register">
                      <button className="px-6 py-2 rounded-lg bg-white text-blue-700 hover:bg-blue-700 hover:text-white transition-all duration-300">
                        Register
                      </button>
                    </Link>
                  </>
                ) : (
                  <Menu as="div" className="relative">
                    <Menu.Button className="flex items-center space-x-2">
                      <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                    </Menu.Button>
                    <Menu.Items className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/profile"
                            className={`${
                              active
                                ? "bg-blue-500 text-white"
                                : "text-gray-900"
                            } flex px-4 py-2 text-sm`}
                          >
                            Profile
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={handleLogout}
                            className={`${
                              active
                                ? "bg-blue-500 text-white"
                                : "text-gray-900"
                            } flex w-full px-4 py-2 text-sm`}
                          >
                            Logout
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Menu>
                )}
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pt-32 pb-20 px-4"
        >
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
              <span className="text-gray-200">Your Gateway to </span>
              <span className="text-white">Success!</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Get expertly crafted sample papers and detailed notes to ace your
              exams. Study smarter, not harder!
            </p>
            <div className="flex justify-center space-x-6">
              <Link to="/notes">
                <button className="px-8 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300">
                  Get Started
                </button>
              </Link>
              <Link to="/subscription">
                <button className="px-8 py-3 rounded-lg border border-white text-white hover:bg-white hover:text-blue-700 transition-all duration-300">
                  View Plans
                </button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Features Section */}
        <div className="bg-gray-900 py-20">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg text-white text-center">
              <h3 className="text-xl font-bold mb-4">Expert Notes</h3>
              <p>Comprehensive study materials crafted by subject experts</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-white text-center">
              <h3 className="text-xl font-bold mb-4">Practice Papers</h3>
              <p>Regular updates with latest pattern question papers</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-white text-center">
              <h3 className="text-xl font-bold mb-4">24/7 Support</h3>
              <p>Round-the-clock assistance for your queries</p>
            </div>
          </div>
        </div>
      </div>
      <div>
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Why Choose ACE NOTO?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="p-6 bg-gray-700 rounded-lg">
                <feature.icon className="w-12 h-12 text-blue-500 mb-4"/>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Notes Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Latest Study Materials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {latestNotes.map((note) => (
              <NoteCard key={note.id} note={note} />
            ))}
          </div>
        </div>
      </section>
        <footer className="bg-gradient-to-r from-black to-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* About Section */}
              <div>
                <h3 className="text-xl font-bold mb-4">NOTO</h3>
                <p className="text-gray-300">
                  Your one-stop solution for academic excellence. Get access to
                  quality study materials and notes.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/" className="text-gray-300 hover:text-white">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/notes"
                      className="text-gray-300 hover:text-white"
                    >
                      Notes
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/subscription"
                      className="text-gray-300 hover:text-white"
                    >
                      Subscription
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h3 className="text-xl font-bold mb-4">Support</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <Link to="/contactus" className="text-gray-300 hover:text-white">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/faqs" className="text-gray-300 hover:text-white">
                      FAQs
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Connect */}
              <div>
                <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-300 hover:text-white">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 15.894c-.2.2-.458.3-.717.3s-.517-.1-.717-.3L12 11.434l-4.461 4.46c-.2.2-.458.3-.717.3s-.517-.1-.717-.3c-.4-.4-.4-1.034 0-1.434L10.566 10l-4.46-4.46c-.4-.4-.4-1.034 0-1.434s1.034-.4 1.434 0L12 8.566l4.461-4.46c.4-.4 1.034-.4 1.434 0s.4 1.034 0 1.434L13.434 10l4.46 4.46c.4.4.4 1.034 0 1.434z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-700 mt-8 pt-8 text-center">
              <p className="text-gray-300">
                © {new Date().getFullYear()} NOTO. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default HomePage;
