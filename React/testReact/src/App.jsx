import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import Footer from "./components/Footer";

//hay dos tipos de export/import en los componentes, el nombrado y el no nombrado.
//el nombrado es sin default, mientras que el no nombrado es con default

function App() {
  //react es un framework, orientado a componentes.

  const arr = [1,2,3]
  return (
    <>
      <Header />
      <h1>Este es el titulo de la pagina</h1>
      <Footer />
      {arr.map((item, index)=> {
        return(
          <div key={index}>
            <p>este es el item{item}, esta es la posicion {index}</p>
          </div>
        )
      })}
    </>
  );
}

export default App;
