import '../styles/App.scss';
import logo from '../assets/logo.svg';
import { NavLink } from 'react-router-dom';
 
function Header() {
    return (
        <header>
            <img src={logo} className='logo' alt="logo Kasa" />
            <nav>
                <NavLink className='nav-acceuil' to="/">Accueil</NavLink>
                <NavLink className='nav-apropos' to="/apropos">A propos</NavLink>
            </nav>
        </header>
    )
};

export default Header;