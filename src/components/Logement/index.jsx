import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../../data/logements.json'

const Logement = () => {
        let params = useParams()
        let logement = data.filter(logement => logement.id === params.id)




  return (
    <div className='logement'>
        <section className="info-logement">
                <h2>{logement.title}</h2>
        </section>
    </div>
  )
}

export default Logement