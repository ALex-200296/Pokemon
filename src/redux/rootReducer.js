import {combineReducers} from 'redux'
import main from './reducers/main'
import nav from './reducers/nav'
import images from './reducers/images'
import item from './reducers/item'

export default combineReducers({
  nav,
  main,
  images,
  item
})