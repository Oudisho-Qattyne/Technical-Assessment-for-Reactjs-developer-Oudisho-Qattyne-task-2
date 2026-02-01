import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import { ThemeProvider } from './context/ThemeContext.tsx'; // Adjust path
import App from './App.tsx'
import { FaCodeBranch, FaStar, FaCode, FaGithub } from 'react-icons/fa';
import Issues from './pages/issues/Issues.tsx';
import Issue from './pages/issue/Issue.tsx';
import ThemeToggle from './components/ThemeToggle.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter >
      <div className="relaive w-full bg-leight  dark:bg-dark-foreground flex flex-row justify-between items-center p-5">
        <FaGithub className="text-4xl dark:text-white text-dark"/>
        <ThemeToggle/>
        </div>
        <Routes>
          <Route path="/" element={<Issues />} />
          <Route path="/:id" element={<Issue />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
