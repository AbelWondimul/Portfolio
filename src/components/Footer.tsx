import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 2rem;
  position: relative;
  overflow: hidden;
  width: 100%;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
  width: 100%;
`;

const FooterText = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;



const FooterBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-top: 1px solid var(--glass-border);
  z-index: 0;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterBackground />
      <FooterContent>
        <FooterText>
          © {currentYear} Abel Legesse. All rights reserved.
        </FooterText>
        
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 