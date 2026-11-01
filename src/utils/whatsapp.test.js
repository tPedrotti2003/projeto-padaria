import { describe, it, expect } from "vitest";
import { linkWhatsApp } from "./whatsapp.js";
import { padaria } from "../data/padaria.js";

describe("linkWhatsApp", () => {
  it("usa o número da padaria", () => {
    expect(linkWhatsApp("Oi")).toBe(`https://wa.me/${padaria.whatsapp}?text=Oi`);
  });

  it("codifica espaços, acentos e pontuação para caber na URL", () => {
    const link = linkWhatsApp("Olá, vocês têm pão?");
    expect(link).not.toContain(" ");
    expect(link).toContain("Ol%C3%A1");
  });

  it("mantém as quebras de linha da mensagem de encomenda", () => {
    const link = linkWhatsApp("Nome: Ana\nTipo: Bolo");
    expect(link).toContain("%0A"); // %0A é a quebra de linha codificada
    // Desfazendo a codificação, a mensagem volta exatamente igual
    expect(decodeURIComponent(link.split("text=")[1])).toBe("Nome: Ana\nTipo: Bolo");
  });
});
