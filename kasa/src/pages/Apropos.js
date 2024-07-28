import BannerTitreHome from '../composants/BannerTitreHome';
import DeroulementTexte from '../composants/DeroulementTexte'
import "../styles/App.scss";

function Apropos(){
    const nbrApropos = [
        {id:'0', titre:'Fiabilité', contenu:'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'},
        {id:'1', titre:'Respect', contenu:'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'},
        {id:'2', titre:'Service', contenu:'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'},
        {id:'3', titre:'Sécurité', contenu:'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.'},
    ];
    return (
        <section className='a-propos'>
            <BannerTitreHome />
            <div className="bloc-des-apropos">
                {
                    nbrApropos.map((apropos) => (
                        <DeroulementTexte key={apropos.id} titre={apropos.titre} contenu={apropos.contenu} />
                    ))
                }
            </div>
        </section>
    )
}

export default Apropos;