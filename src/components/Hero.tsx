import {
  useEffect,
  useState,
} from 'react';

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import styled from 'styled-components';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
    padding: 0 1rem;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    gap: 1.5rem;
    order: 2;
  }
`;

const TypewriterContainer = styled.div`
  min-height: 4rem;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  position: relative;
  z-index: 3;

  @media (max-width: 768px) {
    min-height: 3rem;
    margin-bottom: 1.5rem;
    justify-content: center;
  }
`;

const TypewriterText = styled(motion.span)`
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  color: var(--accent-blue);
  font-weight: 600;
  font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'Courier New', monospace;
  border-right: 3px solid var(--accent-blue);
  animation: blink 1s infinite;
  
  @keyframes blink {
    0%, 50% { border-color: var(--accent-blue); }
    51%, 100% { border-color: transparent; }
  }

  @media (max-width: 768px) {
    font-size: clamp(1.2rem, 5vw, 1.8rem);
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  background: linear-gradient(135deg, var(--text-primary) 0%, var(--text-secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: clamp(2rem, 6vw, 3rem);
    line-height: 1.1;
  }
`;

const HeroGreeting = styled.span`
  display: block;
  margin-bottom: 0.5rem;
`;

const HeroName = styled.span`
  display: block;
  font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'Courier New', monospace;
  color: var(--accent-blue);
  border-right: 3px solid var(--accent-blue);
  animation: blink 1s infinite;
  
  @keyframes blink {
    0%, 50% { border-color: var(--accent-blue); }
    51%, 100% { border-color: transparent; }
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    line-height: 1.5;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 0.75rem;
  }
`;

const CTAButton = styled(motion.a)`
  display: inline-block;
  padding: 1rem 2rem;
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid var(--glass-border);
  border-radius: 50px;
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 500;
  text-align: center;
  transition: all var(--transition-normal);
  box-shadow: var(--shadow-sm);

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
    background: var(--accent-blue);
    border-color: var(--accent-blue);
  }

  &.secondary {
    background: transparent;
    border-color: var(--accent-purple);
    color: var(--accent-purple);

    &:hover {
      background: var(--accent-purple);
      color: var(--text-primary);
    }
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
  }
`;

const BackgroundTag = styled(motion.div)`
  position: absolute;
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
  color: var(--accent-blue);
  opacity: 0.4;
  pointer-events: none;
  z-index: 1;
  white-space: pre-line;
  line-height: 1.4;
  text-align: left;
`;

const ProfileImage = styled(motion.div)`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 2px solid var(--glass-border);
  box-shadow: var(--shadow-lg);
  overflow: hidden;
  position: relative;
  margin: 0 auto;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transform: rotate(45deg);
    animation: shine 3s infinite;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    padding: 2px;
    background: linear-gradient(
      45deg,
      var(--accent-blue),
      var(--accent-purple)
    );
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  @keyframes shine {
    0% {
      transform: translateX(-100%) rotate(45deg);
    }
    100% {
      transform: translateX(100%) rotate(45deg);
    }
  }

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
    margin: 0 auto 1rem auto;
    order: 1;
  }

  @media (max-width: 480px) {
    width: 200px;
    height: 200px;
  }
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 50%;

  img {
    width: 120%;
    height: 120%;
    object-fit: cover;
    object-position: 80% 10%;
    transform: scale(1.2);
  }
`;

const FloatingShape = styled(motion.div)`
  position: absolute;
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid var(--glass-border);
  border-radius: 50%;
  pointer-events: none;
`;

const CodeSnippet = styled(motion.div)`
  position: absolute;
  font-family: 'Courier New', monospace;
  font-size: 0.8rem;
  color: var(--accent-blue);
  opacity: 0.3;
  pointer-events: none;
`;

const FloatingResumeButton = styled(motion.a)`
  position: fixed;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid var(--glass-border);
  border-radius: 50px;
  padding: 1rem 1.5rem;
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: var(--shadow-lg);
  z-index: 100;
  transition: all var(--transition-normal);

  &:hover {
    transform: translateY(-50%) scale(1.05);
    background: var(--accent-blue);
    border-color: var(--accent-blue);
    box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);
  }

  @media (max-width: 768px) {
    right: 1rem;
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [showHero, setShowHero] = useState(false);
  const [currentBackgroundCode, setCurrentBackgroundCode] = useState(0);
  const [nameTyped, setNameTyped] = useState(false);
  const [nameText, setNameText] = useState('');
  const [nameIndex, setNameIndex] = useState(0);

  const typewriterTexts = [
    'Building Solutions.',
    'Learning Fast.',
    'Leaving an Impact.',
    'Hey, I\'m Abel Legesse.',
    'Let\'s build something meaningful.'
  ];

  const backgroundCodeSnippets = [
    `def weekend_plan():
    play_soccer()
    recharge_energy()

def play_soccer():
    dribble()
    pass_ball()
    score_goal()`,
    
    `function experience() {
  intern("Microsoft");
  contribute();
  rejoin("Microsoft");
  levelUp();
}`,
    
    `void icpcChampion() {
    prepare();
    compete("Washington");
    win();
    celebrate();
}`,
    
    `public void academicRecord() {
    maintainGPA(4.0);
    earnDeanList(6);
}`,
    
    `function supportStudents(): void {
  TA("Computer Science", 2);
  mentor();
  debugTogether();
}`,
    
    `def ResidentAssistant
  build_community
  host_events
  support_residents
  lead_with_empathy
end`,
    
    `tutor <- function() {
  guide("Math")
  explain("Computer Science")
  solve_together()
}`,
    
    `func weekendCreativity() {
    captureMoments()
    editClips()
    tellStoriesVisually()
}`
  ];

  const fullName = 'Abel Legesse';

  useEffect(() => {
    const typewriterInterval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % typewriterTexts.length);
    }, 2000); // Faster timing - 2 seconds instead of 3

    return () => clearInterval(typewriterInterval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHero(true);
      // Start typing the name after hero appears
      setTimeout(() => {
        setNameTyped(true);
      }, 500);
    }, 10000); // Reduced from 15 seconds to 10 seconds

    return () => clearTimeout(timer);
  }, []);

  // Name typing animation
  useEffect(() => {
    if (nameTyped && nameIndex < fullName.length) {
      const timer = setTimeout(() => {
        setNameText(fullName.slice(0, nameIndex + 1));
        setNameIndex(nameIndex + 1);
      }, 150); // Type each character every 150ms

      return () => clearTimeout(timer);
    }
  }, [nameTyped, nameIndex]);

  // Background code cycling
  useEffect(() => {
    const codeInterval = setInterval(() => {
      setCurrentBackgroundCode((prev) => (prev + 1) % backgroundCodeSnippets.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(codeInterval);
  }, []);

  return (
    <HeroSection>
      {/* Background code snippet */}
      <BackgroundTag
        style={{
          right: '40%',
          bottom: '30%',
        }}
        key={currentBackgroundCode}
        initial={{ opacity: 0, y: 40}}
        animate={{ opacity: 0.7, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {backgroundCodeSnippets[currentBackgroundCode]}
      </BackgroundTag>

      {/* Floating code snippets */}
      <CodeSnippet
        style={{ top: '10%', left: '5%' }}
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        const solution = problem =&gt; solve(problem);
      </CodeSnippet>
      <CodeSnippet
        style={{ top: '15%', right: '15%' }}
        animate={{ y: [0, 20, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      >
        function innovate() {'{'} return future; {'}'}
      </CodeSnippet>
      <CodeSnippet
        style={{ bottom: '10%', left: '10%' }}
        animate={{ y: [0, -15, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, delay: 2 }}
      >
        let impact = createChange();
      </CodeSnippet>

      {/* Floating shapes */}
      <FloatingShape
        style={{
          width: '100px',
          height: '100px',
          top: '20%',
          left: '10%',
        }}
        animate={{
          y: [0, 20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <FloatingShape
        style={{
          width: '150px',
          height: '150px',
          bottom: '20%',
          right: '10%',
        }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <HeroContainer>
        <HeroContent>
          {!showHero ? (
            <TypewriterContainer>
              <TypewriterText
                key={currentTextIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {typewriterTexts[currentTextIndex]}
              </TypewriterText>
            </TypewriterContainer>
          ) : (
            <>
              <HeroTitle
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <HeroGreeting>Hi, I'm</HeroGreeting>
                <HeroName>
                  {nameText}
                </HeroName>
              </HeroTitle>
              <HeroSubtitle
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                💻 I enjoy solving real problems with code.
                <br />
                <br />
                A Computer Science + Data Science student who's curious, solves real problems, and learns 
                <br />
               something new every day.
              </HeroSubtitle>
              <ButtonGroup
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <CTAButton
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  See My Projects
                </CTAButton>
                <CTAButton
                  href="#contact"
                  className="secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Let's Talk
                </CTAButton>
                
                
              </ButtonGroup>
            </>
          )}
        </HeroContent>

        <ProfileImage
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <ImagePlaceholder>
            <img src="./Link.JPG" alt="Abel Legesse" />
          </ImagePlaceholder>
        </ProfileImage>
      </HeroContainer>

      {/* Floating Resume Button */}
      <FloatingResumeButton
        href="https://drive.google.com/file/d/1PUigeCMAtwy297JJfyGo56D2aZedyHwl/view?usp=sharing"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Download size={18} />
        Resume
      </FloatingResumeButton>
    </HeroSection>
  );
};

export default Hero; 