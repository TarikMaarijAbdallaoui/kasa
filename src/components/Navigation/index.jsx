import {NavLink} from 'react-router-dom'
import './Navigation.css'

function Navigation() {
        return (
          <nav className="nav">
            <NavLink to="/kasa">
            Accueil
            </NavLink>
          
            <NavLink to='/kasa/a-propos'>A Propos</NavLink>
          </nav>
        );
      }
      
export default Navigation;