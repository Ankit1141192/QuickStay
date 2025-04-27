import React from 'react';

const SafetyInformation = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 mt-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-playfair text-4xl md:text-5xl mb-2">Stayver Safety Information</h1>
          <p className="text-gray-600 text-lg">
            Your safety is our highest priority. Learn how Stayver ensures a secure and comfortable experience.
          </p>
        </div>

        {/* Safety Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Health and Safety */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Health & Safety Measures</h2>
            <ul className="space-y-4 list-disc list-inside">
              <li className="text-gray-600">Regular sanitization of hotel premises and guest rooms.</li>
              <li className="text-gray-600">Contactless check-in and check-out options available.</li>
              <li className="text-gray-600">Mandatory temperature checks for guests and staff.</li>
            </ul>
          </div>

          {/* Emergency Assistance */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Emergency Assistance</h2>
            <p className="text-gray-600 mb-4">
              In case of any emergency, Stayver provides immediate support:
            </p>
            <ul className="space-y-3 list-disc list-inside">
              <li className="text-gray-600">24/7 customer support hotline.</li>
              <li className="text-gray-600">Direct contact with hotel management.</li>
              <li className="text-gray-600">Emergency services coordination if required.</li>
            </ul>
          </div>
        </div>

        {/* Trust and Safety Commitment */}
        <div className="mt-12">
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Our Trust & Safety Commitment</h2>
            <p className="text-gray-600 text-lg text-center max-w-3xl mx-auto">
              Stayver is committed to providing a safe and trusted environment for all travelers and hosts. 
              We regularly review safety protocols, work closely with hotels, and provide resources to empower our guests to travel with confidence.
            </p>
          </div>
        </div>

        {/* Contact Safety Support */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Contact Stayver Safety Team
          </a>
        </div>
      </div>
    </div>
  );
};

export default SafetyInformation;
