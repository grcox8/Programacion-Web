import { useEffect, useState } from 'react'
import './App.css'
import Test from './components/test'

function App() {

  const [characters, setCharacters]= useState([])
 //las ayudas del teclado se activan con ctrl + espacio

  //armar una lista con dos objetos adentro con nombre y curso, pasarla por prop y mostrarla del otro lado 

  const estudiantes = [{nombre: "nahiara", curso: "5 d"},{nombre: "valentina", curso: "5d"}]
  
  useEffect(()=> {
    fetch("https://rickandmortyapi.com/api/character")
      .then(data => data.json())
      .then(response => setCharacters(response.results))
  },[])
  
  return (
    <>
    {
      /*
      <Saludo  nombre={"Fede"}/>
      <Productos listaProductos={lista}/>
    */}
    {characters ? characters.map((item,index) => (
      <div key={item.id}>
        <h3>{item.name}</h3>
        <img src={item.image} alt="" />
      </div>
    )) : <>cargando....</>}
      
      <Test edad={1} estudiantes={estudiantes}/>
    </>
  )
}

//return de la funcion/componente muestra/renderiza en la pantalla 
export default App
