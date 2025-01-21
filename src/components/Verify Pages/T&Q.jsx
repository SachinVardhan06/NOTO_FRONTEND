import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700">
      <button
        className="w-full text-left py-4 px-6 flex justify-between items-center hover:bg-gray-800 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold">{question}</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isOpen && (
        <div className="p-6 bg-gray-800">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const TandQ = () => {
  const faqs = [
    {
      question: "How do I access my subscription content?",
      answer: "After purchasing a subscription, you can access all content by logging into your account. Premium content will be automatically unlocked."
    },
    {
      question: "Can I share my account with others?",
      answer: "No, sharing accounts is not permitted. Each subscription is for individual use only."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept major credit cards, debit cards, and UPI payments."
    },
    {
      question: "How can I cancel my subscription?",
      answer: "You can cancel your subscription anytime from your account settings. Note that refunds are not provided for cancellations."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Terms & FAQ</h1>
          <p className="text-blue-200">Everything you need to know about our service</p>
        </header>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-blue-300">Terms of Service</h2>
          <div className="bg-gray-800 p-6 rounded-lg">
            <p className="mb-4">By using our service, you agree to the following terms:</p>
            <ul className="list-disc list-inside space-y-3">
              <li>All content is for personal use only</li>
              <li>Account sharing is strictly prohibited</li>
              <li>Subscriptions are non-transferable</li>
              <li>We reserve the right to terminate accounts for violations</li>
            </ul>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-blue-300">Frequently Asked Questions</h2>
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            {faqs.map((faq, index) => (
              <FAQ key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-blue-300">Content Usage Guidelines</h2>
          <div className="bg-gray-800 p-6 rounded-lg">
            <ul className="list-disc list-inside space-y-3">
              <li>Do not reproduce or distribute content</li>
              <li>Do not modify or create derivative works</li>
              <li>Maintain copyright notices on all materials</li>
              <li>Report any unauthorized usage</li>
            </ul>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-blue-300">Contact Support</h2>
          <div className="bg-gray-800 p-6 rounded-lg">
            <p className="mb-4">Need help? Contact our support team:</p>
            <div className="space-y-2">
              <p>Email: <a href="mailto:ace.noto.study@gmail.com" className="text-blue-400 hover:text-blue-300">ace.noto.study@gmail.com</a></p>
              <p>Hours: Monday - Friday, 9:00 AM - 6:00 PM IST</p>
            </div>
          </div>
        </section>

        <footer className="text-center text-sm text-gray-400 mt-12">
          <p>© 2025 ACE NOTO. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default TandQ;