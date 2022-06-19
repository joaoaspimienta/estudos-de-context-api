function Nome() {
  return (
    <div>
      <span>Componente Nome</span> <br />
      <span style={{ color: "#FF0000" }}>Bem vindo, {nome}</span>
      <br />
      <button
        onClick={() => {
          mudaNome("EMIYA");
        }}
      >
        Trocar nome
      </button>
    </div>
  );
}

export default Nome;
