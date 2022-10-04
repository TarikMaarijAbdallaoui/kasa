import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Cards from '../components/Cards'
import home_banner from '../img/IMG.png'

const Home = () => {
        const imagen = {
                url: home_banner,
                text: "Chez vous, partout et ailleurs"
        }

  return (
        <>
                <div className='app'>
                        <Header />
                        <Banner image={imagen} printText={true}/>
                        <Cards />
                </div>
                <Footer />
        </>    

    
  )
}

export default Home
