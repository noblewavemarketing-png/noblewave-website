import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import LeadGenerationPage from './pages/LeadGenerationPage.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LeadGenerationPage />
  </StrictMode>,
);
