import React from 'react';
import TestimonialCard from './TestimonialCard';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      score: "Band 8.5",
      text: "ExcelIELTS helped me achieve my dream score! The mock tests were incredibly realistic and the feedback was invaluable.",
      rating: 5
    },
    {
      name: "Ahmed Hassan",
      score: "Band 7.5",
      text: "The speaking practice sessions boosted my confidence tremendously. Highly recommend their comprehensive program.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      score: "Band 8.0",
      text: "Amazing support throughout my preparation journey. The AI scoring system helped me track my progress effectively.",
      rating: 5
    }
  ];

  return (
    <section className="bg-gray-100 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Student Success Stories
          </h2>
          <p className="text-xl text-gray-600">
            Hear from our successful students who achieved their dream scores
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              score={testimonial.score}
              text={testimonial.text}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;