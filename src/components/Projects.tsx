import { motion } from 'framer-motion';
import styled from 'styled-components';

const ProjectsSection = styled.section`
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

const ProjectsGrid = styled.div`
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

const ProjectCard = styled(motion.div)`
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid var(--glass-border);
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transform: translateX(-100%);
    transition: transform 0.6s;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg);

    &::before {
      transform: translateX(100%);
    }
  }

  @media (max-width: 768px) {
    &:hover {
      transform: translateY(-5px);
    }
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background: var(--glass-bg);
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0, 0, 0, 0.2) 100%
    );
  }

  @media (max-width: 768px) {
    height: 180px;
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;

  @media (max-width: 768px) {
    padding: 1.25rem;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-primary);

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 0.75rem;
  }
`;

const ProjectDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.85rem;
    margin-bottom: 1.25rem;
    line-height: 1.5;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    gap: 0.4rem;
    margin-bottom: 1.25rem;
  }
`;

const TechTag = styled.span`
  padding: 0.25rem 0.75rem;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 20px;
  font-size: 0.8rem;
  color: var(--text-secondary);

  @media (max-width: 768px) {
    padding: 0.2rem 0.6rem;
    font-size: 0.75rem;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.75rem;
    flex-wrap: wrap;
  }
`;

const ProjectLink = styled(motion.a)`
  padding: 0.5rem 1rem;
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  border-radius: 20px;
  color: var(--text-primary);
  text-decoration: none;
  font-size: 0.9rem;
  transition: all var(--transition-normal);

  &:hover {
    background: var(--accent-blue);
    border-color: var(--accent-blue);
  }

  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.85rem;
  }
`;

// const projects = [
//   {
//     title: 'E-Commerce Platform',
//     description: 'A modern e-commerce platform built with React and Node.js, featuring real-time inventory management and secure payment processing.',
//     tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
//     image: 'placeholder',
//     demo: '#',
//     code: '#',
//   },
//   {
//     title: 'Task Management App',
//     description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
//     tech: ['Vue.js', 'Firebase', 'Tailwind CSS'],
//     image: 'placeholder',
//     demo: '#',
//     code: '#',
//   },
//   {
//     title: 'Weather Dashboard',
//     description: 'A weather dashboard that provides real-time weather information, forecasts, and interactive maps using various weather APIs.',
//     tech: ['JavaScript', 'OpenWeather API', 'Chart.js'],
//     image: 'placeholder',
//     demo: '#',
//     code: '#',
//   },
//   {
//     title: 'Portfolio Website',
//     description: 'A responsive portfolio website showcasing projects and skills with a modern glassmorphism design.',
//     tech: ['React', 'TypeScript', 'Styled Components'],
//     image: 'placeholder',
//     demo: '#',
//     code: '#',
//   },
// ];

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'LuteMarketplace is a college-based student marketplace exclusively for university students. It is a modern e-commerce platform built with React, Node.js, Express, and MongoDB, featuring real-time posting, listing, updating, deleting, and seamless connections between buyers and sellers.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'AWS EC2'],
    image: '../../LuteMarketplace.png',
    demo: 'https://LuteMarketplace.com',
    code: '',
  },
  {
    title: 'Chrome Extension',
    description:
      "Work Time Price Tag is a Chrome extension that shows how many hours you'd need to work to afford any price you see online, based on your hourly wage.",
    tech: [
      'JavaScript (ES6+)',
      'Chrome Extension APIs',
      'CSS3',
      'Manifest V3',
      'MutationObserver',
      'TreeWalker API',
    ],
    image: '../../workTime.png',
    demo: 'https://chromewebstore.google.com/detail/worktime-price-tag/edlooiokcccclaalofihholmcjncifch',
    code: '#',
  },
  {
    title: 'LEGO Search Tool',
    description:
      'A searchable, filterable LEGO set directory with filters for name, theme, part count, and more. Results are displayed in a sortable, paginated table. Built with Flask, PostgreSQL, and Docker for efficient data handling and smooth deployment.',
    tech: ['Flask', 'Python', 'PostgreSQL', 'Docker', 'HTML', 'CSS'],
    image: '../../Lego.png',
    demo: '#',
    code: 'https://github.com/AbelWondimul/Lego-Website',
  },
  {
    title: 'Flutter Mobile App',
    description:
      'Delala is a mobile app that helps users find rental homes, roommates, and local services like babysitters and hairstylists, specifically tailored for connecting with the Ethiopian community. Built with Flutter and Firebase for seamless mobile experience and real-time data.',
    tech: ['Flutter', 'Dart', 'Firebase Auth', 'Firebase Firestore'],
    image: '../../delala.png',
    demo: 'https://delalaapp.com/',
    code: '#',
  },
  {
  title: 'Portfolio Website',
  description: 'A responsive portfolio website showcasing projects and skills.',
  tech: ['React', 'TypeScript'],
  image: '../../portfolio.png',
  demo: '#',
  code: '#',
  },
  {
    title: 'More Projects',
    description:
      'Want to see more? Explore additional projects from my sophomore year, including early web apps, experiments, and foundational tools that shaped my development journey.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Python', 'More'],
    image: '../../portfolioOLD.png',
    demo: 'https://abel-legesse-portfolio.netlify.app/', 
    code: '#',
  },
];

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Featured Projects
      </SectionTitle>

      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectImage>
              <img src={project.image} alt={project.title} />
            </ProjectImage>
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechStack>
                {project.tech.map((tech) => (
                  <TechTag key={tech}>{tech}</TechTag>
                ))}
              </TechStack>
              <ProjectLinks>
                {project.demo !== '#' && (
                  <ProjectLink
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Live Demo
                  </ProjectLink>
                )}
                {project.code !== '#' && (
                  <ProjectLink
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Code
                  </ProjectLink>
                )}
              </ProjectLinks>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects; 