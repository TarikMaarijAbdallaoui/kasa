import React from 'react'
import logements from '../data/logements.json'
import Card from './Card'

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