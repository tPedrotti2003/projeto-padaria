import { padaria } from "../data/padaria.js";

export default function Footer() {
  const anoAtual = new Date().getFullYear();
  return (
    <footer id="contato" className="footer">
      <div className="footer__conteudo">
        <address className="footer__contato">
          <h3>Contato</h3>
          <p>Telefone: {padaria.telefone}</p>
          <p>Endereço: {padaria.endereco}</p>
        </address>

        <div className="footer__redes">
          <h3>Redes sociais</h3>
          <a href={padaria.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href={padaria.facebook} target="_blank" rel="noreferrer">
            Facebook
          </a>
        </div>
      </div>

      <div className="footer__copyright">
        <p>
          &copy; {anoAtual} {padaria.nome}
        </p>
        <a href={padaria.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </footer>
  );
}
