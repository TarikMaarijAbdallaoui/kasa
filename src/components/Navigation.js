import {NavLink} from 'react-router-dom'
function Navigation() {
        return (
          <nav className="nav">
            <NavLink to="/">
            Accueail
            </NavLink>

            <NavLink to='/a-propos'>A Propos</NavLink>
          </nav>
        );
      }
      
export default Navigation;