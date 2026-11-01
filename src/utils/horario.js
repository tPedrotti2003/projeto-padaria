import dayjs from "dayjs";

export const diasDaSemana = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];

// Converte '06:30' em minutos desde a meia-noite (6 * 60 + 30 = 390).
// Assim fica fácil comparar horários com < e >.
export function paraMinutos(hora) {
  const [h, m] = hora.split(":").map(Number);
  return h * 60 + m;
}

export function ehFeriado(data, feriados) {
  const dia = dayjs(data).format("YYYY-MM-DD");

  return feriados.some((feriado) => feriado.de <= dia && dia <= feriado.ate);
}

export function estaAberto(horarios, agora = new Date(), feriados = []) {
  const horarioDeHoje = horarios[agora.getDay()];

  if (ehFeriado(agora, feriados)) {
    return false;
  }

  if (horarioDeHoje === null) {
    return false;
  }

  const minutosAgora = agora.getHours() * 60 + agora.getMinutes();
  const minutosAbre = paraMinutos(horarioDeHoje.abre);
  const minutosFecha = paraMinutos(horarioDeHoje.fecha);

  return minutosAgora >= minutosAbre && minutosAgora < minutosFecha;
}

export function proximoHorario(horarios, agora = new Date(), feriados = []) {
  const horarioDeHoje = horarios[agora.getDay()];

  if (estaAberto(horarios, agora, feriados)) {
    return `Fecha às ${horarioDeHoje.fecha}`;
  }

  const minutosAgora = agora.getHours() * 60 + agora.getMinutes();

  if (
    horarioDeHoje !== null &&
    minutosAgora < paraMinutos(horarioDeHoje.abre) &&
    !ehFeriado(agora, feriados)
  ) {
    return `Abre hoje às ${horarioDeHoje.abre}`;
  }

  for (let i = 1; i <= 31; i++) {
    const data = dayjs(agora).add(i, "day");
    const dia = data.day();
    const horarioDoDia = horarios[dia];

    if (horarioDoDia !== null && !ehFeriado(data, feriados)) {
      if (i === 1) {
        return `Abre amanhã às ${horarioDoDia.abre}`;
      }
      if (i < 7) {
        return `Abre ${diasDaSemana[dia].toLowerCase()} às ${horarioDoDia.abre}`;
      }
      return `Abre dia ${data.format("DD/MM")} às ${horarioDoDia.abre}`;
    }
  }
}
