import { formatarPreco } from "../utils/preco.js";

// Componente que recebe UM produto via props e mostra o card dele.
// O { produto } entre chaves é "desestruturação": pega props.produto direto.
export default function ProdutoCard({ produto }) {
  return (
    <article className="card">
      <img
        src={produto.imagem}
        alt={produto.nome}
        className="card__img"
        loading="lazy"
      />
      <h3 className="card__nome">{produto.nome}</h3>
      <p className="card__preco">
        {produto.preco ? formatarPreco(produto.preco) : "Consulte"}
      </p>
    </article>
  );
}
