import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  text: string;
  author: string;
}

export const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "Your dedication to selling our property was evident. Constant updates made the entire process smooth. Thanks to your efforts, we're thrilled with how quickly our house found a new owner!",
      author: "John & Mary K."
    },
    {
      id: 2,
      text: "We truly appreciate your dedication to helping us buy our dream home in Nairobi.",
      author: "David M."
    },
    {
      id: 3,
      text: "We appreciate the effort you made to find us an affordable house for sale in Nairobi. You are truly award-winning estate agents in Nairobi.",
      author: "Sarah W."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-green-700 mb-4">CLIENT TESTIMONIALS</h3>
          <div className="w-20 h-1 bg-red-700 mx-auto"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <Quote className="h-8 w-8 text-green-700 mb-4" />
            <p className="text-lg text-gray-700 mb-6 italic">
              {testimonials[currentIndex].text}
            </p>
            <p className="text-gray-900 font-medium">
              — {testimonials[currentIndex].author}
            </p>
          </div>
          
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 rounded-full bg-green-700 text-white hover:bg-green-800"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 rounded-full bg-green-700 text-white hover:bg-green-800"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-green-700' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};