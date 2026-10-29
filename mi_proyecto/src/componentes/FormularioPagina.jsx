import { useState } from "react";
function FormularioPagina({onSeleccionar,onSeleccionar2}) {
    const[mensaje,setMensaje] = useState('');
    const[valores,setValores] = useState(
    {
        nombre:"",
        correo:""
    });

    function cambiarDatos(e){
        const{name,value} =e.target;
        setValores({
            ...valores,
            [name]:value
        });
    }
    function enviarDatos(e)
    {
        e.preventDefault();
        setMensaje("Cargando....");
        setTimeout(() =>{
                setMensaje("Datos correctamente ingresados");
            },2000)
                    
        setTimeout(() =>{
                setMensaje("");
            },3000)
            
    }
    return(
        <>
            <h1>{mensaje}</h1>
            <form onSubmit={enviarDatos}>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text"
                    id="nom" name="nombre"
                    value={valores.nombre}
                    onChange={cambiarDatos}
                  ></input>
                <br />
                <label htmlFor="correo">Correo:</label>
                <input type="email" 
                id="correo" 
                name="correo" 
                value={valores.correo}
                onChange={cambiarDatos}
                ></input>
                <button type="submint">Enviar Datos</button>

            </form>
        </>
    )

}

export default FormularioPagina
