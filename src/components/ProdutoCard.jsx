import { formatarPreco } from "../utils/preco.js";
import { linkWhatsApp } from "../utils/whatsapp.js";

// Componente que recebe UM produto via props e mostra o card dele.
// O { produto } entre chaves é "desestruturação": pega props.produto direto.
export default function ProdutoCard({ produto }) {
  const mensagem = `Olá, vocês têm ${produto.nome} hoje?`;
  const imagemPequena = produto.imagem.replace(".webp", "-400.webp");

  return (
    <article className="card">
      <img
        src={produto.imagem}
        alt={produto.nome}
        srcSet={`${imagemPequena} 400w, ${produto.imagem} 800w`}
        sizes="(max-width: 500px) 100vw, 300px"
        className="card__img"
        loading="lazy"
      />
      <h3 className="card__nome">{produto.nome}</h3>
      <p className="card__preco">
        {produto.preco ? formatarPreco(produto.preco) : "Consulte"}
      </p>
      <a
        href={linkWhatsApp(mensagem)}
        target="_blank"
        rel="noreferrer"
        className="card__whatsapp"
      >
        Perguntar no WhatsApp
      </a>
    </article>
  );
}
