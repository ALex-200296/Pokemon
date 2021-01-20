import React, { useContext } from 'react'
import './description.scss'
import {MainContext} from '../../Context/MainContext'
import GoHome from './GoHome'

const DescriptionTxt = () => {

  const { state } = useContext(MainContext)
  console.log(state.types)

  return (
    <div className="descriptionTxt">
      <div className="descrPageContentName">
        <h2>{state.name}</h2>
      </div>
      <div className="characteristics">
        <ul>
          <li>
            <p>
              height - {state.height}
            </p>
          </li>
          <li>
            <p>
              weight = {state.weight}
            </p>
          </li>
        </ul>
        <p className="types">
          type of pokemon:&nbsp;
          {
            Object.keys(state.types).map((type, i) => {
              return (
                <>
                <strong>{state.types[type].type.name}</strong>
                </>
              )
            })
          }
        </p>
      </div>
      <div className="abilities">
        <p className="types">
         abilities:&nbsp;
          {
            Object.keys(state.abilities).map((type, i) => {

              return (
                <>
                <strong>{state.abilities[type].ability.name}</strong>
                </>
              )
            })
          }
        </p>
      </div>
      <GoHome />
    </div>
  )
}

export default DescriptionTxt