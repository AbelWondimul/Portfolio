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
    description: 'Worked as a Software Engineer Intern on impactful projects at scale.',
    details: [
      'Collaborated with engineers to build and improve features within a production environment.',
      'Contributed to code reviews, debugging, and optimization for performance and scalability.',
      'Gained hands-on experience with Microsoft’s engineering tools and agile workflows.'
    ]
  },
  {
    title: 'Program Manager & Software Engineer Intern',
    company: 'Microsoft',
    date: 'May 2024 – Aug 2024',
    description: 'Completed PM/SWE internship focused on end-to-end product development.',
    details: [
      'Drove product planning and coordination across cross-functional teams.',
      'Designed feature specs and prototypes for user-facing components.',
      'Implemented backend and frontend changes based on user needs and feedback.'
    ]
  },
  {
    title: 'Teaching Assistant',
    company: 'Pacific Lutheran University, Tacoma, WA',
    date: 'Sep. 2023 – May 2025',
    description: 'Supported instruction and lab guidance for CS students.',
    details: [
      'Assisted in the instruction of "Intro to Computer Science Lab" under Professor Dr. David Wolff.',
      'Conducted weekly lab sessions, providing hands-on support with coding and problem-solving.',
      'Offered one-on-one assistance to students during lab sessions to reinforce concepts.'
    ]
  },
  {
    title: 'Supplemental Instruction Leader',
    company: 'Pacific Lutheran University, Tacoma, WA',
    date: 'Sep. 2023 – Jan. 2024',
    description: 'Led collaborative learning sessions for CS students.',
    details: [
      'Led weekly study sessions for the "Introduction to Computer Science" course.',
      'Worked with instructors to identify tough topics and developed resources to address them.',
      'Mentored a group of students, helping them succeed academically and build confidence.'
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