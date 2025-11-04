export function carregarPagina(pagina) {
  const conteudo = document.getElementById('conteudo');

  fetch(`${pagina}.html`)
    .then(response => response.text())
    .then(html => {
      conteudo.innerHTML = html;

      // Ativar validação se for cadastro
      if (pagina === 'cadastro') {
        import('./formValidation.js').then(mod => mod.validarFormulario());
      }
    })
    .catch(() => {
      conteudo.innerHTML = '<p>Erro ao carregar a página.</p>';
    });
}
