const salesModal = document.getElementById('sales');
const salesClose = document.getElementById('seles-close');

salesClose.addEventListener('click', ()=> {
    salesModal.classList.add('sales-show');
})