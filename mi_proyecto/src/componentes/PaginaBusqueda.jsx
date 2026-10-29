import { useState } from "react";

    const cursos = [
        { id: 1, nombre: "React" },
        { id: 2, nombre: "JavaScript" },
        { id: 3, nombre: "Bases de datos" },
        { id: 4, nombre: "HTML y CSS" }
        ];


function PaginaBusqueda() {
const [busqueda, setBusqueda] = useState("");    
const cursosFiltrados = cursos.filter((cursos) =>

    cursos.nombre.toLowerCase().includes(busqueda.toLowerCase())
);
return (
    <>
        <label htmlFor="buscar">Buscar curso:</label>
        <input
            id="buscar"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
        />
        {cursosFiltrados.length > 0 ? (
            cursosFiltrados.map((cursos) => (
                <p key={cursos.id}>{cursos.nombre}</p>
            ))
        ) : (
            <p>No se encontraron cursos.</p>
        )}
    </>
);
}

export default PaginaBusqueda