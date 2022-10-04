import React from 'react'
import logements from '../../data/logements.json'
import Card from '../Card'
import './Cards.css'

const Cards = () => {
  return (
    <main>
        {logements.map(element => {
               return <Card key={element.id} props={element}/>
        })}
    </main>
  )
}

export default Cards