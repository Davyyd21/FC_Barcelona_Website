import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Team from './pages/Team';
import History from './pages/History';
import Kits from './pages/Kits';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/history" element={<History />} />
        <Route path="/kits" element={<Kits />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);