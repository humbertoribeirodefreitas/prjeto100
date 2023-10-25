import React from 'react'
import logo from './logo.png'

export default function page() {
  const canal=()=>{
    return ('cfb cursos')
  }
  function cusos(){
    return 'cursos de react'
  }
  return{

    <section>
    <p>{'canal '+ canal()}</p>
    <p>{loadCustomRoutes()}</p>
    <img src={logo} alt="logo" />
    </section>
  }
}


