import { UserContext } from "../../contexts/user";

function Nome() {
  const { alunos } = useContext(UserContext);

  return (
    <div>
      <span>Componente Nome</span> <br />
      <span style={{ color: "#FF0000" }}>Bem vindo, {alunos}</span>
      <br />
    </div>
  );
}

export default Nome;
