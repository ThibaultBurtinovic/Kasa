import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Importez le composant Home
import APropos from './pages/A-Propos'; // Importez le composant APropos
import Erreur404 from './pages/404'; // Importez le composant Erreur404
import Annonces from './pages/Annonces'; // Importez le composant APropos


import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/Annonces" element={<Annonces />} />

        <Route path="*" element={<Erreur404 />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;