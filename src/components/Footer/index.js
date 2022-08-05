import React from 'react'
import Logo from '../Logo'
import './Footer.css'

const Footer = () => {
  const logoFooter = "./img/logo-footer.png"
  return (
    <footer>
      <Logo props={logoFooter} />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer