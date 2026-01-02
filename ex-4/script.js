// * Exercício 4: Catálogo de Filmes
// ? Crie 3 objetos de filmes (título, ano, gênero, nota)
// ? Coloque-os em um array
// ? Encontre o filme mais bem avaliado
// ? Filtre filmes de um gênero específico

const listaFilmes = [
  // ! Informações buscadas por ChatGPT
  {
    titulo: "Duna",
    ano: 2021,
    genero: "Ficção científica, Aventura, Drama",
    nota: 83,
  },
  {
    titulo: "Vermelho, Branco e Sangue Azul",
    ano: 2023,
    genero: "Comédia romântica",
    nota: 75,
  },
  {
    titulo: "Interestelar",
    ano: 2014,
    genero: "Ficção científica, Drama",
    nota: 73,
  },
  {
    titulo: "Steven Universe: O Filme",
    ano: 2019,
    genero: "Animação, Fantasia, Aventura, Musical",
    nota: 93,
  },
  {
    titulo: "A Chegada",
    ano: 2016,
    genero: "Ficção científica, Drama",
    nota: 94,
  },
  {
    titulo: "Gravidade",
    ano: 2013,
    genero: "Ficção científica, Drama",
    nota: 96,
  },
  {
    titulo: "O Livro da Selva",
    ano: 2016,
    genero: "Aventura, Fantasia, Drama",
    nota: 94,
  },
  {
    titulo: "Thor: Ragnarok",
    ano: 2017,
    genero: "Ação, Aventura, Fantasia",
    nota: 93,
  },
  {
    titulo: "The Boxtrolls",
    ano: 2014,
    genero: "Animação, Aventura, Fantasia",
    nota: 78,
  },
  {
    titulo: "Over the Moon",
    ano: 2020,
    genero: "Animação, Aventura, Musical, Fantasia",
    nota: 81,
  },
];

// ? Enontrar o filme com melhor avaliação
// 1. extrair apenas as notas
const notas = listaFilmes.map((filme) => filme.nota);

// 2. Encontrar a maior nota
const maiorNota = Math.max(...notas);
console.log(maiorNota);

//3. Procurar no array o filme com essa nota
const melhorFilme = listaFilmes.find((filme) => filme.nota === maiorNota); // Find (encontre) o filme onde a nota for igual a a maior nota
console.log(melhorFilme);

// 4. Atualizar o HTML
document.getElementById("titulo-melhor-filme").innerText = melhorFilme.titulo;
document.getElementById("nota-melhor-filme").innerText = melhorFilme.nota;

// ? Exibir lista e lista com filtro de gênero
const divListaFilmes = document.getElementById("lista-filmes");
let quatidadeFilmesExibidos = document.getElementById("total");

function renderizarfilmes(filmes) {
  // define/recebe como parametro os filmes do array listaFilmes
  divListaFilmes.innerHTML = filmes
    .map(
      (
        filme // o map separa cada item do array e os atribui a elementos do template html abaixo
      ) =>
        `<div class="movie-item">
    <div class="movie-info">
        <p class="movie-titulo">${filme.titulo}</p>
        <span class="movie-ano">${filme.ano}</span>
        <p class="movie-genero">${filme.genero}</p>
    </div>
    <span class="movie-nota">${filme.nota}</span>
</div>`
    )
    .join("");
  quatidadeFilmesExibidos.innerText = filmes.length;
}
renderizarfilmes(listaFilmes); // Roda ao abrir a página e já exibe a lista

let generoAtual = document.getElementById("filtro-genero").value; // Inicializa padrão e pega uma string vazia como filtro de genero, assim mostrando a lista inteira

document.getElementById("filtro-genero").addEventListener("change", (event) => {
  // adiciona um listener para toda vez que mudar de opção ele atribuir na variável e rodar a funç]ao de filtrar
  generoAtual = event.target.value;
  console.log(generoAtual);

  const filmesFiltrados = filtrarPorGenero(generoAtual);
  renderizarfilmes(filmesFiltrados);
});

function filtrarPorGenero(genero) {
  if (genero === "") {
    // se for vazio ele já retorna a lista completa sem alteração ou filtro
    return listaFilmes;
  }

  // filtrar todos os filmes que cumpram as condições passadas na callback function
  return listaFilmes.filter((filme) => filme.genero.includes(genero)); // usa um string method parar procurar palvras que existam dentro de uma string e usa o parametro de genero para buscar
}
