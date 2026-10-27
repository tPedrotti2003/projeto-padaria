export default function Banner() {
  return (
    <section id="inicio" className="banner">
      {/* Título escondido: não aparece na tela (o nome já está na imagem),
          mas o Google e os leitores de tela leem */}
      <h2 className="sr-only">Feito por nós, todo dia</h2>

      <img
        src="/img/banner.webp"
        alt="Padaria Protásio Alves: pão quentinho, todos os dias"
        className="banner__img"
      />
    </section>
  );
}
