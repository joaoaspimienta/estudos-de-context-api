import { useContext } from "react";
import { UserContext } from "../../contexts/user";

function Nome() {
  const { alunos, setAlunos, qtdArtefatos } = useContext(UserContext);

  return (
    <div>
      <span style={{ color: "#FF0000" }}>
        Bem vindo, {alunos}, {qtdArtefatos} artefatos
      </span>
      <br />
      <button onClick={() => setAlunos("Mullen")}>Muda nome</button>
    </div>
  );
}

export default Nome;
