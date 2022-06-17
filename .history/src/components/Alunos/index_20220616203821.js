import { useState } from "react";
import Nome from "../Nome";

function Alunos() {
  const [aluno, setAluno] = useState("Justin");
  return (
    <div>
      <h2>Componente Alunos</h2>
      <span>{aluno}</span>
      <Nome />
    </div>
  );
}

export default Alunos;
