'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelector('.show-modal');

btnOpenModal.addEventListener('click', showModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

function showModal() {
  overlay.classList.remove('hidden');
  modal.classList.remove('hidden');
}

function closeModal() {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  }
});
