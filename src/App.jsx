import Header from "./components/Header.jsx";
import Banner from "./components/Banner.jsx";
import Sobre from "./components/Sobre.jsx";
import Catalogo from "./components/Catalogo.jsx";
import Localizacao from "./components/Localizacao.jsx";
import Footer from "./components/Footer.jsx";
import BotaoWhatsApp from "./components/BotaoWhatsApp.jsx";
import Encomendas from "./components/Encomendas.jsx";
import Aviso from "./components/Aviso.jsx";

// O App só "monta" a página juntando os componentes, na ordem em que aparecem
export default function App() {
  return (
    <>
      <Aviso />
      <Header />
      <main>
        <Banner />
        <Catalogo />
        <Encomendas />
        <Sobre />
        <Localizacao />
      </main>
      <Footer />
      <BotaoWhatsApp />
    </>
  );
}
