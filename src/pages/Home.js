import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'

const Home = () => {
        const imagen = {
                url: './img/IMG.png',
                text: "Beautiful landscape"
        }

  return (
        <div className='app'>
                <Header />
                <Banner props={imagen}/>
        </div>
    
  )
}

export default Home
