
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import AnimatedBackground from '../AnimatedBackground';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />
      
      <div className="container px-4 sm:px-6 relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-primary/10 text-primary">
            Frontend Developer
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter mb-4">
            Turning <span className="Hero-text">ideas</span> into <span className="Hero-text">interactive</span> realities
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Bridging the gap between imagination and impactful user interfaces.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#projects" className="btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn-secondary">
            Get in Touch
          </a>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <a
          href="#about"
          className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors duration-300"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown className="animate-bounce" size={20} />
        </a>
      </motion.div>
    </section>
  );
}
