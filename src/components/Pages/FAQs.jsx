import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const faqs = [
  {
    question: "What is NOTO?",
    answer: "NOTO is a comprehensive study portal designed to help students access educational resources, notes, and study materials efficiently."
  },
  {
    question: "How do I access the study materials?",
    answer: "After subscribing to our platform, you can access all study materials through your dashboard. Simply log in and navigate to the resources section."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept various payment methods including credit/debit cards, UPI, and net banking through our secure payment gateway."
  },
  {
    question: "Can I cancel my subscription?",
    answer: "Yes, you can cancel your subscription at any time. The access will continue until the end of your billing period."
  },
  {
    question: "How often is the content updated?",
    answer: "Our content is regularly updated to ensure you have access to the latest study materials and resources."
  }
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700">
      <button
        className="w-full py-6 text-left flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-white">{question}</span>
        {isOpen ? (
          <FiChevronUp className="w-6 h-6 text-blue-500" />
        ) : (
          <FiChevronDown className="w-6 h-6 text-blue-500" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-400">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

function FAQs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-400">
            Find answers to common questions about NOTO
          </p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Still have questions?{" "}
            <a href="/contact" className="text-blue-500 hover:text-blue-400">
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQs;