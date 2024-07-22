import '../styles/App.scss';
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
 
function Header() {
    return (
        <header>
            <img src={logo} alt="logo Kasa" />
            <nav>
                <Link className='nav-acceuil' to="/">Accueil</Link>
                <Link className='nav-apropos' to="/apropos">A propos</Link>
            </nav>
        </header>
        
    )
}

export default Header