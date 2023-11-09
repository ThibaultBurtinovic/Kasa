import "./banner.scss";
import React from "react";


export default function Banner({image,texte}) {
  
  return(
    <div className="banner">
        <img className="banner-img" src={image} alt="Bannière"/>
        <div className="banner-dark"></div>
        <span className="banner-txt">{texte}</span>
    </div>
);

}
