
import Collaspse from "../../components/Collapse"
import Banner from "../../components/Banner";
import AProposBanner from "../../assets/AProposBanner.jpg";
import "./APropos.scss";

function APropos(){
    return (
        <section className="APropos">
            <Banner image={AProposBanner}></Banner>
            <div className="allCollaspse">
            <Collaspse texte='Fiabilité' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'></Collaspse>
            <Collaspse texte='Respect' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'></Collaspse>
            <Collaspse texte='Service' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'></Collaspse>
            <Collaspse texte='Sécurité' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'></Collaspse>
            </div>
        </section> 
    )
}

export default APropos