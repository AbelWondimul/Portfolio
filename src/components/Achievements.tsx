import { motion } from 'framer-motion';
import styled from 'styled-components';

const AchievementsSection = styled.section`
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

const AchievementsGrid = styled.div`
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

const AchievementCard = styled(motion.div)`
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid var(--glass-border);
  border-radius: 20px;
  padding: 2rem;
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

const AchievementTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-primary);

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 0.75rem;
  }
`;

const Organization = styled.h4`
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

const Details = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    margin-top: 0.5rem;
  }
`;

const Detail = styled.li`
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

const achievements = [
  {
    title: 'ICPC Pacific Northwest Regional Champion (Washington D2 Site)',
    organization: 'ICPC',
    date: 'Nov 2024',
    description:
      'Won 1st place at the Washington D2 site and ranked 15th overall in the Pacific Northwest Regional ICPC contest.',
    details: [
      'Solved 9 out of 13 algorithmic problems in a 5-hour competitive programming challenge.',
      'Worked in a team of 3 with a single shared computer, under strict time and collaboration constraints.',
      'Demonstrated advanced problem-solving, debugging, and strategic decision-making skills.',
    ],
  },
  {
    title: 'Rieke Leadership Award',
    organization: 'Pacific Lutheran University',
    date: 'Aug 2023',
    description:
      'Recognized for outstanding leadership and contributions to the PLU community.',
    details: [
      'Demonstrated commitment to academic excellence and community engagement.',
      'Actively mentored peers and participated in student leadership initiatives.',
    ],
  },
  {
    title: "Dean's List (Multiple Terms)",
    organization: 'Pacific Lutheran University',
    date: 'Jan & Jun 2023',
    description:
      'Earned placement on the Dean’s List for exceptional academic performance.',
    details: [
      'Maintained a 4.0 GPA across multiple terms.',
      'Demonstrated consistent academic excellence in Computer Science and related fields.',
    ],
  },
  {
    title: 'African Community Engagement Scholarship',
    organization: 'Pacific Lutheran University',
    date: 'Aug 2022',
    description:
      'Awarded a renewable 4-year scholarship for community involvement and academic promise.',
    details: [
      'Selected for leadership and service within the African community.',
      'Scholarship renewed annually based on performance and involvement.',
    ],
  }
];


const Achievements = () => {
  return (
    <AchievementsSection id="achievements">
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Achievements & Awards
      </SectionTitle>

      <AchievementsGrid>
        {achievements.map((achievement, index) => (
          <AchievementCard
            key={achievement.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <AchievementTitle>{achievement.title}</AchievementTitle>
            <Organization>{achievement.organization}</Organization>
            <Date>{achievement.date}</Date>
            <Description>{achievement.description}</Description>
            <Details>
              {achievement.details.map((detail, i) => (
                <Detail key={i}>{detail}</Detail>
              ))}
            </Details>
          </AchievementCard>
        ))}
      </AchievementsGrid>
    </AchievementsSection>
  );
};

export default Achievements; 