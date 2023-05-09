import Alunos from "../../../data/alunos";

export default function ListaAlunos() {
  const lis = Alunos.map((aluno) => {
    return (
      <li key ={aluno.id}>
        {aluno.id}, {aluno.nome},{aluno.nota}
      </li>
    );
  });

  return <div>
    {lis}
  </div>;
}
