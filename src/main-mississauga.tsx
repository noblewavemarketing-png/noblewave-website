import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import MississaugaPage from './pages/MississaugaPage.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MississaugaPage />
  </StrictMode>,
);
