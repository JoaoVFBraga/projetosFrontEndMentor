const titulo = document.querySelectorAll('.faq dt');
const descricao = document.querySelectorAll('.faq dd');

function mostraDescricao(item) {
    this.classList.toggle('ativo');
    this.nextElementSibling.classList.toggle('ativo');
}

titulo.forEach((item) => {
    item.addEventListener('click', mostraDescricao);
})
