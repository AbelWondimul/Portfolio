import { motion } from 'framer-motion';
import styled from 'styled-components';

const EducationSection = styled.section`
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

const EducationGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0;
  }
`;

const EducationCard = styled(motion.div)`
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  border-radius: 20px;
  padding: 2rem;
  position: relative;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transition: left 0.6s ease;
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.05) 0%,
      transparent 50%,
      rgba(255, 255, 255, 0.05) 100%
    );
    pointer-events: none;
    border-radius: 20px;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg);
    border-color: rgba(255, 255, 255, 0.3);

    &::before {
      left: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    
    &:hover {
      transform: translateY(-5px);
    }
  }
`;

const Degree = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-primary);

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 0.75rem;
  }
`;

const Institution = styled.h4`
  font-size: 1.2rem;
  color: var(--accent-blue);
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 0.4rem;
  }
`;

const Date = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1rem;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    font-size: 0.85rem;
    margin-bottom: 0.75rem;
  }
`;

const Description = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 1.25rem;
    line-height: 1.5;
  }
`;

const Achievements = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    margin-top: 0.5rem;
  }
`;

const Achievement = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  line-height: 1.5;

  &::before {
    content: '🏆';
    font-size: 1rem;
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
    margin-bottom: 0.4rem;
    gap: 0.4rem;
  }
`;

const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Pacific Lutheran University',
    date: 'Sep 2022 – May 2026',
    description: 'Major in Computer Science with minors in Data Science and Economics. GPA: 4.0/4.0',
    achievements: [
      'Excelled in Data Structures, Databases, and Web Development',
      'Engaged in coding standards, Java development, and data manipulation projects',
      'Active in extracurriculars: Soccer, Table Tennis, and Academic Clubs',
    ],
  },
  {
    degree: 'Intro to Cybersecurity',
    institution: 'CodePath',
    date: 'Feb 2025 – Apr 2025',
    description: 'Explored foundational concepts in cybersecurity through CodePath’s selective program.',
    achievements: [
      'Learned threat modeling, secure coding practices, and common vulnerabilities',
      'Participated in hands-on labs and security-focused coding exercises',
    ],
  },
  {
    degree: 'Intermediate Web Development',
    institution: 'CodePath',
    date: 'Sep 2023 – Nov 2023',
    description: 'Completed intermediate-level web development training.',
    achievements: [
      'Built React.js applications and REST API integrations',
      'Focused on scalable frontend development and debugging practices',
    ],
  },
  {
    degree: 'Data Science',
    institution: 'DataCamp',
    date: 'Jun 2023 – Aug 2023',
    description: 'Completed self-paced coursework in data science fundamentals.',
    achievements: [
      'Strengthened Python programming and data analysis skills',
      'Gained hands-on experience with statistical modeling and data manipulation',
    ],
  },
  {
    degree: 'Full Stack Web Development',
    institution: 'freeCodeCamp',
    date: 'Jan 2023 – Jul 2023',
    description: 'Completed freeCodeCamp certification programs in JavaScript and web development.',
    achievements: [
      'Built projects using JavaScript, HTML, CSS, and responsive design principles',
      'Applied concepts in frontend/backend development through capstone projects',
    ],
  },
];


const Education = () => {
  return (
    <EducationSection id="education">
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Education
      </SectionTitle>

      <EducationGrid>
        {education.map((edu, index) => (
          <EducationCard
            key={edu.degree}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Degree>{edu.degree}</Degree>
            <Institution>{edu.institution}</Institution>
            <Date>{edu.date}</Date>
            <Description>{edu.description}</Description>
            <Achievements>
              {edu.achievements.map((achievement, i) => (
                <Achievement key={i}>{achievement}</Achievement>
              ))}
            </Achievements>
          </EducationCard>
        ))}
      </EducationGrid>
    </EducationSection>
  );
};

export default Education; 