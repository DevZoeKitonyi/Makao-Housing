import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "Makao Properties made selling our home effortless. Their team provided constant updates, professional photography, and found us a buyer within just two weeks! The entire process was transparent and stress-free.",
    author: "John & Mary K.",
    rating: 5,
    location: "Lavington, Nairobi",
    role: "Home Sellers"
  },
  {
    id: 2,
    text: "As first-time home buyers, we were nervous about the process. Makao's agents patiently guided us through every step, negotiated the best price, and helped us secure our dream family home in Karen.",
    author: "David M.",
    rating: 5,
    location: "Karen, Nairobi",
    role: "First-time Buyers"
  },
  {
    id: 3,
    text: "Finding affordable housing in Nairobi's competitive market seemed impossible until we connected with Makao. Their agents understood our budget and found us a perfect 2-bedroom apartment in Kilimani.",
    author: "Sarah W.",
    rating: 4,
    location: "Kilimani, Nairobi",
    role: "Renters"
  },
  {
    id: 4,
    text: "The rental management service from Makao has been exceptional. They handle everything professionally - from tenant screening to maintenance. Our property has been occupied continuously with zero headaches.",
    author: "James N.",
    rating: 5,
    location: "Westlands, Nairobi",
    role: "Property Investor"
  },
  {
    id: 5,
    text: "Makao's virtual tours and detailed listings helped us find our ideal office space while relocating from Mombasa. Their agents accommodated all our viewing requests and handled the paperwork efficiently.",
    author: "Amina & Partners",
    rating: 5,
    location: "CBD, Nairobi",
    role: "Commercial Client"
  }
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-white relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-green-100 rounded-full opacity-20 -translate-x-16 -translate-y-16"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-red-100 rounded-full opacity-20 translate-x-24 translate-y-24"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-800 mb-4">Client Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover why thousands of Kenyans trust Makao for their real estate needs
          </p>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-6 rounded-full"></div>
        </div>
        
        {/* Carousel Container */}
        <div 
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Testimonial Cards */}
          <div className="relative h-96 overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`absolute inset-0 transition-all duration-500 ease-in-out ${index === currentIndex ? 'opacity-100 translate-x-0' : 
                  index < currentIndex ? 'opacity-0 -translate-x-full' : 'opacity-0 translate-x-full'}`}
              >
                <div className="bg-white p-10 rounded-xl shadow-lg border border-green-100 h-full flex flex-col">
                  <Quote className="h-10 w-10 text-green-600 mb-6 opacity-20" />
                  <p className="text-xl text-gray-800 mb-8 leading-relaxed italic flex-grow">
                    "{testimonial.text}"
                  </p>
                  
                  <div>
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="h-14 w-14 rounded-full bg-green-100 flex items-center justify-center text-green-800 font-bold text-xl">
                          {testimonial.author.charAt(0)}
                        </div>
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-green-900">
                          {testimonial.author}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {testimonial.role} • {testimonial.location}
                        </p>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i}
                              className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-3 rounded-full bg-green-700 text-white hover:bg-green-800 transition-colors shadow-md hover:shadow-lg z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-3 rounded-full bg-green-700 text-white hover:bg-green-800 transition-colors shadow-md hover:shadow-lg z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          
          {/* Indicator Dots */}
          <div className="flex justify-center mt-10 space-x-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goToTestimonial(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-green-700 w-6' : 'bg-gray-300 hover:bg-green-500'}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
        
        
      </div>
    </section>
  );
};