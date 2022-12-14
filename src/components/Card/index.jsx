import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

const Card = ({props}) => {
  return (
    <div className='card'>
      <Link to={`/kasa/FicheLogement/${props.id}`}>
        <div className="image">
                <img src={props.cover} alt={props.title} />
        </div>
        <div className="shadow"></div>
        <div className="text">
                <p>{props.title}</p>
        </div>
      </Link>
    </div>
  )
}

export default Card