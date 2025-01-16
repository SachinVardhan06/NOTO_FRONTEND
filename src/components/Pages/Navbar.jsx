import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '@headlessui/react';

const Navbar = ({ isLoggedIn, handleLogout }) => {
  return (
    <nav className="fixed w-full z-50 bg-gradient-to-r from-black to-blue-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-white tracking-wider hover:text-blue-200 transition-all duration-300">
              NOTO
            </h1>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-blue-200 transition-all duration-300">
              Home
            </Link>
            <Link to="/notes" className="text-white hover:text-blue-200 transition-all duration-300">
              Notes
            </Link>
            <Link to="/subscription" className="text-white hover:text-blue-200 transition-all duration-300">
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
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </Menu.Button>
                <Menu.Items className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link to="/profile" className={`${active ? "bg-blue-500 text-white" : "text-gray-900"} flex px-4 py-2 text-sm`}>
                        Profile
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button onClick={handleLogout} className={`${active ? "bg-blue-500 text-white" : "text-gray-900"} flex w-full px-4 py-2 text-sm`}>
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
  );
};

export default Navbar;