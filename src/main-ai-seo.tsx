import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import AiSeoPage from './pages/AiSeoPage.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AiSeoPage />
  </StrictMode>,
);
