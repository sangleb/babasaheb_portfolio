
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';

export default function Index() {
  const controls = useAnimation();
  
  useEffect(() => {
    // Initial reveal animation
    controls.start({ opacity: 1, y: 0 });
    
    // Initialize reveal on scroll animations
    const handleRevealElements = () => {
      const revealElements = document.querySelectorAll('.reveal');
      
      for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = revealElements[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          revealElements[i].classList.add('active');
        }
      }
    };
    
    // Initial check and add scroll listener
    handleRevealElements();
    window.addEventListener('scroll', handleRevealElements);
    
    // Lazy load images
    const blurDivs = document.querySelectorAll('.blur-load');
    
    blurDivs.forEach(div => {
      const img = div.querySelector('img');
      
      if (img) {
        // When the image is loaded, add the loaded class
        img.onload = () => {
          div.classList.add('loaded');
        };
        
        // If the image is already loaded from cache
        if (img.complete) {
          div.classList.add('loaded');
        }
      }
    });
    
    return () => {
      window.removeEventListener('scroll', handleRevealElements);
    };
  }, [controls]);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="overflow-x-hidden"
    >
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </motion.div>
  );
}
