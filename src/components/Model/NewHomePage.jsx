import React, { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaBook, FaLightbulb, FaUserGraduate } from 'react-icons/fa';

const NewHomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const features = [
    { title: 'Quality Notes', icon: FaBook, description: 'Expert-crafted study materials' },
    { title: 'Smart Learning', icon: FaLightbulb, description: 'Interactive learning experience' },
    { title: 'Expert Guidance', icon: FaUserGraduate, description: '24/7 mentor support' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold text-white mb-6">Welcome to ACE NOTO</h1>
          <p className="text-xl text-gray-300 mb-8">Your Ultimate Study Companion</p>
          <button
            onClick={() => setIsOpen(true)}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Get Started
          </button>
        </motion.div>
      </section>

      {/* Modal */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-800 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="h3" className="text-xl font-bold text-white mb-4">
                    Choose Your Path
                  </Dialog.Title>
                  <div className="space-y-4">
                    <Link 
                      to="/login"
                      className="block w-full p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-center"
                    >
                      Login
                    </Link>
                    <Link 
                      to="/register"
                      className="block w-full p-4 bg-transparent border border-blue-600 text-white rounded-lg hover:bg-blue-600/10 transition text-center"
                    >
                      Register
                    </Link>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-800/50 p-6 rounded-lg text-center"
            >
              <feature.icon className="w-12 h-12 mx-auto text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default NewHomePage;