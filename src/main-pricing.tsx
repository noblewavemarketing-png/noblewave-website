import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import PricingPage from './pages/PricingPage.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PricingPage />
  </StrictMode>,
);
