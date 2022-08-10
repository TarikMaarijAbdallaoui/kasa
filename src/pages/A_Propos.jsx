import React from 'react'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import a_propos_banner from '../img/a-propos-img.png'

const A_Propos = () => {
  const imagen = {
    url:a_propos_banner,
    text: "Landscape"
  }
  return (
    <>
    <div className="app">

      <Header />
      <Banner image={imagen} printText={false} />
    </div>
    <Footer />
    </>
  )
}

export default A_Propos