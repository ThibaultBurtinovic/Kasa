import './Cards.scss'
import { Link } from 'react-router-dom'

export default function Cards({id, title, cover}) {

	return (
		<Link to={`/annonces/${id}`} className="galleryCard">
			<img src={cover} alt={title} />
			<div className='gradiant'></div>
			<h3>{title}</h3>	
		</Link>
	)
}