import { useState, useEffect } from "react";

function BotonSeleccion({ onSeleccionar, onSeleccionar2 }) {
    return (
        <>
            <button onClick={onSeleccionar}>
                Seleccionar React
            </button>
            <button onClick={onSeleccionar2}>
                Seleccionar DWPE
            </button>
        </>
    );
}

function CursoApp() {
    const [curso, setCurso] = useState('Ninguno');
    const [cambio, setCambio] = useState(false);
    const [hora, setHora] = useState ('');

    useEffect(() => {
        /*console.log("Ejecute Use Effect");*/
        document.title=curso;
        new Date().toLocaleTimeString('es-PE');
    },[cambio]); /*cortechetes una sola vez y sino varias veces.Y indique cuando cambie el curso*/

    return (
        <section>
            <h2>Hora actual : {hora}</h2>
            <p>Curso elegido: {curso}</p> 

            <BotonSeleccion
                onSeleccionar={() => setCurso('React')}
                onSeleccionar2={() => setCurso('DWPE')}
            />
            <button onClick={()=> {setCambio(!cambio) }}>Cambiar</button>
            <button onClick={() => {setHora (new Date().toLocaleTimeString('es-PE'))}} >Mostrar Hora</button>

        </section>
    );
}

export default CursoApp;