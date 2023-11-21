import "./Accommodation.scss";
import React, { useState, useEffect } from 'react';
import Rate from "../../assets/_Rate.svg";
import RateRED from "../../assets/_RateRED.svg";
import Collaspse from "../../components/Collapse"

export default function Accommodation({ lastSegment }) {
  const [datas, setDatas] = useState([]);
  const [filteredData, setFilteredData] = useState(null);

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

  useEffect(() => {

    const newFilteredData = datas.filter(data => data.id === lastSegment);
    setFilteredData(newFilteredData.length > 0 ? newFilteredData[0] : null);
  }, [datas, lastSegment]);



  // equipement en format ul/li  
  function formatEquipments(equipments) {
    return (
      <ul>
        {equipments.map((equipment, index) => (
          <li key={index}>{equipment}</li>
        ))}
      </ul>
    );
  }

  return (

    <div className="accommodation">
      {filteredData && (
        <>
          <div className="allInfo">
            <div className="textInfo">
              <h2 className="title">{filteredData.title}</h2>
              <h3 className="subTitle">{filteredData.location}</h3>

              <div className="tags">
                <ul className="ulTags">
                  {filteredData.tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="otherInfo">
              <div className="host">
                <span>{filteredData.host.name}</span>
                <img src={filteredData.host.picture} alt={`Host ${filteredData.host.name}`} />
              </div>

              <div className="rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <img
                    key={star}
                    src={star <= filteredData.rating ? RateRED : Rate}
                    alt={`Star ${star}`}
                    className={star <= filteredData.rating ? 'red' : 'gray'}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="collaspseInfo">
            <div className="callaspseDescription">
              <Collaspse texte='Description' content={filteredData.description}></Collaspse>
            </div>
            <div className="callaspseEquipements">
              <Collaspse texte='Équipements' content={formatEquipments(filteredData.equipments)}></Collaspse>
            </div>
          </div>


        </>
      )}
    </div>
  )
}