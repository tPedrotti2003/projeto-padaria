import { useState } from "react";
import { produtos, categorias } from "../data/produtos.js";
import ProdutoCard from "./ProdutoCard.jsx";

export default function Catalogo() {
  // useState guarda qual botão de categoria está selecionado.
  // Quando chamamos setCategoriaAtiva('doces'), o React redesenha o componente.
  const [categoriaAtiva, setCategoriaAtiva] = useState("todos");
  const [quantidade, setQuantidade] = useState(8);

  let produtosFiltrados;

  if (categoriaAtiva === "todos") {
    produtosFiltrados = produtos;
  } else {
    produtosFiltrados = produtos.filter(
      (produto) => produto.categoria === categoriaAtiva,
    );
  }

  const produtosVisiveis = produtosFiltrados.slice(0, quantidade);

  return (
    <section id="catalogo" className="secao catalogo">
      <h2>Nossos Produtos</h2>
      <div className="catalogo__filtros">
        {categorias.map((cat) => (
          <button
            key={cat.id}
            // Classe extra "ativo" só no botão selecionado
            className={cat.id === categoriaAtiva ? "filtro ativo" : "filtro"}
            onClick={() => {
              setCategoriaAtiva(cat.id);
              setQuantidade(8);
            }}
          >
            {cat.nome}
          </button>
        ))}
      </div>
      <div className="catalogo__grade">
        {produtosVisiveis.map((produto) => (
          <ProdutoCard key={produto.id} produto={produto}></ProdutoCard>
        ))}
      </div>
      {produtosFiltrados.length > quantidade ? (
        <div className="catalogo__ver-mais">
          <button
            className="botao"
            onClick={() => setQuantidade(quantidade + 8)}
          >
            Ver mais
          </button>
        </div>
      ) : null}

      {produtosFiltrados.length === 0 ? (
        <p>Nenhum produto nesta categoria.</p>
      ) : null}
    </section>
  );
}
