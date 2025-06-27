import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import X3DPage from './x3d';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Root = () => (
  <BrowserRouter basename="/MiGustoLovers">
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/x3d" element={<X3DPage />} />
      <Route path="*" element={<div style={{color: '#FFD700', textAlign: 'center', marginTop: '2rem'}}>Página no encontrada</div>} />
    </Routes>
  </BrowserRouter>
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
