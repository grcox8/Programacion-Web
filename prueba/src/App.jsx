import './App.css'
import  Saludo  from './components/saludo'
import Productos from './components/producto'

function App() {
 //las ayudas del teclado se activan con ctrl + espacio

 const lista = [1,2,3]
  return (
    <>
      <Saludo  nombre={"Fede"}/>
      <Productos listaProductos={lista}/>
    </>
  )
}

export default App
