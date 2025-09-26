import React from 'react';
import { Star, Users, Award, Clock, ArrowRight, CheckCircle } from 'lucide-react';

const CTASection = () => {
  const features = [
    { icon: Clock, text: "7-day free trial" },
    { icon: Users, text: "1-on-1 expert sessions" },
    { icon: Award, text: "Money-back guarantee" },
    { icon: Star, text: "4.9/5 student rating" }
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.1)_100%)]"></div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <Star className="w-4 h-4 mr-2 text-yellow-400 fill-current" />
              <span className="text-sm font-semibold">Limited Time Offer</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to Start Your 
              <span className="block bg-gradient-to-r from-cyan-400 to-yellow-400 bg-clip-text text-transparent">
                IELTS Journey?
              </span>
            </h2>

            {/* Description */}
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Join <span className="font-semibold text-white">10,000+ successful students</span> who achieved 
              their target band score with our proven methodology. Your dream score is just a click away.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <feature.icon className="w-4 h-4 text-cyan-400" />
                  </div>
                  <span className="text-blue-100 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative bg-gradient-to-r from-cyan-400 to-blue-400 text-gray-900 px-8 py-4 rounded-xl font-bold hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                <span className="relative z-10 flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm">
                <span className="flex items-center justify-center">
                  Schedule Consultation
                  <Clock className="w-5 h-5 ml-2" />
                </span>
              </button>
            </div>

            {/* Guarantee Badge */}
            <div className="flex items-center justify-center sm:justify-start mt-8">
              <div className="flex items-center space-x-2 text-blue-200">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm font-medium">30-day money-back guarantee</span>
              </div>
            </div>
          </div>

          {/* Right Content - Stats Card */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Student Success Stories</h3>
                <p className="text-blue-100">Average improvement in 3 months</p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-blue-200 font-medium">Band Score Improvement</span>
                  <span className="text-white font-bold text-lg">+1.5</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div className="bg-gradient-to-r from-cyan-400 to-blue-400 h-3 rounded-full w-3/4"></div>
                </div>

                <div className="flex justify-between items-center mt-6">
                  <span className="text-blue-200 font-medium">Success Rate</span>
                  <span className="text-white font-bold text-lg">95%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div className="bg-gradient-to-r from-green-400 to-emerald-400 h-3 rounded-full w-11/12"></div>
                </div>

                <div className="flex justify-between items-center mt-6">
                  <span className="text-blue-200 font-medium">Student Satisfaction</span>
                  <span className="text-white font-bold text-lg">4.9/5</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-400 h-3 rounded-full w-full"></div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
                <p className="text-blue-100 text-sm text-center">
                  "ExcelIELTS helped me achieve Band 8.0 in just 2 months!" 
                  <span className="block text-cyan-400 font-semibold mt-1">- Sarah Chen</span>
                </p>
              </div>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;