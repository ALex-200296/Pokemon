import { FETCH_ITEM, LOAD_ITEM } from "../actionTypes";

const initialState = {
  name: '',
  height: '',
  weight: '',
  abilities: '',
  type: '',
  itemLoading: false
}

const item = (state = initialState, action) => {

  switch(action.type) {

    case FETCH_ITEM:
      return {
        ...state,
        name: action.payload.name,
        height: action.payload.height,
        weight: action.payload.weight,
        abilities: action.payload.abilities,
        type: action.payload.types
      }

    case LOAD_ITEM: 
        return {
          ...state,
          itemLoading: true
        }

    default:
      return state
  }

}

export default item;