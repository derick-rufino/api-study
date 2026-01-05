import { converterMoeda, validarCPF, calcularIdade } from "./utils.js";

// Esse import é diferente pq eu já havia criado ele para uso anterior no projeto
import formatarParaMoeda from "../utils/formatarMoeda.js";

// * Elementos DOM
//SVGs
const errorSVG = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>`;

// Formatar Moeda
const formatarMoedaForm = document.getElementById("formatar-moeda-form");
const inputMoeda = document.getElementById("input-moeda");
const resultMoeda = document.getElementById("result-moeda");

// Converter Moeda
const converterMoedaForm = document.getElementById("converter-moeda-form");
const inputValor = document.getElementById("input-valor");
const selectDe = document.getElementById("select-de");
const selectPara = document.getElementById("select-para");
const resultConverter = document.getElementById("result-converter");
const moedaErrorDisplay = document.getElementById("erro-unidade-monetaria");

// Validar CPF
const validarCPFForm = document.getElementById("validar-cpf-form");
const inputCPF = document.getElementById("input-cpf");
const resultCPF = document.getElementById("result-cpf");

// Calcular Idade
const calcularIdadeForm = document.getElementById("calcular-idade-form");
const inputNascimento = document.getElementById("input-nascimento");
const resultIdade = document.getElementById("result-idade");

// * Função: formatar texto/número para moeda
formatarMoedaForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let valorFormatado = formatarParaMoeda(inputMoeda.value);

  console.log(valorFormatado);
  resultMoeda.textContent = valorFormatado;
});

// * Função: converter moeda e aplicar valor ao DOM
converterMoedaForm.addEventListener("submit", async (e) => {
  // Chamar uma função async exige que ela seja chamada dentro de uma async tbm...
  e.preventDefault();

  const valor = inputValor.value;
  const moedaOrigem = selectDe.value;
  const moedaDestino = selectPara.value;

  if (!valor) {
    inputValor.style.borderColor = "var(--text-error)";
    return;
  }

  if (moedaOrigem === moedaDestino) {
    // Caso as unidades monetárias sejam iguais
    atualizarSelect("inválido");
    return;
  }

  const valorConvertido = formatarParaMoeda(
    await converterMoeda(valor, moedaOrigem, moedaDestino), // e por isso, PRECISA de um await onde vc chama a função e vai aramazenar sua resposta
    moedaDestino // Passar a moeda destino permite formatar da maneira correta com a novissima função de utilidade ^_^
  );

  resultConverter.textContent =
    valorConvertido !== undefined ? valorConvertido : "Erro na conversão";
});

// Caso os selects mudem, já retirar a corzinha vermelha deles
selectDe.addEventListener("input", atualizarSelect);
selectPara.addEventListener("input", atualizarSelect);

// talvez seja over-engeneering, mas esssa função pode ser reutilizada
function atualizarSelect(estado) {
  if (estado === "inválido") {
    selectDe.style.borderColor = "var(--text-error)";
    selectPara.style.borderColor = "var(--text-error)";
    moedaErrorDisplay.style.display = "flex";
    moedaErrorDisplay.innerHTML = `${errorSVG} Selecione moedas diferentes.`;
  } else {
    selectDe.style.borderColor = "var(--text-faint)";
    selectPara.style.borderColor = "var(--text-faint)";
    moedaErrorDisplay.style.display = "none";
    moedaErrorDisplay.innerHTML = "";
  }
}
