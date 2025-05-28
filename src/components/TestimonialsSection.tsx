import React from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: "testimonial-michael",
    quote: "Gift Easy helped me find the perfect anniversary gift for my wife. She absolutely loved it!",
    name: "Michael T.",
    role: "Happy Customer",
    avatar: "/images/avatar-placeholder.png" // Will use a placeholder for now
  },
  {
    id: "testimonial-sarah",
    quote: "I was struggling to find a unique birthday gift until I used Gift Easy. The AI recommendations were spot-on!",
    name: "Sarah K.",
    role: "Satisfied User",
    avatar: "/images/avatar-placeholder.png"
  },
  {
    id: "testimonial-david",
    quote: "Worth every penny! Found an amazing graduation gift that I never would have thought of myself.",
    name: "David L.",
    role: "Regular User",
    avatar: "/images/avatar-placeholder.png"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="w-full max-w-5xl mx-auto mt-24" aria-labelledby="testimonials-heading">
      <h2 id="testimonials-heading" className="text-3xl font-bold text-center mb-12 text-white">
        What Our Users Say
      </h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white/5 p-6 rounded-xl backdrop-blur-sm flex flex-col">
            <div className="flex-grow">
              <p className="italic text-white/90 mb-4">"{testimonial.quote}"</p>
            </div>
            
            <div className="flex items-center mt-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-indigo-300/30 flex items-center justify-center">
                {/* Placeholder avatar - in production, use real images */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-200" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" role="img">
                  <title>User profile icon</title>
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="font-medium text-indigo-200">{testimonial.name}</h3>
                <p className="text-sm text-indigo-300">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
