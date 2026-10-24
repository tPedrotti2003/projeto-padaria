import sharp from "sharp";
import { readdir } from "node:fs/promises";
import path from "node:path";

const pasta = "public/img";
const arquivos = await readdir(pasta);

for (const arquivo of arquivos) {
  // Só converte .png, .jpg e .jpeg
  if (!/\.(png|jpe?g)$/i.test(arquivo)) continue;

  const entrada = path.join(pasta, arquivo);
  const saida = path.join(pasta, arquivo.replace(/\.(png|jpe?g)$/i, ".webp"));

  // Banner e fundo ocupam a tela toda, então ficam maiores. Os cards ficam com 800px.
  const largura =
    arquivo.startsWith("banner") || arquivo.startsWith("fundo") ? 1920 : 800;

  await sharp(entrada)
    .resize({ width: largura, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(saida);

  console.log(`✔ ${arquivo} → ${path.basename(saida)}`);
}
