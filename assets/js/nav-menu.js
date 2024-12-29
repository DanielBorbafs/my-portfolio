function setActive(page) {
  // Remover a classe 'active' de todos os artigos
  const articles = document.querySelectorAll('article');
  articles.forEach((article) => article.classList.remove('active'));

  // Adicionar a classe 'active' ao artigo correspondente
  const activeArticle = document.querySelector(`.${page}`);
  if (activeArticle) {
    activeArticle.classList.add('active');
  }

  // Remover o estilo dos links ativos anteriores
  const links = document.querySelectorAll('[data-nav-link]');
  links.forEach((link) => (link.style.color = ''));

  // Adicionar estilo ao link correspondente
  const activeLink = document.querySelector(`[data-nav-link="${page}"]`);
  if (activeLink) {
    activeLink.style.color = '#8e6de9'; // Define a cor vermelha para o link ativo
  }
}

// Definir o estado inicial para 'sobre' como ativo
setActive('sobre');
