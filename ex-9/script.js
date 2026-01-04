// * Exercício 9: Múltiplas Requisições
// ? Busque 3 piadas ao mesmo tempo usando Promise.all()
// ? Exiba todas juntas

const cardDisplay = document.getElementById("cardDisplay");
const button = document.getElementById("getJoke");

const url = "https://official-joke-api.appspot.com/random_joke";
button.addEventListener("click", getThreeJokes);

const loader = `
<div id="loader-container" class="mt-3">
                    <div id="loader">
                        <div class="loaderSquare"></div>
                        <div class="loaderSquare"></div>
                        <div class="loaderSquare"></div>
                    </div>
                    <p class="text-muted" id="loader-text">Carregando dados...</p>
                </div>
`;

const errorMessage = `
<div class="alert alert-danger mt-3" role="alert">
                    Ocorreu um erro ao buscar as piadas. Tente novamente mais tarde.
                </div>
`;

async function getThreeJokes() {
  cardDisplay.innerHTML = loader;
  button.disabled = true;
  try {
    const promises = [fetch(url), fetch(url), fetch(url)];

    const responses = await Promise.all(promises);

    responses.forEach((response) => {
      if (!response.ok) {
        throw new Error(`Response Status: ${response.status}`);
      }
    });

    const jokes = await Promise.all(responses.map((joke) => joke.json()));
    console.log(jokes);

    cardDisplay.innerHTML = jokes
      .map(
        (joke) => `
            <div class="card mb-2" id="joke-display">
            <p id="joke1-setup">${joke.setup}</p>
            <p class="mt-1" id="joke-punchline">${joke.punchline}</p>
            </div>
            `
      )
      .join("");
    button.disabled = false;
  } catch (error) {
    cardDisplay.innerHTML = errorMessage;
    button.disabled = false;
    console.error("Erro em uma das requições: ", error);
  }
}
