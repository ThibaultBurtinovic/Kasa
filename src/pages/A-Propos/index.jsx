
import Collaspse from "../../components/Collapse"
import Banner from "../../components/Banner";
import AProposBanner from "../../assets/AProposBanner.jpg";
import "./APropos.scss";

function APropos(){
    return (
        <section className="APropos">
            <Banner image={AProposBanner}></Banner>
            <div className="allCollaspse">
            <Collaspse texte='Fiabilité' content='Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'></Collaspse>
            <Collaspse texte='Respect' content='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'></Collaspse>
            <Collaspse texte='Service' content='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'></Collaspse>
            <Collaspse texte='Sécurité' content='La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à lhôte quau locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.'></Collaspse>
            </div>
        </section> 
    )
}

export default APropos