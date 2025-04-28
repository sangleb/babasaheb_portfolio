import { motion } from 'framer-motion';
import Section from '../Section';
import RevealOnScroll from '../RevealOnScroll';
import Photo from '../../assets/Photo.jpg';


export default function About() {
  return (
    <Section 
      id="about" 
      title="About Me" 
      subtitle="Get to know more about my background and professional journey"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5">
          <RevealOnScroll>
            <div className="relative">
              <div className="rounded-xl overflow-hidden aspect-[4/5] bg-gradient-to-br from-primary/10 to-secondary">
                <motion.div
                  className="w-full h-full"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${Photo})` }}
                  >
                  </div>
                </motion.div>
              </div>
              
              {/* Decorative element */}
              <div className="absolute -bottom-5 -right-5 w-2/3 h-1/3 rounded-xl border-2 border-primary/20 -z-10"></div>
            </div>
          </RevealOnScroll>
        </div>
        
        <div className="md:col-span-7">
          <RevealOnScroll>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Passionate Frontend Developer & Problem Solver
            </h3>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                Results-driven Frontend Developer/UI Developer with 3 years of experience in delivering high-quality web applications.
                Proficient in various technologies and frameworks, with a strong focus on sectors such as finance and networking. Successfully
                completed multiple projects for diverse clients, enhancing application performance and user experience. Committed to staying
                updated with industry trends and best practices
              </p>
              <p> 
                My approach combines technical excellence with creative problem-solving. I believe 
                that great software should not only work flawlessly but also delight users with 
                thoughtful interactions and beautiful interfaces.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, or expanding my knowledge through continuous learning.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Education</h4>
                <p className="text-muted-foreground">B. Tech. Mech Engg<br />Dr. BAMU, Chhatrapati Sambhajinagar</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Experience</h4>
                <p className="text-muted-foreground">3 years of professional<br /> web development experience</p>
              </div>
            </div>
          </RevealOnScroll>
        </div>  
      </div>
    </Section>
  );
}
