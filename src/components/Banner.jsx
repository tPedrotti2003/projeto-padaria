export default function Banner() {
  return (
    <section id="inicio" className="banner">
      <h2 className="sr-only">Feito por nós, todo dia</h2>

      <img
        src="/img/banner.webp"
        alt="Padaria Protásio Alves: pão quentinho, todos os dias"
        className="banner__img"
        srcSet="/img/banner-800.webp 800w, /img/banner-1280.webp 1280w, /img/banner.webp 1717w"
        sizes="(max-width: 768px) 720px, 100vw"
        fetchPriority="high"
      />
    </section>
  );
}
