// import React from 'react';

// const RefundPolicy = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white py-12 px-4">
//       <div className="max-w-4xl mx-auto space-y-8">
//         <header className="text-center mb-12">
//           <h1 className="text-4xl font-bold mb-4">Refund Policy</h1>
//           <p className="text-red-400 text-xl font-semibold">NO REFUNDS ALLOWED</p>
//           <p className="text-blue-200 mt-2">Last updated: January 2025</p>
//         </header>

//         <section className="space-y-6">
//           <h2 className="text-2xl font-semibold text-red-400">Important Notice</h2>
//           <div className="bg-gray-800 border-2 border-red-500 p-6 rounded-lg">
//             <p className="text-lg mb-4">
//               All purchases are final and non-refundable. Please read our terms carefully before making a purchase.
//             </p>
//           </div>
//         </section>

//         <section className="space-y-6">
//           <h2 className="text-2xl font-semibold text-blue-300">Subscription Terms</h2>
//           <div className="bg-gray-800 p-6 rounded-lg">
//             <ul className="list-disc list-inside space-y-3">
//               <li>Subscriptions are non-refundable and non-transferable</li>
//               <li>Access is granted immediately upon purchase</li>
//               <li>No trial period is available</li>
//               <li>Subscription can be cancelled anytime but no refund will be provided</li>
//             </ul>
//           </div>
//         </section>

//         <section className="space-y-6">
//           <h2 className="text-2xl font-semibold text-blue-300">Contact Support</h2>
//           <div className="bg-gray-800 p-6 rounded-lg">
//             <p className="mb-4">For any questions about our no-refund policy:</p>
//             <div className="space-y-2">
//               <p>Email: <a href="mailto:support@acenoto.com" className="text-blue-400 hover:text-blue-300">ace.noto.study@gmail.com</a></p>
//               <p>Phone: +91 8791480104</p>
//               <p>Hours: Monday - Friday, 9:00 AM - 6:00 PM IST</p>
//             </div>
//           </div>
//         </section>

//         <footer className="text-center text-sm text-gray-400 mt-12 pb-6">
//           <p className="text-red-400 font-semibold mb-2">ALL SALES ARE FINAL</p>
//           <p>© 2025 ACE NOTO. All rights reserved.</p>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default RefundPolicy;


import React from 'react';
import { FiAlertTriangle, FiMail, FiPhone, FiClock, FiXCircle } from 'react-icons/fi';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-10">
        <header className="text-center mb-12 animate-fade-in-up">
          <div className="mb-6 inline-block bg-red-500/20 p-4 rounded-full">
            <FiXCircle className="text-red-400 w-12 h-12 mx-auto animate-pulse" />
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-400 to-blue-300 bg-clip-text text-transparent">
            Refund Policy
          </h1>
          <div className="flex items-center justify-center gap-2 text-red-400 text-xl font-semibold">
            <FiAlertTriangle className="shrink-0" />
            <p>NO REFUNDS ALLOWED</p>
          </div>
          <p className="text-blue-200 mt-3 text-sm font-light">Last updated: January 2025</p>
        </header>

        <section className="space-y-8 animate-slide-in-left">
          <h2 className="text-3xl font-bold text-red-400 flex items-center gap-2">
            <FiAlertTriangle className="shrink-0" />
            Important Notice
          </h2>
          <div className="bg-gray-800/50 border-l-4 border-red-500 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow">
            <p className="text-lg leading-relaxed">
              All purchases are final and non-refundable. Please read our terms carefully before making a purchase.
            </p>
          </div>
        </section>

        <section className="space-y-8 animate-slide-in-right">
          <h2 className="text-3xl font-bold text-blue-300 flex items-center gap-2">
            <FiAlertTriangle className="shrink-0" />
            Subscription Terms
          </h2>
          <div className="bg-gray-800/50 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow">
            <ul className="space-y-4">
              {[
                "Subscriptions are non-refundable and non-transferable",
                "Access is granted immediately upon purchase",
                "No trial period is available",
                "Subscription can be cancelled anytime but no refund will be provided"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-lg">
                  <span className="text-red-400 mt-1 shrink-0">✖</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="space-y-8 animate-slide-in-left">
          <h2 className="text-3xl font-bold text-blue-300 flex items-center gap-2">
            <FiAlertTriangle className="shrink-0" />
            Contact Support
          </h2>
          <div className="bg-gray-800/50 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow">
            <div className="space-y-5 text-lg">
              <div className="flex items-center gap-3">
                <FiMail className="text-blue-400 shrink-0" />
                <a href="mailto:support@acenoto.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                  ace.noto.study@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FiPhone className="text-blue-400 shrink-0" />
                <span>+91 8791480104</span>
              </div>
              <div className="flex items-center gap-3">
                <FiClock className="text-blue-400 shrink-0" />
                <span>Monday - Friday, 9:00 AM - 6:00 PM IST</span>
              </div>
            </div>
          </div>
        </section>

        <footer className="text-center text-sm text-gray-400 mt-16 animate-fade-in">
          <div className="border-t border-gray-700 pt-8">
            <p className="text-red-400 font-semibold mb-2 flex items-center justify-center gap-2">
              <FiXCircle />
              ALL SALES ARE FINAL
            </p>
            <p>© 2025 ACE NOTO. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default RefundPolicy;