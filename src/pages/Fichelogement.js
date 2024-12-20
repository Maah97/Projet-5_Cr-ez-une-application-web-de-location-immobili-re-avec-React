import Rating from '../composants/Rating';
import Tags from "../composants/Tags";
import DeroulementTexte from '../composants/DeroulementTexte'
import { useParams } from 'react-router-dom';
import Data from '../logements.json';
import Error from './Error';
import Caroussel from '../composants/Caroussel';

function Fichelogement(props){
    const {id} = useParams();
    const logement = Data.find(item => item.id === id);
    if (logement === undefined) {
        return <Error />
    }
    const listeEquipement = logement.equipments.map((item)=><span>{item}</span>);
    return (
        <section className="fiche-logement">
            <Caroussel key={logement.id} pictures={logement.pictures}/>
            <div className="titre-localisation-proprietaire">
                <div className="titre-et-localisation">
                    <p className="titre">{logement.title}</p>
                    <p className="localisation">{logement.location}</p>
                </div>
                <div className="proprietaire">
                    <p className="nom">{logement.host.name}</p>
                    <div className="photo"><img src={logement.host.picture} alt="proprietaire" /></div>
                </div>
            </div>
            <div className="tag-rating">
                <div className="bloc-tags">
                    {
                        logement.tags.map((tag,i) =>
                            <Tags key={i} Tag={tag} />
                        )
                    }
                </div>
                <Rating key={logement.id} note={logement.rating} />
            </div>
            <div className="description-equipement">
                <DeroulementTexte key={`${logement.id}1`} titre='Description' contenu={logement.description} />
                <DeroulementTexte key={logement.id} titre='Équipements' contenu={listeEquipement} />
            </div>
        </section>
    )
}

export default Fichelogement;