import "./404.scss";
import { Link } from 'react-router-dom'

function Erreur404(){
    return (
        <div className="p404">
            <span className="erreur404">404</span>
            <span className="textOups">Oups! La page que vous demandez n'existe pas.</span>
            <Link to='/Kasa'>
            <button className="link">Retourner sur la page d’accueil</button>
            </Link>

        </div>
    )
}

export default Erreur404