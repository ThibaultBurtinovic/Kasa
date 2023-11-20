import React, { useState, useEffect } from 'react';
import Cards from '../Cards';
import './Gallery.scss'



function Gallery() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/annonce.json');
        const data = await response.json();
        setDatas(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="homeGallery">
      {datas.map(data => (
        <Cards
          key={data.id}
          id={data.id}
          title={data.title}
          cover={data.cover}
        />
      ))}
    </main>
  );
}

export default Gallery;
