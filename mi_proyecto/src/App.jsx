import { useState } from 'react'
import './App.css'
import HeaderPagina from './componentes/HeaderPagina'
import NavPagina from './componentes/NavPagina'
import MainPagina from './componentes/MainPagina'
import AsidePagina from './componentes/AsidePagina'
import FooterPagina from './componentes/FooterPagina'
import PanelPa from './componentes/PanelPa'

function App() {
  const [count, setCount] = useState(0)

  const textos = [
     {frase:"Portal Académico"},
     {frase:'Instituto de Educación Superior Público "TRUJILLO"'}
  ];

  const palabras = [
    {oracion:' 2026'},
    {oracion: "Programa de Estudios: Diseño y Programación Web"},
  ];

  
  return (
    <>
      <HeaderPagina texto ={textos} />
      <NavPagina />
      <PanelPa titulo={"Aviso académico"}>
        <p>Revisar las fechas de evaluación.</p>
      </PanelPa>
      <PanelPa titulo={"Próximas actividades"}>
        <ul>
          <li>Taller de React</li>
          <li>Presentación de proyectos</li>
        </ul>
      </PanelPa>
      <MainPagina  />
      <AsidePagina  />
      <FooterPagina  palabra ={palabras} />
    </>
  )
}

export default App
