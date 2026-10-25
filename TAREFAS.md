# Padaria Protásio Alves — Guia de tarefas

## Como rodar o projeto

1. Instale o **Node.js** (versão LTS) em https://nodejs.org. Feche e abra o VS Code depois.
2. No terminal do VS Code, dentro da pasta do projeto:
   ```
   npm install
   npm run dev
   ```
3. Abra o endereço que aparecer (normalmente http://localhost:5173).
   Toda vez que você salvar um arquivo, o navegador atualiza sozinho.

## Como o projeto está organizado

```
public/img/          -> fotos dos produtos (acessadas no código como /img/nome.png)
src/
  main.jsx           -> liga o React na página (não precisa mexer)
  App.jsx            -> junta todos os componentes na ordem da página
  index.css          -> todo o estilo do site (já pronto)
  data/
    padaria.js       -> telefone, endereço, horários, redes sociais
    produtos.js      -> lista de produtos e categorias
  utils/
    horario.js       -> funções de horário (aberto/fechado)
    preco.js         -> formata preço em R$
  components/        -> um arquivo por pedaço da página
```

Procure por `TODO` no VS Code (Ctrl+Shift+F) pra achar tudo que falta.

## Tarefas (em ordem de dificuldade)

**Status: todas as 9 tarefas concluídas! ✅** (última atualização: 24/10/2026)

| # | Status | Arquivo | O que fazer | Conceito que você pratica |
|---|--------|---------|-------------|---------------------------|
| 1 | ✅ | `Header.jsx` | Mostrar a data com dayjs | import de biblioteca, `{variavel}` no JSX |
| 2 | ✅ | `produtos.js` | Adicionar os produtos que faltam | arrays e objetos |
| 3 | ✅ | `Catalogo.jsx` | Filtrar produtos pela categoria | `.filter()`, `useState` |
| 4 | ✅ | `Catalogo.jsx` | Desenhar os cards com `.map()` | listas e `key` |
| 4b | ✅ | `ProdutoCard.jsx` | Montar o card do produto | props, ternário |
| 5 | ✅ | `Sobre.jsx` | Seção "Sobre Nós" | JSX básico, `className` |
| 6 | ✅ | `utils/horario.js` | Função `estaAberto` | lógica JS pura |
| 7 | ✅ | `Localizacao.jsx` | Lista de horários (com o dia de hoje em destaque) | `.map()` com índice, classe condicional |
| 8 | ✅ | `Footer.jsx` | Links das redes + ano automático | atributos de link |
| 9 | ✅ | `BotaoWhatsApp.jsx` | Botão flutuante (com o logo do WhatsApp em SVG) | template string, URL |

✅ Horários reais confirmados com a padaria.

**Site no ar:** https://projeto-padaria-gilt.vercel.app/ (atualiza sozinho a cada `git push`).

### Lições que ficaram

- **Tarefa 7:** cuidado com qual variável usar no ternário. `aberto` vale pra página toda ("está aberta agora?"); `horario` é de cada item do `.map()` ("este dia tem horário?").
- **Tarefa 9:** dentro das crases (template string), quebra de linha e espaços **viram parte do texto**. Uma URL quebrada em duas linhas dentro das crases para de funcionar sem dar erro nenhum.

Sugestão: faça uma tarefa, salve, veja no navegador, e me chame pra checar.

## Dicas de React pra ter sempre em mente

- **Componente = função que retorna JSX.** O nome começa com letra maiúscula (`ProdutoCard`, não `produtoCard`).
- **JSX não é HTML:** `class` vira `className`, `for` vira `htmlFor`, toda tag precisa fechar (`<img />`).
- **`{ }` no JSX = "aqui dentro é JavaScript".** Ex: `<p>{produto.nome}</p>`.
- **Listas precisam de `key`** única em cada item do `.map()`, senão o console mostra aviso.
- **Nada de `document.getElementById`.** No React você muda o *estado* (`useState`) e a tela se atualiza sozinha.
- **Props descem, não sobem:** o pai passa dados pro filho (`<ProdutoCard produto={p} />`).
- **Abra o console do navegador (F12).** Os erros do React aparecem lá com o arquivo e a linha.

## Ideias pra depois (quando terminar tudo)

- Seção de **encomendas** (bolos e salgados para festa) com mensagem pronta no WhatsApp.
- Botão **"Perguntar no WhatsApp"** em cada card ("Vocês têm X hoje?"). Substitui a ideia do carrinho: como os produtos são feitos no dia, controlar estoque no site daria trabalho demais. A padaria confirma a disponibilidade pelo WhatsApp.
- ✅ ~~**Menu hambúrguer** no celular~~ (feito: `useState` com true/false, `!` pra inverter, classe condicional).
- ✅ ~~Converter as fotos pra **.webp**~~ (feito, script em `scripts/converter-imagens.js`).
- ✅ ~~Publicar grátis na **Vercel**~~ (feito).
