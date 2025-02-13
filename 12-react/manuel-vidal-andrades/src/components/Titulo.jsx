import React from 'react'
import "./Titulo.css";

export default function Titulo({titulo, precio}) {
  return (
    <h1>Cenar con {titulo} vale {precio} €</h1>
  )
}
