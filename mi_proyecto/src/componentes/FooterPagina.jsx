function FooterPagina(props) {
    console.log(props);
  return (
    <footer id="contacto">
        <p>IESP "TRUJILLO" ©{props.palabra[0].oracion}</p>
        <p>{props.palabra[1].oracion}</p>
        <p>Todos los derechos reservados.</p>
  </footer>
  )
}

export default FooterPagina