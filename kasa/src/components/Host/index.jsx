import React from 'react'
import './Host.css'

const Host = ({props}) => {
  return (
    <div className='profile'>
      <div className='name'>
        <span>
          {props.name.split(' ')[0]} <br /> {props.name.split(' ')[1]}
        </span>
      </div>
      <img src={props.picture} alt={props.name} />
    </div>
  )
}

export default Host