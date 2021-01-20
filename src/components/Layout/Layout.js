import React, { useContext } from 'react'
import Home from '../Home/Home'
import Mask from '../Mask/Mask'
import Nav from '../Nav/Nav'
import './layout.scss'
import {MainContext} from '../../Context/MainContext'
import Loader from '../Loader/Loader'
import { Redirect, Route} from 'react-router-dom'
import Description from '../Description/Description'

export const Layout = () => {

  const { state } = useContext(MainContext)
  console.log(state.loading)

  return (
    <div className="layout">
      {
        state.loading ? 
        <>
         <Nav />
         <Mask />
         <div className="container">
           
             <Route path = '/' exact component= {Home}/>
             <Route path = '/item/:name' component = {Description}/>
             <Redirect to = '/' />
           
         </div>
        </> : <Loader />
      }
    </div>
  )
}