import dayjs from "dayjs";
import { padaria } from "../data/padaria.js";

export default function Aviso() {
  const hoje = dayjs().format("YYYY-MM-DD");

  const avisosDeHoje = padaria.avisos.filter(
    (aviso) => aviso.de <= hoje && hoje <= aviso.ate,
  );

  if (avisosDeHoje.length === 0) {
    return null;
  }

  return (
    <div className="aviso" role="status">
      {avisosDeHoje.map((aviso) => (
        <p key={aviso.id}>{aviso.texto}</p>
      ))}
    </div>
  );
}
