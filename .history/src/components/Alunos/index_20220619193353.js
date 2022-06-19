import { useContext } from "react";
import { UserContext } from "../../contexts/user";
import Nome from "../Nome";

function Alunos() {
  const { alunos } = useContext(UserContext);
  return (
    <div>
      <h2>Componente Alunos: {alunos}</h2>
      <Nome />
    </div>
  );
}

export default Alunos;
