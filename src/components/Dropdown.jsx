import React, { useState } from 'react'

const Dropdown = () => {
  const [open, setOpen] = useState(false)


  return (
    <div className='dropdown'>
        <div className="launcher" onClick={() => setOpen(!open)}>
                <p>Titulo</p>
        </div>

    </div>
  )
}

export default Dropdown