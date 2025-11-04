document.addEventListener("input", (e) => {
  const input = e.target;

  if (input.id === "cpf") {
    input.value = input.value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  }

  if (input.id === "telefone") {
    input.value = input.value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2");
  }

  if (input.id === "cep") {
    input.value = input.value
      .replace(/\D/g, "")
      .replace(/(\d{5})(\d)/, "$1-$2");
  }
});
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});
