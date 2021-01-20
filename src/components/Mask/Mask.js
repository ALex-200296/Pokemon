import React, { useContext} from 'react'
import { MainContext } from '../../Context/MainContext'
import './mask.scss'

const Mask = () => {

  const {state} = useContext(MainContext)

  const cls = ['mask']

  if(state.isOpen) {
    cls.push('maskShow')
  }

  return (
    <div className={cls.join(' ')}>

    </div>
  )
}

export default Mask