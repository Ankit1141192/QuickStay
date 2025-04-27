import React from 'react';

const HelpCenter = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 mt-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-playfair text-4xl md:text-5xl mb-2">Stayver Help Center</h1>
          <p className="text-gray-600 text-lg">
            How can we assist you today? Find answers to common questions below.
          </p>
        </div>

        {/* Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* FAQ Section */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Frequently Asked Questions</h2>
            <ul className="space-y-4">
              <li className="border-b pb-2">
                <h3 className="font-medium text-gray-700">How do I book a room on Stayver?</h3>
                <p className="text-gray-500 text-sm mt-1">You can search for hotels, select your dates, and complete the booking securely online.</p>
              </li>
              <li className="border-b pb-2">
                <h3 className="font-medium text-gray-700">Can I cancel my booking?</h3>
                <p className="text-gray-500 text-sm mt-1">Yes, depending on the hotel's cancellation policy. Visit 'My Bookings' to manage cancellations.</p>
              </li>
              <li>
                <h3 className="font-medium text-gray-700">Is customer support available 24/7?</h3>
                <p className="text-gray-500 text-sm mt-1">Yes, Stayver support is available around the clock to assist you.</p>
              </li>
            </ul>
          </div>

          {/* Contact Support Section */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Need More Help?</h2>
            <p className="text-gray-600 mb-6">
              If you can’t find your answer, our support team is just a message away.
            </p>
            <a
              href="#"
              className="inline-block mt-2 flex items-center gap-1 text-sm font-medium text-gray-600 border border-gray-400 px-4 py-2 rounded-full hover:gap-2 transition-all group"
            >
              Contact Stayver Support
              
            </a>
          </div>
        </div>

        {/* Quick Topics */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Quick Topics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {['Account Settings', 'Payment Issues', 'Refunds', 'Hotel Policies', 'Stayver Rewards', 'Accessibility'].map((topic, index) => (
              <div key={index} className="bg-white rounded-xl shadow p-4 text-center hover:shadow-lg transition duration-300">
                <h3 className="text-lg font-medium text-blue-600">{topic}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
