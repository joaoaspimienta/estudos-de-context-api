import Nome from "../Nome";

function Alunos(props) {
  return (
    <div>
      <h2>Componente Alunos {props.aluno}</h2>
      <Nome aluno={props.aluno} mudaNome={props.mudaNome} />
    </div>
  );
}

export default Alunos;
