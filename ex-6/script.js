// * Exercício 6: Gerador de Senhas
// ? Crie uma função que gera uma senha aleatória
// ? Parâmetros: tamanho da senha
// ? Use caracteres, números e símbolos



// Atualizar o display de quantidade de caracteres
const rangeQuantidadeChar = document.getElementById("quantidadeChar");

rangeQuantidadeChar.addEventListener("input", (event) => {
  // evento de input permite que seja atualizado em tempo real :o wow
  document.getElementById("quantidadeOutput").innerText = event.target.value;
});

document.getElementById("specsSenha").addEventListener("submit", (e) => {
  e.preventDefault();

  let tamanho = rangeQuantidadeChar.value;

  let opcoes = {
    maiusculas: document.getElementById("contemMaiuscula").checked,
    minusculas: document.getElementById("contemMinuscula").checked,
    numeros: document.getElementById("contemNumeros").checked,
    simbolos: document.getElementById("contemSimbolos").checked,
  };

  gerarSenha(tamanho, opcoes);
});

document.getElementById("specsSenha").addEventListener("change", () => {
  // ? Esconde a mensagem de erro quando algum checkbox mudar
  document.getElementById("mensagemErro").classList.add("hidden");
});

// Conjunto de caracteres disponíveis em cada opção
const MAIUSCULAS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const MINUSCULAS = "abcdefghijklmnopqrstuvwxyz";
const NUMEROS = "0123456789";
const SIMBOLOS = "!@#$%^&*()_+-=[]{}|;:,.<>?";

function caracterAleatorio(conjunto) {
  return conjunto[Math.floor(Math.random() * conjunto.length)];
}

function gerarSenha(tamanho, opcoes) {
  let caracteres = "";
  const mensagemErro = document.getElementById("mensagemErro");

  // * Verifica se pelo menos uma opção está selecionada
  if (
    !opcoes.maiusculas &&
    !opcoes.minusculas &&
    !opcoes.numeros &&
    !opcoes.simbolos
  ) {
    mensagemErro.textContent = "Selecione pelo menos uma opção";
    mensagemErro.classList.remove("hidden");
    return; //  Para a execução aqui
  }

  if (opcoes.maiusculas) caracteres += MAIUSCULAS;
  if (opcoes.minusculas) caracteres += MINUSCULAS;
  if (opcoes.numeros) caracteres += NUMEROS;
  if (opcoes.simbolos) caracteres += SIMBOLOS;

  let senha = "";
  for (let i = 0; i < tamanho; i++) senha += caracterAleatorio(caracteres);

  document.getElementById("senhaGerada").innerText = senha;

  return senha;
}

document.getElementById("copiarSenha").addEventListener("click", () => {
  const senha = document.getElementById("senhaGerada").textContent;
  copyToClipboard(senha);
});