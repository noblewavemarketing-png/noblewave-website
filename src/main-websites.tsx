import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import WebsitesPage from './pages/WebsitesPage.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WebsitesPage />
  </StrictMode>,
);
