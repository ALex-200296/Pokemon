import React, { useContext } from 'react'
import './description.scss'
import DescrPageContent from './DescrPageContent'
import {MainContext} from '../../Context/MainContext'
import Loader from '../Loader/Loader'

const Description = () => {

  const {state} = useContext(MainContext)

  return (
    <div className='descrPage'>
      {
        state.itemLoading ? 
        <DescrPageContent /> :
        <Loader />
      }
    </div>
  )
}

export default Description