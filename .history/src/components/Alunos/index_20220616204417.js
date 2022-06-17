import { useState } from "react";
import Nome from "../Nome";

function Alunos(props) {
  return (
    <div>
      <h2>Componente Alunos {props.aluno}</h2>
      <Nome />
    </div>
  );
}

export default Alunos;
