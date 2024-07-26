import Rating from '../composants/Rating';
import Tags from "../composants/Tags";
import DeroulementTexte from '../composants/DeroulementTexte'

function Fichelogement(){
    return (
        <section className="fiche-logement">
            <div className="caroussel-pitures">
                <div className="fleche-precedent"><i class="fa-solid fa-chevron-left"></i></div>
                <p className="pagination">1/4</p>
                <div className="fleche-suivant"><i class="fa-solid fa-chevron-right"></i></div>
            </div>
            <div className="titre-localisation-proprietaire">
                <div className="titre-et-localisation">
                    <p className="titre">Cozy loft on the Canal Saint-Martin</p>
                    <p className="localisation">Paris, Île-de-France</p>
                </div>
                <div className="proprietaire">
                    <p className="nom">Alexandre Dumas</p>
                    <div className="photo"></div>
                </div>
            </div>
            <div className="tag-rating">
                <Tags />
                <Rating />
            </div>
            <DeroulementTexte />
        </section>
    )
}

export default Fichelogement;