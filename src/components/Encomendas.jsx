import { useState } from "react";
import { linkWhatsApp } from "../utils/whatsapp.js";
import { padaria } from "../data/padaria.js";
import { ehFeriado } from "../utils/horario.js";
import dayjs from "dayjs";

// Tipos de encomenda que aparecem no <select>
const tipos = ["Bolo de aniversário", "Pão francês", "Outro"];
const DIAS_ANTECEDENCIA = 2;

export default function Encomendas() {
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState(tipos[0]);
  const [data, setData] = useState("");
  const [detalhes, setDetalhes] = useState("");
  const [erro, setErro] = useState("");

  function enviar(evento) {
    evento.preventDefault();

    const diaDaSemana = dayjs(data).day();

    if (
      padaria.horarios[diaDaSemana] === null ||
      ehFeriado(data, padaria.feriados)
    ) {
      setErro(
        "Nesse dia a padaria está fechada. Escolha outra data, por favor.",
      );
      return;
    }

    setErro("");

    const mensagem = `Olá, gostaria de fazer uma encomenda.
Nome: ${nome}
Tipo: ${tipo}
Data: ${dayjs(data).format("DD/MM/YYYY")}
Detalhes: ${detalhes}`;

    window.open(linkWhatsApp(mensagem), "_blank");
  }

  const dataMinima = dayjs().add(DIAS_ANTECEDENCIA, "day").format("YYYY-MM-DD");

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
            placeholder="Ex: Fulano de Tal"
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
            {tipos.map((opcao) => (
              <option key={opcao} value={opcao}>
                {opcao}
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
            min={dataMinima}
            value={data}
            onChange={(evento) => {
              setData(evento.target.value);
              setErro("");
            }}
          />
          <p className="campo__dica">
            Encomendas com pelo menos {DIAS_ANTECEDENCIA} dias de antecedência.
          </p>
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

        {erro ? <p className="encomendas__erro">{erro}</p> : null}

        <button type="submit" className="botao">
          Enviar pelo WhatsApp
        </button>
      </form>
    </section>
  );
}
