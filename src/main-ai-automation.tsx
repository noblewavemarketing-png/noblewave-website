import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import AiAutomationPage from './pages/AiAutomationPage.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AiAutomationPage />
  </StrictMode>,
);
