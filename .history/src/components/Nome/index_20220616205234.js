function Nome(props) {
  return (
    <div>
      <span>Componente Nome</span> <br />
      <span style={{ color: "#FF0000" }}>Bem vindo, {props.aluno}</span>
      <button onClick={() => {}}>Trocar nome</button>
    </div>
  );
}

export default Nome;
