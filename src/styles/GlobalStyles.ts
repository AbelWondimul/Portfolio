import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary-bg: #1a1a2e;
    --secondary-bg: #16213e;
    --glass-bg: rgba(255, 255, 255, 0.1);
    --glass-border: rgba(255, 255, 255, 0.2);
    --text-primary: #ffffff;
    --text-secondary: rgba(255, 255, 255, 0.7);
    --accent-blue: #4a90e2;
    --accent-purple: #9b51e0;
    --shadow-sm: 0 4px 6px rgba(0, 0, 0, 0.1);
    --shadow-md: 0 6px 12px rgba(0, 0, 0, 0.15);
    --shadow-lg: 0 12px 24px rgba(0, 0, 0, 0.2);
    --transition-fast: 0.2s ease;
    --transition-normal: 0.3s ease;
    --transition-slow: 0.5s ease;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: var(--primary-bg);
    color: var(--text-primary);
    line-height: 1.6;
    overflow-x: hidden;
    position: relative;
  }

  #root {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  /* Glassmorphism base styles */
  .glass {
    background: var(--glass-bg);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid var(--glass-border);
    box-shadow: var(--shadow-sm);
    transition: all var(--transition-normal);
  }

  .glass:hover {
    box-shadow: var(--shadow-md);
    transform: translateY(-2px);
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
  }

  h2 {
    font-size: clamp(2rem, 4vw, 3rem);
  }

  h3 {
    font-size: clamp(1.5rem, 3vw, 2rem);
  }

  p {
    margin-bottom: 1rem;
  }

  /* Buttons */
  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    font-family: inherit;
  }

  /* Links */
  a {
    color: var(--accent-blue);
    text-decoration: none;
    transition: color var(--transition-fast);
  }

  a:hover {
    color: var(--accent-purple);
  }

  /* Form elements */
  input, textarea {
    font-family: inherit;
    font-size: 1rem;
    padding: 0.75rem 1rem;
    border: 1px solid var(--glass-border);
    border-radius: 8px;
    background: var(--glass-bg);
    color: var(--text-primary);
    transition: all var(--transition-fast);
  }

  input:focus, textarea:focus {
    outline: none;
    border-color: var(--accent-blue);
    box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
  }

  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--primary-bg);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--glass-bg);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--glass-border);
  }

  /* Selection */
  ::selection {
    background: var(--accent-blue);
    color: var(--text-primary);
  }

  /* Media Queries */
  @media (max-width: 768px) {
    html {
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    html {
      font-size: 12px;
    }
  }
`; 