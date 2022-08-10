import React from 'react'

const Card = ({props}) => {
  return (
    <div className='card'>
        <div className="image">
                <img src={props.cover} alt={props.title} />
        </div>
        <div className="shadow"></div>
        <div className="text">
                <p>{props.title}</p>
        </div>
    </div>
  )
}

export default Card