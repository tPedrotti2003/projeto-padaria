import { useState } from "react";
import { padaria } from "../data/padaria.js";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";

const links = [
  { href: "#inicio", texto: "Início" },
  { href: "#catalogo", texto: "Produtos" },
  { href: "#encomendas", texto: "Encomendas" },
  { href: "#sobre", texto: "Sobre" },
  { href: "#localizacao", texto: "Onde estamos" },
  { href: "#contato", texto: "Contato" },
];

export default function Header() {
  const dataHoje = dayjs()
    .locale("pt-br")
    .format("dddd, DD [de] MMMM [de] YYYY");
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="header">
      <div className="header__conteudo">
        <h1 className="header__titulo">{padaria.nome}</h1>

        <button
          className="menu-botao"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
        >
          {menuAberto ? "✕" : "☰"}
        </button>

        <nav>
          <ul className={menuAberto ? "header__nav aberto" : "header__nav"}>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuAberto(false)}>
                  {link.texto}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <time className="header__data">{dataHoje}</time>
      </div>
    </header>
  );
}
