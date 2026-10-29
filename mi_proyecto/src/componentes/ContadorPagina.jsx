import { useState } from "react";
function Contador() {
const [contador,setContador]= useState(0);
const[mensaje,setMensaje] = useState('');

function actualizarContador(){
    setContador(contador + 1);

    if (contador + 1 === 10) {
        setMensaje("¡Ganaste!");
            } else {
            setMensaje("");
            }
}

  return (

    <>   
        {contador == 10 && <h2>Ganaste</h2>}
        <h2>{mensaje}</h2>
        <h2>{contador}</h2>
        <button onClick={actualizarContador}>Aumenta</button>
        
    
    </>
  )
}

export default Contador
