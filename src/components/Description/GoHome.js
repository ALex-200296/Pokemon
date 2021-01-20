import React from 'react'
import { NavLink } from 'react-router-dom'
import './description.scss'

const GoHome = () => {

  return (
    <div className="goHome">
      <div className="btn">
        <NavLink to = '/'>Главная</NavLink>
      </div>
    </div>
  )
}

export default GoHome