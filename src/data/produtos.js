// Lista de produtos do catálogo.
// As imagens ficam em /public/img — no código o caminho começa com /img/...

export const categorias = [
  { id: "todos", nome: "Todos" },
  { id: "tortas", nome: "Tortinhas" },
  { id: "doces", nome: "Doces" },
  { id: "bolos", nome: "Bolos" },
  { id: "salgados", nome: "Salgados" },
];

// null = mostra "Consulte" no lugar do preço

export const produtos = [
  {
    id: 1,
    nome: "Tortinha de limão",
    categoria: "tortas",
    preco: 9.0,
    imagem: "/img/tortinha-limao.webp",
  },
  {
    id: 2,
    nome: "Tortinha de maçã",
    categoria: "tortas",
    preco: 9.0,
    imagem: "/img/tortinha-maca.webp",
  },
  {
    id: 3,
    nome: "Tortinha de morango",
    categoria: "tortas",
    preco: 9.0,
    imagem: "/img/tortinha-morango.webp",
  },
  {
    id: 4,
    nome: "Sonho de creme / doce de leite",
    categoria: "doces",
    preco: 8.0,
    imagem: "/img/sonhos.webp",
  },
  {
    id: 5,
    nome: "Salgados",
    categoria: "salgados",
    preco: null,
    imagem: "/img/salgados.webp",
  },
  {
    id: 6,
    nome: "Cueca virada",
    categoria: "doces",
    preco: null,
    imagem: "/img/cuecas-viradas.webp",
  },
  {
    id: 7,
    nome: "Cueca virada com açúcar",
    categoria: "doces",
    preco: null,
    imagem: "/img/cueca-com-acucar.webp",
  },
  {
    id: 8,
    nome: "Cueca virada sem açúcar",
    categoria: "doces",
    preco: null,
    imagem: "/img/cueca-sem-acucar.webp",
  },
  {
    id: 9,
    nome: "Bolo de chocolate",
    categoria: "bolos",
    preco: null,
    imagem: "/img/bolo-chocolate.webp",
  },
  {
    id: 10,
    nome: "Bolo de milho verde com coco",
    categoria: "bolos",
    preco: null,
    imagem: "/img/bolo-milho-coco.webp",
  },
  {
    id: 11,
    nome: "Bolo-rei",
    categoria: "bolos",
    preco: null,
    imagem: "/img/bolo-rei.webp",
  },
  {
    id: 12,
    nome: "Bolos",
    categoria: "bolos",
    preco: null,
    imagem: "/img/bolinhos.webp",
  },
];
