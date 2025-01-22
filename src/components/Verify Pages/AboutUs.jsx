import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-blue-200">Learn more about our mission and team</p>
        </div>

        {/* Company Information */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p className="text-lg">
            At ACE NOTO, our mission is to provide comprehensive and accessible study materials to students worldwide. We believe in the power of education and strive to support learners in achieving their academic goals.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;