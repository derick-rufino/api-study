// * Exercício 3: Lista de Compras Inteligente
// ? Crie um array com 5 produtos (objetos com nome e preco)
// ? Use .map() para adicionar desconto de 10%
// ? Use .filter() para mostrar apenas produtos abaixo de R$50
// ? Use .reduce() para calcular o total

import formatarParaMoeda from "../utils/formatarMoeda.js";

const produtos = [
  // Array original de produtos
  { nome: "Fones de ouvido bluetooth", preco: 250.0 },
  { nome: "Bolsa Carteiro Transversal", preco: 210.0 },
  { nome: "Livro Código Limpo", preco: 70.0 },
  { nome: "Regata masculina de algodão", preco: 35.0 },
  { nome: "Playstation 5 Slim Edição Digital", preco: 3100.5 },
];

let produtosExibidos = produtos; // carrega a lista original e exibe ela

const carrinho = document.getElementById("productList"); // Seleciona a div e faz um map no array
function renderizarProdutos(produtos) {
  // Função para exibir a lista de itens correta ao atualizar através dos botões
  carrinho.innerHTML = produtos
    .map(
      (
        produto // o map separa cada item do array e os atribui a elementos do template html abaixo
      ) =>
        `<div class="product-item">
            <span class="product-name">${produto.nome}</span>
            <span class="product-price">${formatarParaMoeda(
              produto.preco
            )}</span>
            </div>`
    )
    .join("");
  /* usa o join para trocar o tipo dos separadores do array.
        Sem ele, o array usa vírgula para separar os itens e isso cairia no HTML tbm */
}
renderizarProdutos(produtos); // Roda ao abrir a página e já exibe a lista

// Seleciona os botões e adiciona listeners de click
document
  .getElementById("addDiscount")
  .addEventListener("click", adicionarDesconto);
document
  .getElementById("filterCheap")
  .addEventListener("click", filtrarPrecoBaixo);
document.getElementById("calcTotal").addEventListener("click", exibirTotal);

function adicionarDesconto() {
  produtosExibidos = produtos.map((produto) => ({
    // a callback function usa um obejto para atribuir os valores do calculos feitos. isso permite renderizar nome e preco de forma correta
    nome: produto.nome,
    preco: produto.preco - produto.preco * 0.1,
  }));
  renderizarProdutos(produtosExibidos);
}

function filtrarPrecoBaixo() {
  produtosExibidos = produtos.filter((produto) => produto.preco < 100); // Filtra produtos com preõ abaixo de 100
  renderizarProdutos(produtosExibidos);
}

function calcularTotal() {
  let total = produtosExibidos.reduce((acumulador, produto) => {
    // para cada pruto que ele passa
    return acumulador + produto.preco; // soma o preço do produto ao acumulador
  }, 0);

  return total;
}

function exibirTotal() {
  document.getElementById("product-total-container").style.display = "flex";
  document.getElementById("productTotal").innerText = formatarParaMoeda(
    calcularTotal()
  );
}
