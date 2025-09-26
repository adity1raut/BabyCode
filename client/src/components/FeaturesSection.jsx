import React from 'react';
import { BookOpen, Mic, Target, Award } from 'lucide-react';
import FeatureCard from './FeatureCard';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Mic className="w-10 h-10" />,
      title: "Speaking Practice",
      description: "Interactive speaking sessions with certified trainers and AI-powered pronunciation feedback.",
      highlights: ["Real-time feedback", "Accent training", "Fluency analysis"],
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50"
    },
    {
      icon: <BookOpen className="w-10 h-10" />,
      title: "Mock Tests",
      description: "Full-length practice tests that simulate the actual IELTS exam environment.",
      highlights: ["Timed tests", "Real exam format", "Detailed analytics"],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: "AI Band Score Prediction",
      description: "Get instant band score predictions using our advanced AI assessment system.",
      highlights: ["Instant results", "Score breakdown", "Improvement tips"],
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50"
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: "Expert Guidance",
      description: "Learn from experienced instructors with proven track records of student success.",
      highlights: ["1-on-1 sessions", "Personalized plans", "Certified experts"],
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50"
    }
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full translate-x-1/2 translate-y-1/2 opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">ExcelIELTS?</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive approach combines traditional teaching methods with cutting-edge technology 
            to ensure your <span className="font-semibold text-gray-800">IELTS success</span>.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              highlights={feature.highlights}
              gradient={feature.gradient}
              bgGradient={feature.bgGradient}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;