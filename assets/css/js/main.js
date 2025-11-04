import { carregarPagina } from './spa.js';
import { validarFormulario } from './formValidation.js';
import './script.js';

document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav a');
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');

  // MENU MOBILE
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });

    // Fechar menu com ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('active')) {
        nav.classList.remove('active');
        menuToggle.focus();
      }
    });
  }

  // SPA: troca de página sem recarregar
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const pagina = e.target.getAttribute('data-pagina') || e.target.getAttribute('href').replace('.html', '');
      carregarPagina(pagina);
    });
  });

  // Ativar validação se estiver na página de cadastro
  if (window.location.pathname.includes('cadastro.html')) {
    validarFormulario();
  }
});
