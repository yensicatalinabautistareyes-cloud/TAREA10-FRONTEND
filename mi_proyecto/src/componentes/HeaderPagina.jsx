function HeaderPagina(props) {
  console.log(props);
  return (
    <header>
        <h1>{props.texto[0].frase}</h1>
        <p>{props.texto[1].frase}</p>
    </header>
  )
}

export default HeaderPagina
