import React, {useContext} from 'react'
import './nav.scss'
import {NavLink} from 'react-router-dom'
import { MainContext } from '../../Context/MainContext'
import List from '../List/List'

const Nav = () => {
  
  const {state} = useContext(MainContext)

  return (
    <div className="navWrapper"  style = {{width: !state.isOpen ? '1rem':'25%', height: !state.isOpen ? '1rem': '1000px'}}>


      <div className="nav" style={{width: !state.isOpen ? '0px':'100%'}}>
        <div className="navHead">
          <i className='fa fa-times' 
          style={{display: state.isOpen ? 'block' : 'none'}}
          onClick = {state.hideNavHandler}/>
        </div>
        <div className="navBar"
        style={{display: state.isOpen ? 'block' : 'none'}}>
          <ul>
            <li onClick = {state.hideNavHandler}><NavLink to= '/'>Главная</NavLink></li>
          </ul>
          <List />
        </div>
      </div>
      <div className="navArrow"
      style ={{display: !state.isOpen ? 'block': 'none'}}>
        <i className='fa fa-arrow-right' 
        style ={{display: !state.isOpen ? 'block' : 'none'}}
        onClick = {state.showNavHandler}/>
      </div>
    </div>
  )
}

export default Nav