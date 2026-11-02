// Todas as informações da padaria ficam aqui.
// Se o telefone ou o horário mudar, é só mudar AQUI e o site inteiro atualiza.

export const padaria = {
  nome: "Padaria e Lancheria Protásio Alves",
  telefone: "(51) 99762-2037",
  // Formato do WhatsApp: 55 (Brasil) + DDD + número, só dígitos
  whatsapp: "5551997622037",
  site: "https://projeto-padaria-gilt.vercel.app/",
  endereco: "Av. Protásio Alves, 2020 - Porto Alegre, RS",
  instagram: "https://www.instagram.com/padaria_protasio2020/",
  facebook:
    "https://www.facebook.com/p/Padaria-E-Lancheria-Da-Prot%C3%A1sio-100069892550787/",
  github: "https://github.com/tPedrotti2003",
  horarios: [
    null, // domingo
    { abre: "06:30", fecha: "19:30" }, // segunda
    { abre: "06:30", fecha: "19:30" }, // terça
    { abre: "06:30", fecha: "19:30" }, // quarta
    { abre: "06:30", fecha: "19:30" }, // quinta
    { abre: "06:30", fecha: "19:30" }, // sexta
    { abre: "07:00", fecha: "12:00" }, // sábado
  ],

  // Dias em que a padaria fica FECHADA (feriados, férias...), mesmo sendo dia de semana.
  // Mesmo formato dos avisos: de "de" até "ate", incluindo os dois dias.
  // Feriado de um dia só: "de" e "ate" iguais.
  feriados: [
    { de: "2026-11-02", ate: "2026-11-02" }, // Finados
    { de: "2026-11-20", ate: "2026-11-20" }, // Consciência Negra
    { de: "2026-12-24", ate: "2027-01-03" }, // Festas de fim de ano
  ],

  // Avisos que aparecem numa faixa no topo do site.
  // Cada aviso só aparece entre as datas "de" e "ate" (formato ano-mês-dia).
  // Passou a data, ele some sozinho. Não precisa apagar.
  // Exemplo:
  //   { de: "2026-12-20", ate: "2026-12-25", texto: "Dia 25/12 (Natal) estaremos fechados." },
  avisos: [
    {
      id: "finados",
      de: "2026-10-29",
      ate: "2026-11-02",
      texto: "Dia 02/11 (Finados) estaremos fechados.",
    },
    {
      id: "consciencia-negra",
      de: "2026-11-16",
      ate: "2026-11-20",
      texto: "Dia 20/11 (Consciência Negra) estaremos fechados.",
    },
    {
      id: "natal",
      de: "2026-12-01",
      ate: "2027-01-03",
      texto:
        "Fechados para as festas de fim de ano de 24/12/2026 a 03/01/2027. Voltamos segunda, 04/01/2027!",
    },
  ],
};
