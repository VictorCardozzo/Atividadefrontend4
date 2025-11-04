export function validarFormulario() {
  const form = document.querySelector('.form-cadastro');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // remover erros anteriores
    form.querySelectorAll('.error').forEach(el => el.remove());

    let isValid = true;

    const campos = form.querySelectorAll('input[required]');
    campos.forEach(input => {
      if (!input.value.trim()) {
        isValid = false;
        const error = document.createElement('span');
        error.className = 'error';
        error.innerText = 'Campo obrigatório';
        input.insertAdjacentElement('afterend', error);
      }
    });

    if (isValid) {
      alert('Cadastro realizado com sucesso!');
      form.reset();
    }
  });
}
