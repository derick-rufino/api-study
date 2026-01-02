function converterParaMoeda(value) {
  return value.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}

export default converterParaMoeda;
