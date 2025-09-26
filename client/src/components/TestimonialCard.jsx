import React, { useEffect, useState } from 'react';
import { Star, Quote, MapPin, TrendingUp } from 'lucide-react';

const TestimonialCard = ({ name, score, text, rating, avatar, improvement, course, country, index }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 100 + index * 100);
    return () => clearTimeout(timeout);
  }, [index]);
  return (
    <div
      className={`group relative transition-all duration-700 ease-out transform
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
  <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 h-full">
        {/* Quote Icon */}
        <div className="absolute top-4 right-4 opacity-10">
          <Quote className="w-12 h-12 text-blue-600" />
        </div>

        {/* Rating Stars */}
        <div className="flex items-center mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
          ))}
          <span className="ml-2 text-sm text-gray-500 font-medium">{rating}.0</span>
        </div>

        {/* Testimonial Text */}
  <p className="text-gray-700 mb-6 leading-relaxed relative z-10">"{text}"</p>

        {/* Student Info */}
  <div className="flex items-start space-x-4">
          {/* Avatar */}
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
              {avatar}
            </div>
            {/* Improvement Badge */}
            {improvement && (
              <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                {improvement}
              </div>
            )}
          </div>

          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <h4 className="font-bold text-gray-900">{name}</h4>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm px-3 py-1 rounded-full font-semibold">
                {score}
              </span>
            </div>
            <div className="flex items-center text-sm text-gray-600 mb-2">
              <MapPin className="w-3 h-3 mr-1" />
              {country} • {course}
            </div>
            {/* Course Type */}
            <div className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-md font-medium">
              {course}
            </div>
          </div>
        </div>

        {/* Decorative Border Bottom */}
  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Sequential Number (Desktop only) */}
      <div className="absolute -top-3 -left-3 hidden lg:block">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white font-bold text-sm shadow-lg">
          {index + 1}
        </div>
      </div>
  </div>
  );
};

export default TestimonialCard;