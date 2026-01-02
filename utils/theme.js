/**
 * ! Gerado por IA
 * Theme Toggle
 * Alterna entre light/dark mode e salva preferência no localStorage
 */

(function () {
  const STORAGE_KEY = "theme";

  // * Aplica tema salvo ou detecta preferência do sistema
  function initTheme() {
    const savedTheme = localStorage.getItem(STORAGE_KEY);

    if (savedTheme) {
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
    // Se não houver tema salvo, deixa o sistema decidir (via media query)
  }

  // * Alterna entre temas
  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    let newTheme;

    if (currentTheme === "dark") {
      newTheme = "light";
    } else if (currentTheme === "light") {
      newTheme = "dark";
    } else {
      // Nenhum tema manual definido, inverte a preferência do sistema
      newTheme = prefersDark ? "light" : "dark";
    }

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem(STORAGE_KEY, newTheme);
  }

  // * Inicializa tema antes do render
  initTheme();

  // * Adiciona listener ao botão quando DOM estiver pronto
  document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.querySelector(".theme-toggle");

    if (toggleBtn) {
      toggleBtn.addEventListener("click", toggleTheme);
    }
  });
})();
