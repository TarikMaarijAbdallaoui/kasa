import Logo from './Logo.js';
import logoHeader from "../img/LOGO.png"
import Navigation from './Navigation.js'

function Header() {
        return (
          <header className="header">
           <Logo props={logoHeader} />
           <Navigation />
          </header>
        );
      }
      
export default Header;