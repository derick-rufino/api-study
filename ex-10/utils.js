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

// * Função de utilidade: calcularIdade(dataNascimento)
function calcularIdade(dataNascimentoString) {
  const hoje = new Date(); // pega a data e hora atual com formato padrão
  const dataNascimento = new Date(dataNascimentoString); // Foemata para data

  let idade = hoje.getFullYear() - dataNascimento.getFullYear(); // primeiro subtrair os anos
  const mes = hoje.getMonth() - dataNascimento.getMonth(); // Difentença entre os meses, permite calcular se já passou o aniversário ou não

  // ? Checa se o aniversário da pessoa ainda não aconteceu neste ano - complicadissimo
  if (mes < 0 || (mes === 0 && hoje.getDate() < dataNascimento.getDate())) {
    // Se o mês atual é menor que o mês de nascimento, o aniversário ainda não chegou
    // Se o mês é igual, mas o dia atual é menor que o dia de nascimento, o aniversário também não chegou
    // Então precisamos subtrair 1 da idade, pois a pessoa ainda não fez aniversário este ano
    idade--;
  }

  return idade;
}

export { converterMoeda, validarCPF, calcularIdade };
