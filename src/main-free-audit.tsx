import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import FreeAuditPage from './pages/FreeAuditPage.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FreeAuditPage />
  </StrictMode>,
);
