import React from 'react';
import Contact from './components/Contact';
import Delivery from './components/Delivery';
import About from './components/About';
import Sale from './components/Sale';
import Home from './components/Home';
import CarsClass from './components/CarsClass';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
          <Route path="delivery" element={<Delivery />} />
          <Route path="about" element={<About />} />
          <Route path="sale" element={<Sale />} />
          <Route path="/:id" element={<CarsClass />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
