import React from 'react'

export default function Formulario() {
  return (
    <div class="guess-section">
        <input type="number" id="guess" placeholder="Número" min="1" max="20"/>
        <button onclick="checkGuess()">Check!</button>
    </div>
  )
}
