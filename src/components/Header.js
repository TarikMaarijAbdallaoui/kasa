import Logo from './Logo.js';
import Navigation from './Navigation.js'

function Header() {
  const logoHeader = "./img/LOGO.png"
        return (
          <header className="header">
           <Logo props={logoHeader} />
           <Navigation />
          </header>
        );
      }
      
export default Header;