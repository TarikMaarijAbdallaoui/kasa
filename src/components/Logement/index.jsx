import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../../data/logements.json'
import Gallery from './Gallery'

const Logement = () => {
        let params = useParams()
        let logement = data.find(logement => logement.id === params.id)

        const details = [
          {
            title: 'Description',
            text: logement.description
          },
          {
            title: 'Equipments',
            text: logement.equipments
          }
      ]

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