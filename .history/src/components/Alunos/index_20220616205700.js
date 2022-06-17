import Nome from "../Nome";

function Alunos({ nomeAluno, mudaNome }) {
  return (
    <div>
      <h2>Componente Alunos {nomeAluno}</h2>
      <Nome nome={nomeAluno} mudaNome={mudaNome} />
    </div>
  );
}

export default Alunos;
