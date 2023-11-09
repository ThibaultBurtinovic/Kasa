import React, { useState, useEffect } from 'react';
import Icon from "../../assets/arrow.svg";
import './Collaspse.scss'

export default function Collapse({texte, content}){

  const [active, setActive] = useState(false)

  const handleToggle = (e) =>{
    setActive(!active)

  }

  return (
    <div className ={ `collaspse ${active && "active"}`}>
      <h3 className="collapseTitle" onClick={handleToggle}>{texte}</h3>
      <span className='collaspseIcon'onClick={handleToggle}><img src={Icon} alt="icon" /></span>
      <h4 className="collapseContent">{content}</h4>
    </div>
  )
}