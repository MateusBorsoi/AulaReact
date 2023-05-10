import Produtos from "../../../data/produtos";

export default function ListaProdutos() {
  const listProdutos = Produtos.map((produto) => {

    return (
      <tfoot>
      <tr key={produto.id}>
        <td>{produto.id}</td>
        <td>{produto.descricao}</td>
        <td>R$ {produto.preco}</td>
      </tr>
      </tfoot>
    );
  });

  return (
    <div>
      <table>
        <tbody>
        <tr>
          <td>Codigo</td>
          <td>Descrição</td>
          <td>Preço</td>
        </tr>
        </tbody>
        {listProdutos}
      </table>
    </div>
  );
}
