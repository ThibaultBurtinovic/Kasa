import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import APropos from './pages/A-Propos'; 
import Erreur404 from './pages/404'; 
import Annonces from './pages/Annonces'; 


import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/Annonces/:annonceId" element={<Annonces />} />
        <Route path="*" element={<Erreur404 />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;