import React, { useState } from 'react'
import './Dropdown.css'

const Dropdown = ({props}) => {
        const item = props
  let block;
  const [open, setOpen] = useState(false)

  const Li = ({props}) => <li>{props}</li>

  const openIcon = <i className='fa fa-angle-down fa-2x'></i>
  const closeIcon = <i className='fa fa-angle-up fa-2x'></i>

  const Texte = () => {
        return (
                <div className="container-block">
                        <div className="content-block">
                                <p>{item.text}</p>
                        </div>
                </div>
        )
  }

  if (typeof  item.text === "string") {
        block = Texte()
  } else if (Array.isArray(item.text)) {                
        block=(
                <div className='container-block'>
                       <div className="content-block">
                                <ul>
                                        {item.text.map((element, index)=>{
                                                return <Li key={index} props={element} />
                                        })}
                                </ul>
                        </div>  
                </div>
        )
  }

  return (
    <div className='dropdown'>
        <div className="launcher" onClick={() => setOpen(!open)}>
                {item.title} {open ? closeIcon : openIcon}
        </div>  
        {open && block}

    </div>
  )
}

export default Dropdown