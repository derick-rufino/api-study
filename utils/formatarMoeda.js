function formatarParaMoeda(value, currency = "BRL") {
  // BRL como padrão: no caso de não ser especificado (como nos usos anteriores a esse buff) continue funcionando
  const numero = Number(value);
  if (isNaN(numero)) return "Valor inválido";

  switch (currency) {
    case "USD":
      return numero.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    case "EUR":
      return numero.toLocaleString("de-DE", {
        style: "currency",
        currency: "EUR",
      });
    case "BRL":
    default:
      return numero.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
  }
}

export default formatarParaMoeda;

// oh wow! usando switch e um novo parametro, posso formatar as moedas em tres moedas diferentes!!
