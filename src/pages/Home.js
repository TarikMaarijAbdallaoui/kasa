import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Cards from '../components/Cards'

const Home = () => {
        const imagen = {
                url: '/img/IMG.png',
                text: "Beautiful landscape"
        }

  return (
        <>
                <div className='app'>
                        <Header />
                        <Banner props={imagen}/>
                        <Cards />
                </div>
                <Footer />
        </>    

    
  )
}

export default Home
