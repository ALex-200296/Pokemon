import { FETCH_IMAGES } from "../actionTypes"

const initialState = {
  images: ''
}

const images = (state = initialState, action) => {
  switch(action.type) {

    case FETCH_IMAGES: 
    return {
      ...state,
      images: action.payload
    }

    default:
      return state
  }
}

export default images