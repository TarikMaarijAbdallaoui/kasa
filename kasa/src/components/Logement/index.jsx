import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import data from '../../data/logements.json'
import Pill from '../Pill'
import Gallery from '../Gallery'
import Dropdown from '../Dropdown'
import './Logements.css'
import Host from '../Host'
import Stars from '../Rating'

const Logement = () => {
        let details = {}
        let params = useParams()
        let logement = data.find(logement => logement.id === params.id)
        
        if (logement === undefined){
         return <Navigate to={"/not-found"}/>
        } else {
          details = [
            {
              title: 'Description',
              text: logement.description
            },
            {
              title: 'Equipments',
              text: logement.equipments
            }
        ]
        }

        

  return (
    <div className='logement'>
      <Gallery pictures={logement.pictures} />
        <header className='info'>
          <section className="info-logement">
                  <h2>{logement.title}</h2>
                  <p>{logement.location}</p>
                  <div>
                  {logement.tags.map(pill => {
                    return <Pill key={pill} props={pill} />
                  })}
                  </div>
          </section>
          <section className='info-host'>
                  <Host props={logement.host} />
                  <Stars stars={logement.rating} />
          </section>
        </header>
        <section className='details'>
                {details.map((detail, index) => {
                  return <Dropdown key={index} props={detail} />
                })}
        </section>

    </div>
  )
}

export default Logement