
import { motion } from 'framer-motion';
import Section from '../Section';
import RevealOnScroll from '../RevealOnScroll';

interface Skill {
  category: string;
  items: {
    name: string;
    level: number;
  }[];
}

const skills: Skill[] = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 95 },
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 80 },
      { name: "Express", level: 70 },
      { name: "MongoDB", level: 80 },
    ]
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git", level: 90 },
      { name: "Jenkins", level: 80 },
      { name: "UI/UX Design", level: 80 },
      { name: "Postman", level: 85 },
      { name: "VS Code", level: 90 },
    ]
  }
];

export default function Skills() {
  return (
    <Section 
      id="skills" 
      title="My Skills" 
      subtitle="A comprehensive overview of my technical expertise and proficiencies"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {skills.map((skillGroup, groupIndex) => (
          <RevealOnScroll key={skillGroup.category} delay={groupIndex * 2}>
            <div className="glass-card p-6 h-full">
              <h3 className="text-xl font-semibold mb-6">{skillGroup.category}</h3>
              <div className="space-y-6">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-blue-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1,
                          delay: 0.2 + (skillIndex * 0.1),
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
      
      <div className="mt-20">
        <RevealOnScroll>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-10">Additional Competencies</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Redux", "GraphQL", "Jest", "React Testing Library", "Webpack", 
              "Styled Components", "Material UI", "Figma", "tailwindcss",
              "Responsive Design", "PWA", "SEO", "Performance Optimization",
              "RESTful APIs", "Authentication", "WebSockets"
            ].map((skill, index) => (
              <motion.div
                key={skill}
                className="px-4 py-2 bg-secondary rounded-full text-foreground transition-colors duration-300 hover:bg-primary hover:text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5,
                  delay: 0.1 * (index % 10),
                  ease: "easeOut"
                }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
