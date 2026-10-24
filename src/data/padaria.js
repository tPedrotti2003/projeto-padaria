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
};
