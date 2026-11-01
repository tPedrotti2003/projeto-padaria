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

export function estaAberto(horarios, agora = new Date()) {
  const horarioDeHoje = horarios[agora.getDay()];

  if (horarioDeHoje === null) {
    return false;
  }

  const minutosAgora = agora.getHours() * 60 + agora.getMinutes();
  const minutosAbre = paraMinutos(horarioDeHoje.abre);
  const minutosFecha = paraMinutos(horarioDeHoje.fecha);

  return minutosAgora >= minutosAbre && minutosAgora < minutosFecha;
}

export function proximoHorario(horarios, agora = new Date()) {
  const horarioDeHoje = horarios[agora.getDay()];

  if (estaAberto(horarios, agora)) {
    return `Fecha às ${horarioDeHoje.fecha}`;
  }

  const minutosAgora = agora.getHours() * 60 + agora.getMinutes();

  if (
    horarioDeHoje !== null &&
    minutosAgora < paraMinutos(horarioDeHoje.abre)
  ) {
    return `Abre hoje às ${horarioDeHoje.abre}`;
  }

  for (let i = 1; i <= 7; i++) {
    const dia = (agora.getDay() + i) % 7;
    const horarioDoDia = horarios[dia];

    if (horarioDoDia !== null) {
      if (i === 1) {
        return `Abre amanhã às ${horarioDoDia.abre}`;
      }
      return `Abre ${diasDaSemana[dia].toLowerCase()} às ${horarioDoDia.abre}`;
    }
  }
}
