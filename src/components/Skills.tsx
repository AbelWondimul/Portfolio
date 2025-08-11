import { motion } from 'framer-motion';
import styled from 'styled-components';

const SkillsSection = styled.section`
  padding: 6rem 2rem;
  position: relative;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  margin-bottom: 4rem;
  background: linear-gradient(135deg, var(--text-primary) 0%, var(--text-secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: clamp(2rem, 5vw, 3rem);

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const SkillsGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0;
  }
`;

const SkillCard = styled(motion.div)`
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid var(--glass-border);
  border-radius: 20px;
  padding: 2rem;
  text-align: left;
  position: relative;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);

  &:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    
    &:hover {
      transform: translateY(-5px);
    }
  }
`;

const SkillIcon = styled.div`
  width: 60px;
  height: 60px;
  margin: 0 0 1rem 0;
  background: var(--glass-bg);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: var(--accent-blue);

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
  }
`;

const SkillName = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: var(--text-primary);

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 0.75rem;
  }
`;

const SkillDescription = styled.ul`
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.5;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.85rem;
    line-height: 1.4;
  }
`;

const SkillBullet = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  color: var(--text-secondary);

  &::before {
    content: '•';
    color: var(--accent-blue);
    font-size: 1.2rem;
    flex-shrink: 0;
    margin-top: -0.1rem;
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
    margin-bottom: 0.4rem;
    gap: 0.4rem;
  }
`;

const skills = [
  {
    name: 'Frontend Development',
    icon: '💻',
    bullets: [
      'React, HTML, CSS, JavaScript',
      'Bootstrap, web components',
      'Responsive design',
    ],
  },
  {
    name: 'Backend Development',
    icon: '⚙️',
    bullets: [
      'Node.js, Express, Flask',
      'REST APIs, routing, auth',
      'Git, GitHub Actions',
    ],
  },
  {
    name: 'Mobile Development',
    icon: '📱',
    bullets: [
      'Flutter, Dart',
      'State management, native APIs',
    ],
  },
  {
    name: 'DevOps & Cloud',
    icon: '🚀',
    bullets: [
      'CI/CD pipelines',
      'Azure, Docker',
      'Cloud deployment',
    ],
  },
  {
    name: 'Database Management',
    icon: '🗄️',
    bullets: [
      'MongoDB, PostgreSQL, Azure SQL',
      'SQL & NoSQL',
    ],
  },{
    name: 'Version Control',
    icon: '🔧',
    bullets: [
      'Git, GitHub',
      'Branching & merging',
      'Collaboration workflows',
    ],
  },
  {
    name: 'Data Science',
    icon: '📊',
    bullets: [
      'Python',
      'R',
      'Machine Learning Models',
    ],
  },
  {
    name: 'Digital Marketing',
    icon: '📢',
    bullets: [
      'SEO, SEM basics',
      'Google certified',
      'Audience targeting',
    ],
  },
  {
    name: 'Soft Skills',
    icon: '🧠',
    bullets: [
      'Leadership, teamwork',
      'Time management',
      'Problem solving',
      'Fast Learner'
    ],
  },
];


const Skills = () => {
  return (
    <SkillsSection id="skills">
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Technical Skills
      </SectionTitle>

      <SkillsGrid>
        {skills.map((skill, index) => (
          <SkillCard
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <SkillIcon>{skill.icon}</SkillIcon>
            <SkillName>{skill.name}</SkillName>
            <SkillDescription>
              {skill.bullets.map((bullet, i) => (
                <SkillBullet key={i}>{bullet}</SkillBullet>
              ))}
            </SkillDescription>
          </SkillCard>
        ))}
      </SkillsGrid>
    </SkillsSection>
  );
};

export default Skills; 