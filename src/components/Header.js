import Logo from './Logo.js';
import Navigation from './Navigation.js'

function Header() {
        return (
          <header className="header">
           <Logo />
           <Navigation />
          </header>
        );
      }
      
export default Header;