function Nome({ nome, mudaNome }) {
  return (
    <div>
      <span>Componente Nome</span> <br />
      <span style={{ color: "#FF0000" }}>Bem vindo, {nome}</span>
      <br />
      <button
        onClick={() => {
          mudaNome;
        }}
      >
        Trocar nome
      </button>
    </div>
  );
}

export default Nome;
