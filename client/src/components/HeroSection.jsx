import React from 'react';
import { Users, Play, Star, Award, Clock } from 'lucide-react';

const HeroSection = () => {
  const heroImages = [
    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  ];
  
  const randomImage = heroImages[Math.floor(Math.random() * heroImages.length)];

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900/50 to-purple-900/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 z-10">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <Star className="w-4 h-4 mr-2 text-yellow-400" />
              <span className="text-sm font-medium">Trusted by 10,000+ Students Worldwide</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Achieve Your
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Dream IELTS Score
                </span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
                Comprehensive IELTS preparation with personalized coaching, real exam simulations, 
                and proven strategies to help you succeed on your first attempt.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <span className="relative z-10 flex items-center justify-center">
                  Start Free Trial
                  <Play className="w-5 h-5 ml-2" />
                </span>
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm">
                View Course Details
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-5 h-5 mr-2 text-cyan-400" />
                  <div className="text-2xl font-bold">10K+</div>
                </div>
                <div className="text-blue-200 text-sm font-medium">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-5 h-5 mr-2 text-yellow-400" />
                  <div className="text-2xl font-bold">95%</div>
                </div>
                <div className="text-blue-200 text-sm font-medium">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="w-5 h-5 mr-2 text-green-400" />
                  <div className="text-2xl font-bold">8.5+</div>
                </div>
                <div className="text-blue-200 text-sm font-medium">Average Score</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={randomImage}
                  alt="IELTS Students Learning"
                  className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                
                {/* Overlay Content */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                          <Users className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">Live Interactive Classes</h3>
                        <p className="text-blue-100 text-sm">Join our next session today</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4">
                <div className="bg-gradient-to-br from-yellow-400 to-orange-500 text-slate-900 px-6 py-3 rounded-xl font-bold shadow-lg animate-bounce">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-2 fill-current" />
                    #1 Rated Platform
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4">
                <div className="bg-white text-slate-900 px-6 py-3 rounded-xl font-bold shadow-lg backdrop-blur-sm">
                  <div className="flex items-center">
                    <Award className="w-4 h-4 mr-2 text-cyan-600" />
                    Certified Coaches
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;