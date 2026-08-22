import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import AiVoicePage from './pages/AiVoicePage.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AiVoicePage />
  </StrictMode>,
);
