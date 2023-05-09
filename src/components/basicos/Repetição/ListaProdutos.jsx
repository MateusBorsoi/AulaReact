import Produtos from "../../../data/produtos";

export default function ListaProdutos() {
  const listProdutos = Produtos.map((produto) => {

    return (
      <tr key={produto.id}>
        <td>{produto.id}</td>
        <td>{produto.descricao}</td>
        <td>R$ {produto.preco}</td>
      </tr>
    );
  });

  return (
    <div>
      <table>
        <tr>
          <td>Codigo</td>
          <td>Descrição</td>
          <td>Preço</td>
        </tr>
        {listProdutos}
      </table>
    </div>
  );
}
