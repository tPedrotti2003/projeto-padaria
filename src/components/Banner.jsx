export default function Banner() {
  return (
    <section id="inicio" className="banner">
      <img
        src="/img/banner.webp"
        alt="Produtos da Padaria Protásio Alves"
        className="banner__img"
      />

      <div className="banner__texto">
        <h2>Feito por nós, todo dia</h2>
        <p>Pães, doces, bolos e salgados fresquinhos, sem terceirização.</p>
        <a href="#catalogo" className="botao">
          Ver produtos
        </a>
      </div>
    </section>
  );
}
