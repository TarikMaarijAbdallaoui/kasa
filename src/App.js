import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import APropos from './pages/APropos';
import Home from './pages/Home'
import Page404 from './pages/Page404'
import FicheLogement from './pages/FicheLogement';


import './styles.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/a-propos' element={<APropos />} />
        <Route path="FicheLogement/:id" element={<FicheLogement />} />
        <Route path='*' element={<Page404 />} />
    </Routes>
    </BrowserRouter>
    // <div className="App">
    //  <Header />
    //  <Banner />
    // </div>
  );
}

export default App;
