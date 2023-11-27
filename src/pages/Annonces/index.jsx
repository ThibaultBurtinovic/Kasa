import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Carousel from "../../components/Carousel";
import Accommodation from "../../components/InfoAccommodation";
import Erreur404 from '../../pages/404';

function Annonces() {
    const { annonceId } = useParams();
    const [datas, setDatas] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const [dataFetched, setDataFetched] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://raw.githubusercontent.com/ThibaultBurtinovic/Kasa/gh-pages/annonce.json');
                const data = await response.json();
                setDatas(data);
                setDataFetched(true);
            } catch (error) {
                console.error('Erreur lors du chargement des données :', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const foundData = datas.find(data => data.id === annonceId);

        if (!foundData) {
            setNotFound(true);
        } else {
            setNotFound(false);
        }
    }, [datas, annonceId]);

    if (notFound && dataFetched) {
        return <Erreur404 />;
    }

    return (
        <section className='annonces'>
            <Carousel lastSegment={annonceId}></Carousel>
            <Accommodation lastSegment={annonceId}></Accommodation>
        </section>
    );
}

export default Annonces;
