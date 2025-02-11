import './App.css';
import Reiniciar from "./Componentes/Reiniciar"
import NumeroSecreto from "./Componentes/NumeroSecreto"
import Formulario from "./Componentes/Formulario"
import Puntuacion from './Componentes/Puntuacion';

// Diseccionamos el proyecto en componentes y los importamos aquí
function App() {
  return (
    <div className="container">
      <Reiniciar/>

      <h1>¡Adivina mi número!</h1>

      <NumeroSecreto/>
      <br/>
      <Formulario/>
      <Puntuacion/>
    </div>
  );
}

export default App;
