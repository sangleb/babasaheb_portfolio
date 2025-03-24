
import React from 'react';
import RevealOnScroll from './RevealOnScroll';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

export default function Section({ 
  id, 
  className = "", 
  children, 
  title, 
  subtitle 
}: SectionProps) {
  return (
    <section 
      id={id} 
      className={`py-20 md:py-32 overflow-hidden ${className}`}
    >
      <div className="section-container">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <RevealOnScroll>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{title}</h2>
              </RevealOnScroll>
            )}
            {subtitle && (
              <RevealOnScroll delay={1}>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                  {subtitle}
                </p>
              </RevealOnScroll>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
