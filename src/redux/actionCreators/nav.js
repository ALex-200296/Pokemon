import {SHOW_NAV, HIDE_NAV} from '../actionTypes'

export function showNav() {
  return {
    type: SHOW_NAV
  }
}

export function hideNav() {
  return {
    type: HIDE_NAV
  }
}