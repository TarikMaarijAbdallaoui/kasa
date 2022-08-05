import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

const Home = () => {
        const imagen = {
                url: './img/IMG.png',
                text: "Beautiful landscape"
        }

  return (
        <div className='app'>
                <Header />
                <Banner props={imagen}/>
                <Footer />
        </div>
    
  )
}

export default Home
