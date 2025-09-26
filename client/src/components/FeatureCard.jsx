import React from 'react';
import { CheckCircle } from 'lucide-react';

const FeatureCard = ({ icon, title, description, highlights, gradient, bgGradient, index }) => {
  return (
    <div className="group relative">
      {/* Hover Effect Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${bgGradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

      <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 h-full">
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <div className="text-white">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-gray-600 leading-relaxed mb-6">
          {description}
        </p>
        {highlights && (
          <ul className="space-y-2">
            {highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-center text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                {highlight}
              </li>
            ))}
          </ul>
        )}

        <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${gradient} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
      </div>

      {/* Floating Number (Desktop only) */}
      <div className="absolute -top-4 -right-4 hidden lg:block">
        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
          {index + 1}
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;