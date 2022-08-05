import React from 'react'
import Banner from '../components/Banner'
import Header from '../components/Header'

const A_Propos = () => {
  const imagen = {
    url:'./img/a-propos-img.png',
    text: "Landscape"
  }
  return (
    <>
      <Header />
      <Banner props={imagen} />
    </>
  )
}

export default A_Propos