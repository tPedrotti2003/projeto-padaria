# Padaria e Lancheria Protásio Alves

Site da **Padaria e Lancheria Protásio Alves**, em Porto Alegre (RS), feito com React e Vite.

🔗 **Veja funcionando:** https://projeto-padaria-gilt.vercel.app/

![Página inicial do site da padaria](docs/print-site.webp)

## Funcionalidades

- **Catálogo de produtos** com filtro por categoria (tortinhas, doces, bolos, salgados)
- **Status "Aberto agora / Fechado agora"** calculado na hora, a partir dos horários da padaria
- **Lista de horários** com o dia de hoje em destaque
- **Mapa do Google** e botão "Como chegar", sem precisar de chave de API
- **Botão flutuante do WhatsApp** que abre a conversa com uma mensagem pronta
- **Menu hambúrguer** no celular
- **Data de hoje** no topo, em português (com dayjs)
- **Imagens otimizadas** em `.webp` (de 2–3 MB para menos de 170 KB cada)
- Layout **responsivo**, pensado para o celular

## Tecnologias

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- [dayjs](https://day.js.org/) para datas
- [sharp](https://sharp.pixelplumbing.com/) para converter as imagens
- CSS puro
- Deploy na [Vercel](https://vercel.com/)

## Como rodar no seu computador

Precisa ter o [Node.js](https://nodejs.org/) instalado.

```bash
npm install
npm run dev
```

Depois abra o endereço que aparecer no terminal (normalmente http://localhost:5173).

## Organização do código

```
public/img/            fotos dos produtos (.webp)
scripts/               script que converte as fotos para .webp
src/
  App.jsx              junta os componentes na ordem da página
  index.css            estilos do site
  components/          um componente para cada parte da página
  data/
    padaria.js         telefone, endereço, horários e redes sociais
    produtos.js        lista de produtos e categorias
  utils/
    horario.js         calcula se a padaria está aberta
    preco.js           formata o preço em R$
```

Os dados da padaria ficam todos em `src/data/`. Para mudar um horário, um preço ou adicionar um produto, basta editar esses arquivos.

## Autor

Feito por **Tiago Pedrotti** · [GitHub](https://github.com/tPedrotti2003)
