import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-blue-200">Last updated: January 2025</p>
        </header>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-blue-300">Introduction</h2>
          <p className="leading-relaxed">
            ACE NOTO ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our service.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-blue-300">Information We Collect</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>Account information (name, email, educational details)</li>
            <li>Usage data (study patterns, progress tracking)</li>
            <li>Device information (browser type, IP address)</li>
            <li>Payment information (processed securely through third-party providers)</li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-blue-300">How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>Provide and maintain our service</li>
            <li>Personalize your learning experience</li>
            <li>Process your transactions</li>
            <li>Send you updates and notifications</li>
            <li>Improve our services</li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-blue-300">Data Security</h2>
          <p className="leading-relaxed">
            We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-blue-300">Your Rights</h2>
          <ul className="list-disc list-inside space-y-3">
            <li>Access your personal data</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of marketing communications</li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-blue-300">Contact Us</h2>
          <p className="leading-relaxed">
            If you have questions about this Privacy Policy, please contact us at:
            <br />
            <a href="mailto:ace.noto.study@gmail.com" className="text-blue-400 hover:text-blue-300">
              ace.noto.study@gmail.com
            </a>
          </p>
        </section>

        <footer className="text-center text-sm text-gray-400 mt-12">
          <p>© 2025 ACE NOTO. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;