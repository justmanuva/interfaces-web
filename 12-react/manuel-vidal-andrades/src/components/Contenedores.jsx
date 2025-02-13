import React from 'react'
import Contenedor from "./Contenedor";
import "./Contenedores.css"

export default function Contenedores({famosos, seleccionar}) {
  return (
    <div className='contenedores'>
        <Contenedor famoso={famosos[0]} seleccionar={seleccionar}/>
        <Contenedor famoso={famosos[1]} seleccionar={seleccionar}/>
        <Contenedor famoso={famosos[2]} seleccionar={seleccionar}/>
        <Contenedor famoso={famosos[3]} seleccionar={seleccionar}/>
        <Contenedor famoso={famosos[4]} seleccionar={seleccionar}/>
        <Contenedor famoso={famosos[5]} seleccionar={seleccionar}/>
    </div>
  )
}
