import { useState } from "react";
import Alunos from "./components/Alunos";

function App() {
  const [aluno, setAluno] = useState("Justin");

  return (
    <div>
      <h1>ESCOLA</h1>
      <hr />
      <Alunos aluno={aluno} />
    </div>
  );
}

export default App;
