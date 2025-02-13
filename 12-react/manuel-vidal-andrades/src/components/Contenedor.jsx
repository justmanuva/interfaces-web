import React from 'react'
import "./Contenedor.css";

export default function Contenedor({famoso, seleccionar}) {
  return (
    <div className='contenedor' style={{backgroundColor: famoso.color}}>
        <h3>{famoso.nombre} {famoso.apellido}</h3>
        <input onClick={seleccionar} type="button" value="Seleccionar"/>
        <h3 hidden>{famoso.precio}</h3>
    </div>
  )
}
