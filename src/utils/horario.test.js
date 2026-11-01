import { describe, it, expect } from "vitest";
import { paraMinutos, ehFeriado, estaAberto, proximoHorario } from "./horario.js";

// Horários e feriados FIXOS só para os testes.
// Assim, se a padaria mudar o horário de verdade no padaria.js,
// os testes continuam testando a LÓGICA, e não quebram à toa.
const horarios = [
  null, // domingo
  { abre: "06:30", fecha: "19:30" }, // segunda
  { abre: "06:30", fecha: "19:30" }, // terça
  { abre: "06:30", fecha: "19:30" }, // quarta
  { abre: "06:30", fecha: "19:30" }, // quinta
  { abre: "06:30", fecha: "19:30" }, // sexta
  { abre: "07:00", fecha: "12:00" }, // sábado
];

const feriados = [
  { de: "2026-11-02", ate: "2026-11-02" }, // Finados (segunda)
  { de: "2026-12-24", ate: "2027-01-03" }, // Recesso de fim de ano
];

// Atalho pra criar datas sem se confundir: no JavaScript o mês começa em 0!
// data(2026, 11, 2, 10, 0) = 02/11/2026 às 10:00
function data(ano, mes, dia, hora = 0, minuto = 0) {
  return new Date(ano, mes - 1, dia, hora, minuto);
}

describe("paraMinutos", () => {
  it("converte horas em minutos desde a meia-noite", () => {
    expect(paraMinutos("06:30")).toBe(390);
    expect(paraMinutos("00:00")).toBe(0);
    expect(paraMinutos("19:30")).toBe(1170);
  });
});

describe("ehFeriado", () => {
  it("reconhece um feriado de um dia só", () => {
    expect(ehFeriado(data(2026, 11, 2), feriados)).toBe(true);
  });

  it("reconhece o primeiro, o do meio e o último dia de um recesso", () => {
    expect(ehFeriado(data(2026, 12, 24), feriados)).toBe(true);
    expect(ehFeriado(data(2026, 12, 31), feriados)).toBe(true);
    expect(ehFeriado(data(2027, 1, 3), feriados)).toBe(true);
  });

  it("não marca como feriado os dias logo antes e logo depois", () => {
    expect(ehFeriado(data(2026, 12, 23), feriados)).toBe(false);
    expect(ehFeriado(data(2027, 1, 4), feriados)).toBe(false);
  });

  it("aceita a data como texto (formato do campo de data das encomendas)", () => {
    expect(ehFeriado("2026-12-25", feriados)).toBe(true);
    expect(ehFeriado("2026-11-10", feriados)).toBe(false);
  });

  it("sem lista de feriados, nunca é feriado", () => {
    expect(ehFeriado(data(2026, 12, 25), [])).toBe(false);
  });
});

describe("estaAberto", () => {
  it("dia de semana, dentro do horário: aberto", () => {
    expect(estaAberto(horarios, data(2026, 11, 3, 10, 0), feriados)).toBe(true);
  });

  it("abre exatamente no horário de abrir", () => {
    expect(estaAberto(horarios, data(2026, 11, 3, 6, 30), feriados)).toBe(true);
    expect(estaAberto(horarios, data(2026, 11, 3, 6, 29), feriados)).toBe(false);
  });

  it("no horário de fechar, já está fechado", () => {
    expect(estaAberto(horarios, data(2026, 11, 3, 19, 29), feriados)).toBe(true);
    expect(estaAberto(horarios, data(2026, 11, 3, 19, 30), feriados)).toBe(false);
  });

  it("sábado fecha ao meio-dia", () => {
    expect(estaAberto(horarios, data(2026, 11, 7, 11, 59), feriados)).toBe(true);
    expect(estaAberto(horarios, data(2026, 11, 7, 12, 0), feriados)).toBe(false);
  });

  it("domingo: sempre fechado", () => {
    expect(estaAberto(horarios, data(2026, 11, 8, 10, 0), feriados)).toBe(false);
  });

  it("feriado em dia de semana: fechado, mesmo no horário normal", () => {
    expect(estaAberto(horarios, data(2026, 11, 2, 10, 0), feriados)).toBe(false);
    expect(estaAberto(horarios, data(2026, 12, 24, 10, 0), feriados)).toBe(false);
  });

  it("sem passar feriados, continua funcionando como antes", () => {
    expect(estaAberto(horarios, data(2026, 11, 2, 10, 0))).toBe(true);
  });
});

describe("proximoHorario", () => {
  it("aberta: mostra quando fecha", () => {
    expect(proximoHorario(horarios, data(2026, 11, 3, 10, 0), feriados)).toBe("Fecha às 19:30");
    expect(proximoHorario(horarios, data(2026, 11, 7, 9, 0), feriados)).toBe("Fecha às 12:00");
  });

  it("antes de abrir: abre hoje", () => {
    expect(proximoHorario(horarios, data(2026, 11, 3, 5, 0), feriados)).toBe("Abre hoje às 06:30");
  });

  it("depois de fechar: abre amanhã", () => {
    expect(proximoHorario(horarios, data(2026, 11, 3, 21, 0), feriados)).toBe("Abre amanhã às 06:30");
  });

  it("sábado à tarde: pula o domingo e abre segunda", () => {
    expect(proximoHorario(horarios, data(2026, 11, 14, 15, 0), feriados)).toBe("Abre segunda às 06:30");
  });

  it("domingo antes de Finados: pula a segunda (feriado) e abre terça", () => {
    expect(proximoHorario(horarios, data(2026, 11, 1, 12, 0), feriados)).toBe("Abre terça às 06:30");
  });

  it("no próprio feriado: não diz 'abre hoje'", () => {
    expect(proximoHorario(horarios, data(2026, 11, 2, 5, 0), feriados)).toBe("Abre amanhã às 06:30");
  });

  it("antes de um recesso longo: mostra a data em vez do dia da semana", () => {
    expect(proximoHorario(horarios, data(2026, 12, 23, 21, 0), feriados)).toBe("Abre dia 04/01 às 06:30");
  });

  it("durante o recesso: também mostra a data", () => {
    expect(proximoHorario(horarios, data(2026, 12, 24, 10, 0), feriados)).toBe("Abre dia 04/01 às 06:30");
  });

  it("perto do fim do recesso: volta a usar o dia da semana", () => {
    expect(proximoHorario(horarios, data(2027, 1, 2, 10, 0), feriados)).toBe("Abre segunda às 06:30");
  });
});
