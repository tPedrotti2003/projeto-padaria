import { useState } from "react";
import { produtos, categorias } from "../data/produtos.js";
import ProdutoCard from "./ProdutoCard.jsx";

export default function Catalogo() {
  // useState guarda qual botão de categoria está selecionado.
  // Quando chamamos setCategoriaAtiva('doces'), o React redesenha o componente.
  const [categoriaAtiva, setCategoriaAtiva] = useState("todos");

  let produtosFiltrados;

  if (categoriaAtiva === "todos") {
    produtosFiltrados = produtos;
  } else {
    produtosFiltrados = produtos.filter(
      (produto) => produto.categoria === categoriaAtiva,
    );
  }
  return (
    <section id="catalogo" className="secao catalogo">
      <h2>Nossos Produtos</h2>
      <div className="catalogo__filtros">
        {categorias.map((cat) => (
          <button
            key={cat.id}
            // Classe extra "ativo" só no botão selecionado
            className={cat.id === categoriaAtiva ? "filtro ativo" : "filtro"}
            onClick={() => setCategoriaAtiva(cat.id)}
          >
            {cat.nome}
          </button>
        ))}
      </div>
      <div className="catalogo__grade">
        {produtosFiltrados.map((produto) => (
          <ProdutoCard key={produto.id} produto={produto}></ProdutoCard>
        ))}
      </div>

      {produtosFiltrados.length === 0 ? (
        <p>Nenhum produto nessa categoria.</p>
      ) : null}
    </section>
  );
}
