
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Section from '../Section';
import RevealOnScroll from '../RevealOnScroll';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  testimonial: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    testimonial: "Working with this developer was an incredible experience. They not only delivered exactly what we needed but also brought innovative ideas to the table that improved our product beyond our expectations.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    company: "StartupX",
    testimonial: "We hired this developer to rebuild our entire web platform, and the results were outstanding. Their technical skills are top-notch, but what really sets them apart is their ability to understand our business needs and translate them into effective code.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Creative Director",
    company: "DesignHub",
    testimonial: "I was blown away by how well this developer was able to take our design concepts and bring them to life on the web. Their attention to detail and commitment to pixel-perfect implementation made all the difference in our project.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <Section 
      id="testimonials" 
      title="Testimonials" 
      subtitle="What clients and colleagues say about working with me"
      className="bg-secondary/50"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto">
          <div className="relative min-h-[300px] md:min-h-[350px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[currentIndex].id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="glass-card p-8 md:p-10 relative"
              >
                <Quote 
                  size={40} 
                  className="text-primary/20 absolute top-8 left-8" 
                />
                
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
                    <div 
                      className="w-full h-full rounded-full bg-cover bg-center border-2 border-primary/20"
                      style={{ backgroundImage: `url(${testimonials[currentIndex].image})` }}
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <Quote size={14} className="text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-grow text-center md:text-left">
                    <p className="text-lg md:text-xl mb-6 text-muted-foreground">
                      "{testimonials[currentIndex].testimonial}"
                    </p>
                    <div>
                      <h4 className="font-bold text-lg">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-muted-foreground">
                        {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-white transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? 'bg-primary' : 'bg-secondary-foreground/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-white transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </RevealOnScroll>
    </Section>
  );
}
