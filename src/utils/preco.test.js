import { describe, it, expect } from "vitest";
import { formatarPreco } from "./preco.js";

// O toLocaleString coloca um espaço "especial" (que não quebra linha) depois do R$.
// Trocamos por um espaço normal só pra comparar com mais facilidade.
function semEspacoEspecial(texto) {
  return texto.replace(/\s/g, " ");
}

describe("formatarPreco", () => {
  it("formata com R$, vírgula e duas casas decimais", () => {
    expect(semEspacoEspecial(formatarPreco(9))).toBe("R$ 9,00");
    expect(semEspacoEspecial(formatarPreco(1.5))).toBe("R$ 1,50");
    expect(semEspacoEspecial(formatarPreco(12))).toBe("R$ 12,00");
  });

  it("usa ponto para separar milhar", () => {
    expect(semEspacoEspecial(formatarPreco(1250))).toBe("R$ 1.250,00");
  });
});
