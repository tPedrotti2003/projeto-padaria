import { padaria } from "../data/padaria.js";

export function linkWhatsApp(mensagem) {
  return `https://wa.me/${padaria.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}
