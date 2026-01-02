// * Exercício 8: Buscador de Piadas
// ? Use fetch para buscar uma piada aleatória da API:
// ? https://official-joke-api.appspot.com/random_joke
// ? Exiba o setup e o punchline
// ? Use async/await

const url = "https://official-joke-api.appspot.com/random_joke";
document.getElementById("getJoke").addEventListener("click", renderJoke);

async function renderJoke() {
  const joke = await getJoke();

  document.getElementById("joke-setup").innerText = joke.setup;

  setTimeout(() => {
    document.getElementById("joke-punchline").innerText = joke.punchline;
  }, 2000);
}

async function getJoke() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response Status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error.message);
  }
}
