import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import Footer from "./components/Footer";

//hay dos tipos de export/import en los componentes, el nombrado y el no nombrado.
//el nombrado es sin default, mientras que el no nombrado es con default

function App() {
  //react es un framework, orientado a componentes.
  return (
    <>
      <Header />
      <h1>Este es el titulo de la pagina</h1>
      <Footer />
    </>
  );
}

export default App;
