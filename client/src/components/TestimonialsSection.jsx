import React from 'react';
import { Star, Quote, Award, TrendingUp, Users } from 'lucide-react';
import TestimonialCard from './TestimonialCard';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      score: "Band 8.5",
      text: "ExcelIELTS helped me achieve my dream score! The mock tests were incredibly realistic and the personalized feedback was invaluable for my writing and speaking sections.",
      rating: 5,
      avatar: "SJ",
      improvement: "+2.0",
      course: "Academic IELTS",
      country: "Canada"
    },
    {
      name: "Ahmed Hassan",
      score: "Band 7.5",
      text: "The speaking practice sessions boosted my confidence tremendously. The AI-powered pronunciation analysis helped me correct my accent within weeks.",
      rating: 5,
      avatar: "AH",
      improvement: "+1.5",
      course: "General Training",
      country: "UAE"
    },
    {
      name: "Priya Sharma",
      score: "Band 8.0",
      text: "Amazing support throughout my preparation journey. The AI scoring system helped me track my progress effectively and focus on my weak areas.",
      rating: 5,
      avatar: "PS",
      improvement: "+1.5",
      course: "Academic IELTS",
      country: "India"
    },
    {
      name: "Michael Chen",
      score: "Band 9.0",
      text: "Achieved a perfect score! The expert guidance and comprehensive study materials made all the difference. Highly recommended!",
      rating: 5,
      avatar: "MC",
      improvement: "+2.5",
      course: "Academic IELTS",
      country: "Australia"
    },
    {
      name: "Elena Rodriguez",
      score: "Band 8.0",
      text: "The writing correction service was exceptional. Detailed feedback helped me improve from Band 6.5 to 8.0 in just 2 months.",
      rating: 5,
      avatar: "ER",
      improvement: "+1.5",
      course: "General Training",
      country: "Spain"
    },
    {
      name: "David Kim",
      score: "Band 8.5",
      text: "The listening and reading strategies taught here are game-changing. I improved my speed and accuracy significantly.",
      rating: 5,
      avatar: "DK",
      improvement: "+2.0",
      course: "Academic IELTS",
      country: "South Korea"
    }
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-100 rounded-full translate-y-1/2 -translate-x-1/2 opacity-50"></div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm mb-6">
            <Award className="w-4 h-4 mr-2 text-yellow-500 fill-current" />
            <span className="text-sm font-semibold text-gray-700">Rated 4.9/5 by 2,000+ Students</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success Stories That <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Inspire</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how our students transformed their IELTS preparation and achieved remarkable results 
            with our personalized coaching approach.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              score={testimonial.score}
              text={testimonial.text}
              rating={testimonial.rating}
              avatar={testimonial.avatar}
              improvement={testimonial.improvement}
              course={testimonial.course}
              country={testimonial.country}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;