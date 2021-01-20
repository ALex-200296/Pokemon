import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MainContext } from '../../Context/MainContext'


const List = () => {

  const {state} = useContext(MainContext)
  const url = `https://pokeapi.co/api/v2/pokemon/`
  

  const descrHandler = (url) => {
    state.getItem(url)
    state.hideNavHandler()
}

  return ( 
    <div>
      <h2>
       Pokemons List
      </h2>
      <ul>
        {
          Object.keys(state.pokemons).map((pokemon, i) => {
            return (
              <li   key ={i}>
                <NavLink 
                to = {`/item/${state.pokemons[pokemon].name}`} 
                onClick={() => descrHandler(`${url}${i+1}`)}
                >
                  {state.pokemons[pokemon].name}
                </NavLink>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default List