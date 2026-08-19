import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import AiStrategySessionPage from './pages/AiStrategySessionPage.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AiStrategySessionPage />
  </StrictMode>,
);
