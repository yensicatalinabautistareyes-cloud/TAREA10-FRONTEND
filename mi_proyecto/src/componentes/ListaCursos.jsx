const cursos = [
    { id: 1, nombre: 'React' },
    { id: 2, nombre: 'JavaScript' },
    { id: 3, nombre: 'Bases de datos' },
    { id: 4, nombre: 'Bases de datos2' }
];
function ListaCursos() {
    return (
        <ul>
            {cursos.map((curso) => (
                <li key={curso.id}>{curso.nombre}</li>
            ))}
        </ul>
    );
}
export default ListaCursos
