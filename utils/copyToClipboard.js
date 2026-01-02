/**
 * copyToClipboard.js
 * ! Gerado por IA
 *
 * Utilitário global para copiar texto para a área de transferência
 *
 * ? Uso:
 * copyToClipboard('texto para copiar');
 * copyToClipboard('texto', callbackSucesso, callbackErro);
 */

/**
 * Copia texto para a área de transferência
 * @param {string} texto - Texto a ser copiado
 * @param {Function} [onSuccess] - Callback executado em caso de sucesso
 * @param {Function} [onError] - Callback executado em caso de erro
 * @returns {Promise<boolean>} - Retorna true se copiado com sucesso
 */
async function copyToClipboard(texto, onSuccess, onError) {
  // * Verifica se a API Clipboard está disponível
  if (!navigator.clipboard) {
    console.error("API Clipboard não suportada neste navegador");
    if (onError) onError(new Error("Clipboard API não suportada"));
    return false;
  }

  try {
    await navigator.clipboard.writeText(texto);
    console.log("Texto copiado:", texto);
    if (onSuccess) onSuccess(texto);
    return true;
  } catch (erro) {
    console.error("Erro ao copiar:", erro);
    if (onError) onError(erro);
    return false;
  }
}

/**
 * Copia o conteúdo de um elemento para a área de transferência
 * @param {string} seletorOuId - Seletor CSS ou ID do elemento
 * @param {Function} [onSuccess] - Callback executado em caso de sucesso
 * @param {Function} [onError] - Callback executado em caso de erro
 * @returns {Promise<boolean>} - Retorna true se copiado com sucesso
 */
async function copyElementContent(seletorOuId, onSuccess, onError) {
  // * Tenta encontrar o elemento por ID ou seletor
  const elemento =
    document.getElementById(seletorOuId) || document.querySelector(seletorOuId);

  if (!elemento) {
    const erro = new Error(`Elemento não encontrado: ${seletorOuId}`);
    console.error(erro.message);
    if (onError) onError(erro);
    return false;
  }

  // * Pega o valor (input/textarea) ou texto (outros elementos)
  const texto =
    elemento.value !== undefined ? elemento.value : elemento.textContent;

  return copyToClipboard(texto, onSuccess, onError);
}

