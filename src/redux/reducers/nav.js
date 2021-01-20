import {SHOW_NAV, HIDE_NAV} from '../actionTypes'

const initialState = {
  isOpen: false
}

const nav = (state = initialState, action) => {
  switch(action.type) {
    case SHOW_NAV:
      return {
        isOpen: true
      }
    case HIDE_NAV:
      return {
        isOpen: false
      }  

    default: 
    return state
  }
}

export default nav;