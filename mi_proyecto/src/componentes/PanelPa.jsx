function PanelPa(props) {
  console.log(props);
  return (
    <section>
      <h2>{props.titulo}</h2>
      <div>{props.children}</div>
    </section>

  )
}

export default PanelPa
