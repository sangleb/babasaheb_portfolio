
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import Section from '../Section';
import RevealOnScroll from '../RevealOnScroll';
import BookImg from '../../assets/Book.png';
import HangmanImg from '../../assets/Hangman.png';
import TodoImg from '../../assets/Todo.png';
import MovieImg from '../../assets/MovieImg.png';

interface Project { 
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Goodreads Clone",
    description: "A digital library platform built in React, Javascript, Redux and axios for api handling. Feature includes product catalog, cart functionality, user authentication, and tracking.",
    image: BookImg,
    tags: ["ReactJS", "Javascript", "MongoDB", "Authentication", "Axios", "Redux", "Tailwind CSS", "React Router DOM"],
    github: "#",
    demo: "#"
  },
  {
    id: 2,
    title: "Movie Search App",
    description: "A application that helps users to search various movies and see the information about movie. Built with React and Javascript.",
    image: MovieImg,
    tags: ["React", "Axios",  "Router DOM", "FontAwesome", "React Icons", "HTML5", "CSS3", "Tailwind CSS"],
    github: "#",
    demo: "#"
  },
  {
    id: 3,
    title: "Todo App",
    description: "Developed React To-Do application, showcasing proficiency with dynamic content manipulation.",
    image: TodoImg,
    tags: ["React", "Javascript", "Redux", "HTML5", "CSS3", "React DOM"],
    github: "#",
    demo: "#"
  },
  {
    id: 4,
    title: "Hangman Game",
    description: "A game application where user can interact with computer and can check the vocabulary or increase their vocab.",
    image: HangmanImg,
    tags: ["React", "Javascript", "Post CSS", "React DOM", "tailwind CSS"],
    github: "#",
    demo: "#"
  },
  
];

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  
  return (
    <Section 
      id="projects" 
      title="My Projects" 
      subtitle="Explore some of my recent work and technical projects"
      className="bg-secondary/50"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <RevealOnScroll key={project.id} delay={index * 2}>
            <motion.div
              className="glass-card overflow-hidden h-full flex flex-col"
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative aspect-video overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 ease-out-expo"
                  style={{ 
                    backgroundImage: `url(${project.image})`,
                    transform: hoveredId === project.id ? 'scale(1.05)' : 'scale(1)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-black/20 hover:bg-primary/80 rounded-full backdrop-blur-sm transition-colors duration-300"
                      >
                        <Github size={20} className="text-white" />
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-black/20 hover:bg-primary/80 rounded-full backdrop-blur-sm transition-colors duration-300"
                      >
                        <ExternalLink size={20} className="text-white" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </RevealOnScroll>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <RevealOnScroll>
          <a href="#" className="btn-primary inline-flex items-center">
            View All Projects
          </a>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
