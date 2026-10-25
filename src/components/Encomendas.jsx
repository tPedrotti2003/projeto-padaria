import { useState } from "react";
import { linkWhatsApp } from "../utils/whatsapp.js";
import dayjs from "dayjs";

// Tipos de encomenda que aparecem no <select>
const tipos = ["Bolo de aniversário", "Pão francês", "Outro"];

export default function Encomendas() {
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState(tipos[0]);
  const [data, setData] = useState("");
  const [detalhes, setDetalhes] = useState("");

  function enviar(evento) {
    evento.preventDefault();

    const mensagem = `Olá, gostaria de fazer uma encomenda.
Nome: ${nome}
Tipo: ${tipo}
Data: ${dayjs(data).format("DD/MM/YYYY")}
Detalhes: ${detalhes}`;

    window.open(linkWhatsApp(mensagem), "_blank");
  }

  return (
    <section id="encomendas" className="secao encomendas">
      <h2>Encomendas</h2>
      <p className="encomendas__texto">
        Bolo de aniversário ou uma quantidade maior de pães para um dia
        especial? Preencha abaixo e envie seu pedido direto pelo WhatsApp.
        Atenção: não trabalhamos com salgados e doces pequenos para festas.
      </p>

      <form className="encomendas__form" onSubmit={enviar}>
        <div className="campo">
          <label htmlFor="nome">Seu nome</label>
          <input
            id="nome"
            type="text"
            required
            value={nome}
            onChange={(evento) => setNome(evento.target.value)}
          />
        </div>

        <div className="campo">
          <label htmlFor="tipo">O que você quer encomendar?</label>
          <select
            id="tipo"
            value={tipo}
            onChange={(evento) => setTipo(evento.target.value)}
          >
            {tipos.map((tipo) => (
              <option key={tipo} value={tipo}>
                {tipo}
              </option>
            ))}
          </select>
        </div>

        <div className="campo">
          <label htmlFor="data">Para quando?</label>
          <input
            id="data"
            type="date"
            required
            value={data}
            onChange={(evento) => setData(evento.target.value)}
          />
        </div>

        <div className="campo">
          <label htmlFor="detalhes">Detalhes do pedido</label>
          <textarea
            id="detalhes"
            placeholder="Ex: bolo de chocolate para 20 pessoas, com cobertura de brigadeiro"
            required
            value={detalhes}
            onChange={(evento) => setDetalhes(evento.target.value)}
          />
        </div>

        <button type="submit" className="botao">
          Enviar pelo WhatsApp
        </button>
      </form>
    </section>
  );
}
