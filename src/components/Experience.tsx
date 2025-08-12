import { motion } from 'framer-motion';
import styled from 'styled-components';

const ExperienceSection = styled.section`
  padding: 6rem 2rem;
  position: relative;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const ExperienceContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: linear-gradient(
      to bottom,
      var(--accent-blue),
      var(--accent-purple)
    );
    opacity: 0.5;

    @media (max-width: 768px) {
      left: 2rem;
    }
  }
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 4rem;
  background: linear-gradient(135deg, var(--text-primary) 0%, var(--text-secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const ExperienceGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  position: relative;

  @media (max-width: 768px) {
    gap: 3rem;
  }
`;

const ExperienceCard = styled(motion.div)<{ $isEven: boolean }>`
  width: calc(50% - 1rem);
  max-width: 700px;
  margin-left: ${props => props.$isEven ? 'auto' : '0'};
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid var(--glass-border);
  border-radius: 20px;
  padding: 3rem;
  position: relative;
  box-shadow: var(--shadow-lg);

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    ${props => props.$isEven ? 'left: -1.5rem;' : 'right: -1.5rem;'}
    transform: translateY(-50%);
    width: 1.5rem;
    height: 2px;
    background: linear-gradient(
      ${props => props.$isEven ? 'to left' : 'to right'},
      var(--accent-blue),
      var(--accent-purple)
    );
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    ${props => props.$isEven ? 'left: -2rem;' : 'right: -2rem;'}
    transform: translateY(-50%);
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: var(--accent-blue);
    box-shadow: 0 0 10px var(--accent-blue);
  }

  @media (max-width: 768px) {
    width: calc(100% - 4rem);
    max-width: none;
    margin: 0 0 0 4rem;
    padding: 2rem;

    &::before {
      left: -1.5rem;
      right: auto;
    }

    &::after {
      left: -2rem;
      right: auto;
    }
  }

  @media (max-width: 480px) {
    width: calc(100% - 3rem);
    margin: 0 0 0 3rem;
    padding: 1.5rem;
  }
`;

const JobTitle = styled.h3`
  font-size: 1.8rem;
  color: var(--text-primary);
  margin-bottom: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

const ExperienceCompany = styled.h4`
  font-size: 1.4rem;
  color: var(--accent-blue);
  margin-bottom: 0.8rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 0.6rem;
  }
`;

const ExperienceDate = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
  margin-bottom: 1.2rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
`;

const ExperienceDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1.25rem;
  }
`;

const ExperienceDetails = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
`;

const ExperienceDetail = styled.li`
  color: var(--text-secondary);
  margin-bottom: 0.8rem;
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  font-size: 1rem;
  line-height: 1.6;

  &::before {
    content: '•';
    color: var(--accent-purple);
    font-size: 1.4rem;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 0.6rem;
    gap: 0.6rem;
  }
`;

const experiences = [
  {
    title: 'Software Engineer Intern',
    company: 'Microsoft',
    date: 'May 2025 – Aug 2025',
    description: 'Worked on an internal automation tool that streamlined workflows and integrated AI capabilities, significantly improving efficiency for a specialized team. Delivered features ahead of schedule and ensured reliable, error-free performance for active users.',
    details: [
    ]
  },
  {
    title: 'Program Manager & Software Engineer Intern',
    company: 'Microsoft',
    date: 'May 2024 – Aug 2024',
    description: 'Collaborated on a platform for evaluating AI-generated responses, contributing to both backend and frontend development. Helped define the system’s architecture, improve accuracy, and deliver the project on time through coordinated teamwork.',
    details: [
    ]
  },
  {
    title: 'Teaching Assistant',
    company: 'Pacific Lutheran University, Tacoma, WA',
    date: 'Sep. 2023 – May 2025',
    description: 'Supported instruction and lab guidance for CS students. Enhanced student learning outcomes by leading coding labs, developing targeted practice modules for complex topics, and coaching effective debugging strategies to improve problem-solving efficiency.',
    details: [
  ]
  },
  {
    title: 'Supplemental Instruction Leader',
    company: 'Pacific Lutheran University, Tacoma, WA',
    date: 'Sep. 2023 – Jan. 2024',
    description: 'Facilitated student success by leading study sessions, creating resources for challenging topics, and mentoring students to strengthen their academic skills and confidence.',
    details: [
    ]
  }
];


const Experience = () => {
  return (
    <ExperienceSection id="experience">
      <ExperienceContainer>
        <SectionTitle>Work Experience</SectionTitle>
        <ExperienceGrid>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              $isEven={index % 2 === 1}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <JobTitle>{experience.title}</JobTitle>
              <ExperienceCompany>{experience.company}</ExperienceCompany>
              <ExperienceDate>{experience.date}</ExperienceDate>
              <ExperienceDescription>{experience.description}</ExperienceDescription>
              <ExperienceDetails>
                {experience.details.map((detail, i) => (
                  <ExperienceDetail key={i}>{detail}</ExperienceDetail>
                ))}
              </ExperienceDetails>
            </ExperienceCard>
          ))}
        </ExperienceGrid>
      </ExperienceContainer>
    </ExperienceSection>
  );
};

export default Experience; 