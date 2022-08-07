import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Page404 = () => {
  return (
    <>
    <div className='app'>
        <Header />
        <p className='giant'>404</p>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to='/'>Retourner sur la page d’accueil</Link>
    </div>
    <Footer />
    </>
  )
}

export default Page404