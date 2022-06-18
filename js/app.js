const modal = document.querySelector('#modal');
const closeModalButton = document.querySelector('.btn.btn-close');
const pageButtons = document.querySelectorAll('.btn.btn-read');

console.log(closeModalButton);

pageButtons.forEach(b => b.addEventListener('click', showModal))
closeModalButton.addEventListener('click', hideModal);

function showModal() {
    modal.style.display = 'flex';
}

function hideModal() {
    modal.style.display = 'none';
}