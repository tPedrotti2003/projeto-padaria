import { padaria } from "../data/padaria.js";
import { diasDaSemana, estaAberto } from "../utils/horario.js";
import { useState, useEffect } from "react";

// Mapa do Google sem precisar de chave de API: só o endereço na URL
const urlMapa = `https://www.google.com/maps?q=${encodeURIComponent(padaria.endereco)}&output=embed`;
const urlComoChegar = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(padaria.endereco)}`;

export default function Localizacao() {
  const [agora, setAgora] = useState(new Date());
  const aberto = estaAberto(padaria.horarios, agora);

  useEffect(() => {
    const timer = setInterval(() => {
      setAgora(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="localizacao" className="secao localizacao">
      <h2>Onde estamos</h2>

      <div className="localizacao__conteudo">
        <iframe
          className="localizacao__mapa"
          src={urlMapa}
          title="Mapa da padaria"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <div className="localizacao__info">
          <p className="localizacao__endereco">{padaria.endereco}</p>
          <a
            href={urlComoChegar}
            target="_blank"
            rel="noreferrer"
            className="botao"
          >
            Como chegar
          </a>

          <p className={aberto ? "status aberto" : "status fechado"}>
            {aberto ? "🟢 Aberto agora" : "🔴 Fechado agora"}
          </p>

          <h3>Horários</h3>
          <ul className="horarios">
            {padaria.horarios.map((horario, indice) => (
              <li
                key={indice}
                className={indice === agora.getDay() ? "hoje" : ""}
              >
                <span>{diasDaSemana[indice]}</span>
                <span>
                  {horario === null
                    ? "Fechado"
                    : `${horario.abre} às ${horario.fecha}`}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
