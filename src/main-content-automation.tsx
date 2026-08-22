import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import ContentAutomationPage from './pages/ContentAutomationPage.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContentAutomationPage />
  </StrictMode>,
);
