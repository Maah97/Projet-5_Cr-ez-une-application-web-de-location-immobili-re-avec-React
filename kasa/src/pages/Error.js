import '../styles/App.scss'
import { Link } from 'react-router-dom'

function Error(){
    return (
        <section className="page-error">
            <p className='number-error'>404</p>
            <p  className='txt-error'>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className='lien-page-accueil'>Retourner sur la page d’accueil</Link>
        </section>
    )
}

export default Error;
