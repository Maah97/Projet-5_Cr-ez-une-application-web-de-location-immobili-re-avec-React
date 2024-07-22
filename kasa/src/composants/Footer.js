import '../styles/App.scss';
import logoFooter from "../assets/logoFooter.svg";
 
function Footer() {
    return (
        <footer>
            <img className='logo-footer' src={logoFooter} alt="logo kasa au footer" />
            <p className='txt-footer'><i class="fa-regular fa-copyright"></i> 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer