import {NavLink} from 'react-router-dom'
import './Navigation.css'

function Navigation() {
        return (
          <nav className="nav">
            <NavLink to="/">
            Accueil
            </NavLink>
          
            <NavLink to='/a-propos'>A Propos</NavLink>
          </nav>
        );
      }
      
export default Navigation;