import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu } from "@headlessui/react";
import { toast } from "react-toastify";
import { Toaster } from "react-hot-toast";
import AIQuestionGenerator from "../AiPaperGenerator/Generator";

import {
  FaBook,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLightbulb,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
  FaUserGraduate,
  FaYoutube,
  FaClock,
  FaMobileAlt,
  FaCheckCircle,
} from "react-icons/fa";
import NoteCard from "./NotoCard";
import { useScroll, useSpring } from "framer-motion";
import MarqueeText from "../New Comp/InfiniteScroll";

const GradientBackground = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute w-[800px] h-[800px] -top-48 -left-48 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl opacity-30" />
    <div className="absolute w-[600px] h-[600px] -top-32 -right-64 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl opacity-30" />
  </div>
);

function Newpage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { scrollYProgress } = useScroll();
  const navigate = useNavigate();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

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

  const handleNavigation = (path) => {
    try {
      console.log("Attempting navigation to:", path);
      navigate(path);
      // Add success toast
      toast.success("Loading exam section...", {
        duration: 2000,
        position: "top-center",
      });
    } catch (error) {
      console.error("Navigation error:", error);
      // Add error toast
      toast.error("Failed to load exam section. Please try again.");
    }
  };
  // Update the sections array
  const sections = [
    {
      id: 1,
      title: "GATE CS & IT",
      subtitle: "Computer Science & Information Technology",
      description:
        "Master core CS concepts, algorithms, and programming fundamentals",
      features: ["Data Structures", "Algorithms", "Operating Systems", "DBMS"],
      gradient: "from-blue-600 to-purple-600",
      path: "/gateexam", // Changed from /gate-exam
    },
    {
      id: 2,
      title: "GATE Analytics",
      subtitle: "Data Analytics & Machine Learning",
      description: "Explore the world of data science and advanced analytics",
      features: ["Machine Learning", "Data Mining", "Statistics", "Python"],
      gradient: "from-emerald-600 to-teal-600",
      path: "/gateexam", // Changed from /gate-da
    },
  ];

  const latestNotes = [
    {
      id: 1,
      title: "Physics Notes - Mechanics",
      description:
        "Comprehensive study material covering Newton's Laws, Kinematics, and Dynamics",
      subject: "Physics",
      class: "12",
      thumbnail:
        "https://img.freepik.com/premium-vector/physics-background-with-formulas-symbols_53500-1892.jpg?w=360",
      isFree: true,
    },
    {
      id: 2,
      title: "Chemistry - Organic Reactions",
      description:
        "Detailed notes on reaction mechanisms and organic compounds",
      subject: "Chemistry",
      class: "12",
      thumbnail:
        "https://img.freepik.com/premium-vector/chemistry-colorful-modern-vector-science-concept-illustration-banner_104589-2057.jpg",
      isFree: false,
    },
    {
      id: 3,
      title: "Mathematics - Calculus",
      description: "Complete guide to differentiation and integration",
      subject: "Mathematics",
      class: "12",
      thumbnail:
        "https://www.raedwaldtrust.com/wp-content/uploads/2020/05/realistic-math-chalkboard-background_23-2148154055.jpg",
      isFree: false,
    },
  ];
  const features = [
    {
      title: "Quality Study Materials",
      description:
        "Access comprehensive notes and study materials crafted by experts",
      icon: FaBook,
    },
    {
      title: "Smart Learning",
      description:
        "Interactive learning experience with practice questions and solutions",
      icon: FaLightbulb,
    },
    {
      title: "Expert Guidance",
      description: "Get support from experienced educators and mentors",
      icon: FaUserGraduate,
    },
    {
      title: "24/7 Access",
      description: "Study anytime, anywhere with our digital platform",
      icon: FaClock,
    },
    {
      title: "Mobile Friendly",
      description: "Seamless experience across all devices",
      icon: FaMobileAlt,
    },
    {
      title: "Regular Updates",
      description: "Stay updated with latest study materials and exam patterns",
      icon: FaCheckCircle,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 relative overflow-hidden">
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          duration: 3000,
          style: {
            background: "#1f2937",
            color: "#fff",
            border: "1px solid #374151",
          },
        }}
      />
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Animated Background Elements */}
      <GradientBackground />
      <div className="bg-gradient-to-br from-gray-900 to-blue-900">
        <MarqueeText
          text="🚀 GATE DA 2025 Model Paper Available! 🎯"
          className="font-medium text-lg"
        />
      </div>

      {/* Modern Glass Navbar */}
      <nav className="fixed w-full z-40 bg-gray-900/80 backdrop-blur-xl border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                NOTO
              </span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                to="/notes"
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              >
                Notes
              </Link>
              <Link
                to="/subscription"
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              >
                Pricing
              </Link>
              <Link
                to="/notes"
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              >
                Resources
              </Link>
              <Link
                to="/gateexam"
                className="text-gray-300 hover:text-green-400"
              >
                GATE Mock Test
              </Link>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center gap-4">
              {!isLoggedIn ? (
                <>
                  <Link
                    to="/login"
                    className="px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white transition-colors"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 transition-opacity text-sm font-medium"
                  >
                    Get Started
                  </Link>
                </>
              ) : (
                <Menu as="div" className="relative">
                  <Menu.Button className="flex items-center gap-2">
                    <FaUserGraduate className="w-5 h-5 text-gray-300" />
                    <span className="text-sm font-medium text-gray-300">
                      Profile
                    </span>
                  </Menu.Button>
                  <Menu.Items className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/profile"
                          className={`block px-4 py-2 text-sm text-gray-300 ${
                            active ? "bg-gray-700" : ""
                          }`}
                        >
                          My Profile
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={handleLogout}
                          className={`block w-full text-left px-4 py-2 text-sm text-gray-300 ${
                            active ? "bg-gray-700" : ""
                          }`}
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
      <section className="relative pt-40 pb-28 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 leading-tight"
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
              Smarter Learning,
            </span>
            <br />
            <span className="text-gray-100">Brighter Future</span>
          </motion.h1>

          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            AI-powered study materials and expert-curated resources to transform
            your academic performance.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              to="/notes"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 transition-opacity"
            >
              Get Started
            </Link>
            <Link to="/subscription">
              <button className="px-8 py-4 rounded-xl border border-gray-700 text-gray-300 hover:border-gray-600 hover:text-white transition-colors">
                Subscription
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gray-900/30 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Why learners choose NOTO
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-gray-800/20 rounded-2xl border border-gray-800 hover:border-blue-500/30 transition-colors"
              >
                <feature.icon className="w-8 h-8 text-blue-400 mb-6" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gray-900/30 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
              Straightforward Pricing
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm">
              Choose the perfect plan for your educational needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-8 bg-gray-800/20 rounded-2xl border border-gray-800 relative"
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white">Basic</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white">₹49</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-gray-300">
                    <FaCheckCircle className="text-green-400 flex-shrink-0" />
                    <span className="text-sm">Unlimited premium notes</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <FaCheckCircle className="text-green-400 flex-shrink-0" />
                    <span className="text-sm">Unlimited downloads</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <FaCheckCircle className="text-green-400 flex-shrink-0" />
                    <span className="text-sm">Email support</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Premium Plan */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative p-8 bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl border border-blue-500/30"
            >
              <div className="absolute top-4 right-4 bg-blue-500 text-xs px-3 py-1 rounded-full">
                Most Popular
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white">Premium</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white">₹499</span>
                  <span className="text-gray-400">/year</span>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-gray-300">
                    <FaCheckCircle className="text-purple-400 flex-shrink-0" />
                    <span className="text-sm">Unlimited premium notes</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <FaCheckCircle className="text-purple-400 flex-shrink-0" />
                    <span className="text-sm">Unlimited downloads</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <FaCheckCircle className="text-purple-400 flex-shrink-0" />
                    <span className="text-sm">Priority support</span>
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <FaCheckCircle className="text-purple-400 flex-shrink-0" />
                    <span className="text-sm">Exclusive webinars</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          <p className="text-center text-gray-400 text-sm mt-8">
            No Refund Policy. All sales are final.
          </p>
        </div>
      </section>
      <section className="py-24 bg-gray-900/30 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
              Practice GATE Mock Tests
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm">
              Prepare for GATE with our comprehensive test series
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-gray-800/20 rounded-2xl border border-gray-800 hover:border-green-500/30 transition-all"
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                Full Length Tests
              </h3>
              <ul className="space-y-3 text-gray-300 text-sm mb-6">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400" />
                  1-hour complete mock tests
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400" />
                  GATE pattern questions
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-400" />
                  Detailed solutions
                </li>
              </ul>
              <Link
                to="/gateexam"
                className="inline-block px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover:opacity-90 transition-opacity text-sm font-medium"
              >
                Start Test
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-gray-800/20 rounded-2xl border border-gray-800 hover:border-blue-500/30 transition-all"
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                Subject Wise Tests
              </h3>
              <ul className="space-y-3 text-gray-300 text-sm mb-6">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-blue-400" />
                  Topic-focused practice
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-blue-400" />
                  Concept-based questions
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-blue-400" />
                  Video explanations
                </li>
              </ul>
              <button
                onClick={() =>
                  toast("Subject-wise practice coming soon!", {
                    icon: "🔜",
                    style: {
                      borderRadius: "10px",
                      background: "#1f2937",
                      color: "#fff",
                      border: "1px solid #374151",
                    },
                  })
                }
                className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg hover:opacity-90 transition-opacity text-sm font-medium"
              >
                Practice Now
              </button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-gray-800/20 rounded-2xl border border-gray-800 hover:border-purple-500/30 transition-all"
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                Previous Year Papers
              </h3>
              <ul className="space-y-3 text-gray-300 text-sm mb-6">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-purple-400" />
                  Last 10 years papers
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-purple-400" />
                  Detailed solutions
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-purple-400" />
                  Trend analysis
                </li>
              </ul>
              <button
                onClick={() =>
                  toast("Coming soon!", {
                    icon: "🔜",
                    style: {
                      borderRadius: "10px",
                      background: "#1f2937",
                      color: "#fff",
                      border: "1px solid #374151",
                    },
                  })
                }
                className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg hover:opacity-90 transition-opacity text-sm font-medium"
              >
                Solve Papers
              </button>
            </motion.div>
          </div>
        </div>
      </section>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-4"
          >
            GATE 2025 Sections
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 text-center mb-12"
          >
            Choose your path and begin your preparation journey
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${section.gradient} p-1`}
              >
                <div className="bg-gray-900/90 rounded-xl p-8 h-full backdrop-blur-sm">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br opacity-10" />

                  <h2 className="text-3xl font-bold text-white mb-2">
                    {section.title}
                  </h2>
                  <p className="text-lg text-gray-300 mb-4">
                    {section.subtitle}
                  </p>
                  <p className="text-gray-400 mb-6">{section.description}</p>

                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {section.features.map((feature, i) => (
                      <div
                        key={i}
                        className="bg-white/10 rounded-lg px-4 py-2 text-sm text-gray-300"
                      >
                        {feature}
                      </div>
                    ))}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleNavigation(section.path)}
                    className="w-full py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                  >
                    <span>Start {section.title}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <section className="py-24 bg-gray-900/30 backdrop-blur-lg">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
        AI-Powered Practice
      </h2>
      <p className="text-gray-400 max-w-xl mx-auto text-sm">
        Generate custom practice questions using our advanced AI system
      </p>
    </div>
    <AIQuestionGenerator />
  </div>
</section>

      {/* Footer */}
      <div className="relative overflow-hidden">
        {/* Feature Section */}

        {/* Latest Notes Section */}
        <section className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Latest Study Materials
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto">
                Explore recently added expert-curated resources
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {latestNotes.map((note) => (
                <motion.div
                  key={note.id}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <NoteCard
                    note={note}
                    className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-blue-500/30"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900/80 backdrop-blur-lg border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
                  ACE NOTO
                </h3>
                <p className="text-gray-400 text-sm">
                  Empowering education through digital learning solutions.
                </p>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center gap-2 text-gray-300">
                    <FaPhone className="text-blue-400" /> +91 8791480104
                  </p>
                  <p className="flex items-center gap-2 text-gray-300">
                    <FaEnvelope className="text-purple-400" />{" "}
                    ace.noto.study@gmail.com
                  </p>
                  <p className="flex items-center gap-2 text-gray-300">
                    <FaMapMarkerAlt className="text-green-400" /> Noida, India
                  </p>
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  {["About Us", "Resources", "Subscription", "Contact"].map(
                    (link) => (
                      <li key={link}>
                        <Link
                          to={`/${link.toLowerCase().replace(" ", "")}`}
                          className="text-gray-400 hover:text-white transition-colors text-sm"
                        >
                          {link}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Legal */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Legal</h3>
                <ul className="space-y-3">
                  {[
                    "Privacy Policy",
                    "Terms & Conditions",
                    "Refund Policy",
                  ].map((link) => (
                    <li key={link}>
                      <Link
                        to={`/${link.toLowerCase().replace(" ", "-")}`}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social & Newsletter */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Connect With Us
                  </h3>
                  <div className="flex gap-4">
                    {[FaFacebook, FaTwitter, FaInstagram, FaYoutube].map(
                      (Icon, index) => (
                        <a
                          key={index}
                          href="#"
                          className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors text-gray-300 hover:text-white"
                        >
                          <Icon size={20} />
                        </a>
                      )
                    )}
                  </div>
                </div>

                <form className="space-y-4">
                  <label className="block text-sm font-medium text-gray-300">
                    Subscribe to Newsletter
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-2.5 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 text-white text-sm"
                    />
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 transition-opacity text-sm"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-800 mt-12 pt-8 text-center">
              <p className="text-gray-400 text-sm">
                © 2025 ACE NOTO. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Newpage;
