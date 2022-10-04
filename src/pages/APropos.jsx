import React from 'react'
import Banner from '../components/Banner'
import Dropdown from '../components/Dropdown'
import Footer from '../components/Footer'
import Header from '../components/Header'
import a_propos_banner from '../img/a-propos-img.png'


const A_Propos = () => {
  const imagen = {
    url:a_propos_banner,
    text: "Landscape"
  }

  const apropos = [
    {
      title:"Fiabilité",
      text:"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
    },
    {
      title:"Respect",
      text:"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
      title:"Service",
      text:"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    },
    {
      title:"Sécurité",
      text:"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    },
  ]




  return (
    <>
    <div className="app">

      <Header />
      <Banner image={imagen} printText={false} />
      {apropos.map((item, index) => {
        return <Dropdown key={index} props={item} />
      })}
    </div>
    <Footer />
    </>
  )
}

export default A_Propos