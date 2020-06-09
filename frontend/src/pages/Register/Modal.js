export function iniciaModal(modalId) {
  const modal = document.getElementById(modalId)
  modal.classList.add('mostrar')
  modal.addEventListener('click', (e) => {
    if(e.target.id == modalId  || e.target.className == 'fechar') {
      modal.classList.remove('mostrar')
    }
  });
}

const cadastrar = document.querySelector('.button')
cadastrar.addEventListener('click', () => iniciaModal('modal-main'));