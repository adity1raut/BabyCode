import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ name, score, text, rating }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-600 mb-6 italic">"{text}"</p>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
          {name.split(' ').map(n => n[0]).join('')}
        </div>
        <div className="ml-4">
          <div className="font-semibold text-gray-900">{name}</div>
          <div className="text-sm text-blue-600 font-medium">{score}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;