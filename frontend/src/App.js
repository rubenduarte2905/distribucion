import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/layout/Header.js';
import Nav from './components/layout/Nav.js';
import Footer from './components/layout/Footer.js';

import ContactoPage from './pages/ContactoPage.js';
import HomePage from './pages/HomePage.js';
import DistribucionPage from './pages/DistribucionPage.js';
import ComprasPage from './pages/ComprasPage.js';

import './App.css';

function App() {
  return (

    <div className="App">
      
       <Header />
       
        <BrowserRouter> 
            <Nav />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="compras" element={<ComprasPage />} />
                <Route path="distribucion" element={<DistribucionPage />} />
                <Route path="contacto" element={<ContactoPage />} />
              </Routes>
        </BrowserRouter>
        <Footer />
    </div>


  );
}

export default App;
