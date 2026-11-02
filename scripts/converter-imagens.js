import sharp from "sharp";
import { readdir } from "node:fs/promises";
import path from "node:path";

const pasta = "public/img";
const arquivos = await readdir(pasta);

for (const arquivo of arquivos) {
  // Só converte .png, .jpg e .jpeg
  if (!/\.(png|jpe?g)$/i.test(arquivo)) continue;

  const entrada = path.join(pasta, arquivo);
  const nome = arquivo.replace(/\.(png|jpe?g)$/i, "");

  // Banner e fundo ocupam a tela toda: geramos 3 larguras
  // (banner.webp, banner-1280.webp, banner-800.webp) e o navegador escolhe pelo srcset.
  if (nome.startsWith("banner") || nome.startsWith("fundo")) {
    await sharp(entrada)
      .resize({ width: 1920, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(path.join(pasta, `${nome}.webp`));

    for (const largura of [1280, 800]) {
      await sharp(entrada)
        .resize({ width: largura })
        .webp({ quality: 80 })
        .toFile(path.join(pasta, `${nome}-${largura}.webp`));
    }

    console.log(`✔ ${arquivo} → ${nome}.webp, ${nome}-1280.webp, ${nome}-800.webp`);
    continue;
  }

  // Cards: o card mostra a foto deitada (4:3), então já recortamos aqui pelo centro.
  // Assim ninguém baixa o pedaço da foto que ia ser cortado fora.
  // Duas versões: 800x600 (telas grandes / celular) e 400x300 (cards pequenos).
  await sharp(entrada)
    .resize({ width: 800, height: 600, fit: "cover" })
    .webp({ quality: 80 })
    .toFile(path.join(pasta, `${nome}.webp`));

  await sharp(entrada)
    .resize({ width: 400, height: 300, fit: "cover" })
    .webp({ quality: 80 })
    .toFile(path.join(pasta, `${nome}-400.webp`));

  console.log(`✔ ${arquivo} → ${nome}.webp, ${nome}-400.webp`);
}
