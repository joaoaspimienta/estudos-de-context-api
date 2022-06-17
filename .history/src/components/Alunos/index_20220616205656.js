import Nome from "../Nome";

function Alunos({ nomeAluno, mudaNome }) {
  return (
    <div>
      <h2>Componente Alunos {nomeAluno}</h2>
      <Nome nome={nome} mudaNome={mudaNome} />
    </div>
  );
}

export default Alunos;
