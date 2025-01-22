import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Refund Policy</h1>
          <p className="text-red-400 text-xl font-semibold">NO REFUNDS ALLOWED</p>
          <p className="text-blue-200 mt-2">Last updated: January 2025</p>
        </header>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-red-400">Important Notice</h2>
          <div className="bg-gray-800 border-2 border-red-500 p-6 rounded-lg">
            <p className="text-lg mb-4">
              All purchases are final and non-refundable. Please read our terms carefully before making a purchase.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-blue-300">Subscription Terms</h2>
          <div className="bg-gray-800 p-6 rounded-lg">
            <ul className="list-disc list-inside space-y-3">
              <li>Subscriptions are non-refundable and non-transferable</li>
              <li>Access is granted immediately upon purchase</li>
              <li>No trial period is available</li>
              <li>Subscription can be cancelled anytime but no refund will be provided</li>
            </ul>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-blue-300">Contact Support</h2>
          <div className="bg-gray-800 p-6 rounded-lg">
            <p className="mb-4">For any questions about our no-refund policy:</p>
            <div className="space-y-2">
              <p>Email: <a href="mailto:support@acenoto.com" className="text-blue-400 hover:text-blue-300">ace.noto.study@gmail.com</a></p>
              <p>Phone: +91 8791480104</p>
              <p>Hours: Monday - Friday, 9:00 AM - 6:00 PM IST</p>
            </div>
          </div>
        </section>

        <footer className="text-center text-sm text-gray-400 mt-12 pb-6">
          <p className="text-red-400 font-semibold mb-2">ALL SALES ARE FINAL</p>
          <p>© 2025 ACE NOTO. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default RefundPolicy;