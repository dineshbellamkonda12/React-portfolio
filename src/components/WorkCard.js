import './WorkCardStyles.css'
import { NavLink } from 'react-router-dom'

import React from 'react'

const WorkCard = (props) => {
  return (
    <div className='project-card'>
    <img src={props.imgsrc} alt='imagesrc1'></img>
    <h2 className='project-title'>{props.title}</h2>
    <div className='pro-details'>
        <p>{props.text}</p>
        <div className='pro-btns'>
            <NavLink to={props.view} target="_blank" className="btn">View</NavLink>
        </div>
    </div>
</div>
  )
}

export default WorkCard