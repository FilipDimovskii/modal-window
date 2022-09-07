'use strict';
// Selecting modal,overlay,close modal and show modal classes
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

// toggleModal functions "adds" or "removes" the "hidden" class.

const toggleModal = () => {
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
};

// Using forEach loop because we used querySelectorAll for the "show-modal" class (btnOpenModal returns a node list), so for each modal we add an on-click event listener to remove the hidden classes and to open a modal window for us.

btnOpenModal.forEach(modal => {
  modal.addEventListener('click', toggleModal);
});

//Button that adds a hidden class on click of the "X" icon.

btnCloseModal.addEventListener('click', toggleModal);

// When the modal is open by clicking outside of the modal window it adds the "hidden" class.

overlay.addEventListener('click', toggleModal);

// Event listener on the whole document so if the modal is active we can close it just by clicking on the "Esc" key. (adds the "hidden class").

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    toggleModal();
  }
});
