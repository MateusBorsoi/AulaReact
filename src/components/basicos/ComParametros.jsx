export default function ComParametros(props) {
const status = props.nota>=7 ? 'Aprovado' : 'Reprovado'

  return (
    <div>
      <h1>{props.aluno}</h1>
      <p>
        <h3>{props.nota}</h3>
      </p>
      <p>
        <h3>{status}</h3>
      </p>
    </div>
  );
}
