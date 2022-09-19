import Logo from './Logo';
import logoHeader from "../../img/LOGO.png"
import Navigation from './Navigation'
import './Header.css'

function Header() {
        return (
          <header className="header">
           <Logo props={logoHeader} />
           <Navigation />
          </header>
        );
      }
      
export default Header;