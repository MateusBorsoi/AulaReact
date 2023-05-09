export default function Aleatorio(props) {
  
 const {min, max} = props
  const result = parseInt(Math.floor(Math.random() * (min + max)) + min);

  return (
    <>
      <h1>Número Aleatório</h1>
      <p>Valor Mínimo: {min}</p>
      <p>Valor Máximo: {max}</p>
      <p>Resultado: {result}</p>
    </>
  );
}
