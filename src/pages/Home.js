import BannerTitreHome from '../composants/BannerTitreHome';
import Card from '../composants/Card';
import Data from '../logements.json';
import '../styles/App.scss';

function Home(){
    return (
        <section className='logements'>
            <BannerTitreHome />
            <div className='liste-logements'>
               {
                Data.map((logement) => (
                    <Card key={logement.id} id={logement.id} titre={logement.title} imgCover={logement.cover} />
                ))
               }
            </div>
        </section>
    )
}

export default Home;