/* function verificarNumero() {
  const valor = Number(document.getElementById("valorInput").value); 
  switch (valor) {
    case 10:
      alert(`correto - 10`);
      break;
    case 25:
      alert(`correto - 25`);
      break;
    case 30:
      alert(`correto - 30`);
      break;
    default:
      alert("Incorreto");
  }
} */

/* const lista = [5, 10, 25, 30, 100];

function verificarNumero() {
  const valor = Number(document.getElementById("valorInput").value);

  lista.forEach((numeros) => document.write(numeros * valor + "<br>"));
} */

let nomes = [];

function verificarNumero() {
  const nomeInserido = document.getElementById("nomes").value;
  console.log(nomeInserido);

  nomes.push(nomeInserido);

  // * Opção 1: com <br>
  const htmlBr = nomes.map((n) => n.toUpperCase()).join("<br>");

  // * Opção 2: com <p>
  // const htmlP = nomes.map((n) => `<p>${n.toUpperCase()}</p>`).join("");

  // * Opção 3: com lista <ul>
  // const htmlLista = "<ul>" + nomes.map((n) => `<li>${n.toUpperCase()}</li>`).join("") + "</ul>";

  document.getElementById("nomesExibidos").innerHTML = htmlBr;
}
