import React from 'react'
import Mensaje from "./Mensaje";
import LineaPuntuacion from "./LineaPuntuacion";

export default function Puntuacion() {
  return (
    <div class="score-section">
        <br/>
        <Mensaje/>
        <br/>
        {/*Le pasamos parámetros y los ajustamos en LineaPuntuacion*/}
        <LineaPuntuacion etiqueta="Puntuacion:" id="score" numero="20"/>
        <LineaPuntuacion etiqueta="Puntaje Alto" id="highscore" numero="0"/>
        <p>Puntaje Alto: <span id="highscore">0</span></p>
    </div>
  )
}
