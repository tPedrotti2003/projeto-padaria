import { padaria } from "../data/padaria.js";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";

const links = [
  { href: "#inicio", texto: "Início" },
  { href: "#catalogo", texto: "Produtos" },
  { href: "#sobre", texto: "Sobre" },
  { href: "#localizacao", texto: "Onde estamos" },
  { href: "#contato", texto: "Contato" },
];

export default function Header() {
  const dataHoje = dayjs().locale("pt-br").format("dddd, DD [de] MMMM [de] YYYY");
  
  return (
    <header className="header">
      <div className="header__conteudo">
        <h1 className="header__titulo">{padaria.nome}</h1>

        <nav>
          <ul className="header__nav">
            {/* .map() transforma cada item do array em um <li> */}
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.texto}</a>
              </li>
            ))}
          </ul>
        </nav>

        <time className="header__data">{dataHoje}</time>
      </div>
    </header>
  );
}
