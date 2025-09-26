
import React from 'react';

const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Start Your IELTS Journey?
        </h2>
        <p className="text-xl mb-8 text-blue-100">
          Join thousands of successful students and achieve your target band score with our proven methodology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105">
            Start Free Trial
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;