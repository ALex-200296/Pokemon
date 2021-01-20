import React, { useContext } from 'react'
import './description.scss'
import {MainContext} from '../../Context/MainContext'
import DescriptionTxt from './DescriptionTxt'

const DescrPageContent = () => {

  const { state } = useContext(MainContext)

  return (
    <div className="descrPageContent">
      <div className="descrPageContentImg">
        <img src={state.images[state.name]} alt = {state.name}/>
      </div>
      <DescriptionTxt />
    </div>
  )
}

export default DescrPageContent