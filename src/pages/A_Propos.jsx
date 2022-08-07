import React from 'react'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'

const A_Propos = () => {
  const imagen = {
    url:'./img/a-propos-img.png',
    text: "Landscape"
  }
  return (
    <>
    <div className="app">

      <Header />
      <Banner props={imagen} />
    </div>
    <Footer />
    </>
  )
}

export default A_Propos