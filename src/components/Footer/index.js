import React from 'react'
import Logo from '../Header/Logo'
import logoFooter from "../../img/logo-footer.png"
import './Footer.css'

const Footer = () => {
  
  return (
    <footer>
      <Logo props={logoFooter} />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer