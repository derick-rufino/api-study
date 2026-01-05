// * Exercício 10: Biblioteca de Utilidades
// ? Crie funções úteis e exporte-as

// * Função de utilidade: Conversão entre moedas através da AwesomeAPI (https://awesomeapi.com.br/)
const API_KEY =
  "b65edff40b4107d0628f1c840aaadbcfee5bbd228b9a5be494f17f8bb66765bc";
async function converterMoeda(valor, moedaOrigem, moedaDestino) {
  const moedas = `${moedaOrigem}-${moedaDestino}`;
  try {
    const response = await fetch(
      `https://economia.awesomeapi.com.br/json/last/${moedas}?token=${API_KEY}`
    );
    if (!response.ok) {
      console.error(`Erro: ${response.status}`);
      throw new Error(`Response Status: ${response.status}`);
    }

    const dados = await response.json();
    console.log(dados);

    const chave = `${moedaOrigem}${moedaDestino}`;
    const cotacao = parseFloat(dados[chave].bid);

    const valorConvertido = valor * cotacao;
    console.log(`${moedas}: ${valorConvertido}`);
    return valorConvertido;
  } catch (error) {
    console.log(error.message);
  }
}

// TODO: validarCPF(cpf)
function validarCPF(cpf) {}

// TODO: calcularIdade(dataNascimento)
function calcularIdade(dataNascimento) {}

export { converterMoeda, validarCPF, calcularIdade };
