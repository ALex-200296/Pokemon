import React from 'react'
import './loader.scss'

const Loader = () => {

  return (
    <div 
      className="lds-facebook"
      style = {{margin: '100px auto', display: 'flex', justifyContent: 'center'}}
    >

      <div></div><div></div><div></div></div>
  )
} 


export default Loader