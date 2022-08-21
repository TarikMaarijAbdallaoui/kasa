import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../../data/logements.json'
import Gallery from './Gallery'

const Logement = () => {
        let params = useParams()
        let logement = data.filter(logement => logement.id === params.id)
        logement = logement[0]


  return (
    <div className='logement'>
        <Gallery pictures={logement.pictures} />
        <section className="info-logement">
                <h2>{logement.title}</h2>
        </section>
    </div>
  )
}

export default Logement