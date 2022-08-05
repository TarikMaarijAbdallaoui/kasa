import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import A_Propos from './pages/A_Propos';
import Home from './pages/Home'
import Page404 from './pages/Page404'


import './styles.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/a-propos' element={<A_Propos />} />
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
