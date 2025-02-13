import './App.css';
import React, { useState } from 'react'
import Contenedores from './components/Contenedores';
import Titulo from './components/Titulo';

function App() {
  
  let famosos = [
    { nombre: "Pablo",
      apellido: "Alborán",
      color: "red",
      precio: 100
    },
    { nombre: "Aitana",
      apellido: "",
      color: "purple",
      precio: 120
    },
    { nombre: "Abraham",
      apellido: "Mateo",
      color: "blue",
      precio: 140
    },
    { nombre: "Ana",
      apellido: "Mena",
      color: "violet",
      precio: 150
    },
    { nombre: "Manuel",
      apellido: "Carrasco",
      color: "green",
      precio: 125
    },
    { nombre: "Rosalía",
      apellido: "",
      color: "orange",
      precio: 180
    }
  ];

  const [titulo, setTitulo] = useState("nadie");
  const [precio, setPrecio] = useState(0);

  const seleccionar = (e) => {
    e.target.parentNode.style.display = "none";

    setTitulo(`${titulo} ${e.target.parentNode.firstChild.textContent}, `);
    setPrecio(precio + Number(e.target.parentNode.lastChild.textContent));
    console.log(e.target.parentNode.firstChild.textContent);
  }
  
  return (
    <>
    <Titulo titulo={titulo} precio={precio}/>
    <Contenedores famosos={famosos} seleccionar={seleccionar}/>
    </>
    
  );
}

export default App;
