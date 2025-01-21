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

        {/* Team Members */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <img src="/images/team1.jpg" alt="Team Member 1" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-blue-200">CEO & Founder</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <img src="/images/team2.jpg" alt="Team Member 2" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p className="text-blue-200">Chief Technology Officer</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <img src="/images/team3.jpg" alt="Team Member 3" className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Emily Johnson</h3>
              <p className="text-blue-200">Head of Marketing</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;