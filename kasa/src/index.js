import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Apropos from './pages/Apropos'
import Fichelogment from './pages/Fichelogement'
import Error from './pages/Error'
import Header from "./composants/Header";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/fichelogement" element={<Fichelogment />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

