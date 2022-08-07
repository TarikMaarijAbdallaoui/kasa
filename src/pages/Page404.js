import React from 'react'
import Header from '../components/Header'

const Page404 = () => {
  return (
    <div className='app'>
        <Header />
        <p className='giant'>404</p>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <a href='/'>Retourner sur la page d’accueil</a>
    </div>
  )
}

export default Page404