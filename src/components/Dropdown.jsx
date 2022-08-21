import React, { useState } from 'react'
import '../styles/dropdown.css'

const Dropdown = (props) => {
const {title, content} = props
  const [open, setOpen] = useState(false)

  const Texte = () => {
        return (
                <div className="container-block">
                        <div className="content-block">
                                <p>{content}</p>
                        </div>
                </div>
        )
  }

  return (
    <div className='dropdown'>
        <div className="launcher" onClick={() => setOpen(!open)}>
                <p>{title}</p>
        </div>  
        {open && <Texte />}

    </div>
  )
}

export default Dropdown