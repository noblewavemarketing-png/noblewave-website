import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import AiConsultancyPage from './pages/AiConsultancyPage.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AiConsultancyPage />
  </StrictMode>,
);
