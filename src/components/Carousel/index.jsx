import ArrowRight from "../../assets/ArrowRight.svg";
import ArrowLeft from "../../assets/ArrowLeft.svg";
import "./Carousel.scss";
import React, { useState, useEffect } from 'react';

export default function Carousel({ lastSegment }) {
  const [datas, setDatas] = useState([]);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/ThibaultBurtinovic/Kasa/gh-pages/annonce.json');
        const data = await response.json();
        setDatas(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const filteredPictures = datas.filter(data => data.id === lastSegment);

  const nextSlide = () => {
    setSlide(slide === filteredPictures[0].pictures.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? filteredPictures[0].pictures.length - 1 : slide - 1);
  };

  return (
    <div className="carrousel">
      <div className="arrow">
        <img src={ArrowLeft} alt="Left" className='arrow arrowLeft' onClick={prevSlide}></img>
        <img src={ArrowRight} alt="Right" className='arrow arrowRight' onClick={nextSlide}></img>
      </div>
      <div className="slideInfo">
      {`${slide + 1} / ${filteredPictures.length > 0 ? filteredPictures[0].pictures.length : 0}`}
    </div>
      {filteredPictures.length > 0 && (
        <div key={filteredPictures[0].id}>
          {filteredPictures[0].pictures.map((picture, index) => (
            <img key={index} src={picture} alt={`Picture ${index}`} className={slide === index ? "slide" : "slide slide-hidden"} />
          ))}
        </div>
      )}
    </div>
  );
}
