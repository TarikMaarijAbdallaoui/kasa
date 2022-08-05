import {NavLink} from 'react-router-dom'
function Navigation() {
        return (
          <nav className="nav">
            <NavLink to="/">
            Accueail
            </NavLink>

            <NavLink to='/yu'>A Propos</NavLink>
          </nav>
        );
      }
      
export default Navigation;