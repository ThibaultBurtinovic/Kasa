import React, { useEffect, useState } from 'react';
import Carousel from "../../components/Carousel";
import Accommodation from "../../components/InfoAccommodation";
import Erreur404 from '../../pages/404'; 

function Annonces() {
    const [lastSegment, setLastSegment] = useState('');
    const [datas, setDatas] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const [dataFetched, setDataFetched] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/annonces.json');
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
        const currentURL = window.location.pathname;
        const segment = currentURL.substring(currentURL.lastIndexOf('/') + 1);
        setLastSegment(segment);
    }, []);

    useEffect(() => {
        const foundData = datas.find(data => data.id === lastSegment);

        if (!foundData) {
            setNotFound(true);
        } else {
            setNotFound(false);
        }
    }, [datas, lastSegment]);

    if (notFound && dataFetched) {
        return <Erreur404 />;
    }

    return (
        <section className='annonces'>
            <Carousel lastSegment={lastSegment}></Carousel>
            <Accommodation lastSegment={lastSegment}></Accommodation>
        </section>
    );
}

export default Annonces;
