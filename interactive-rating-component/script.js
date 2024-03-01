const numberItem = document.querySelectorAll('.number-item');

function ativaAdicionar() {
    function adicionaAtivo(index) {
        numberItem.forEach((conteudo) => {
            conteudo.classList.remove('numberAtivo')
        })
        numberItem[index].classList.add('numberAtivo');

        const valorSelecionado = numberItem[index].textContent;
        console.log(numberItem[index]);
        resultado.innerHTML = valorSelecionado;

    }
    
    numberItem.forEach((item, index) => {
        item.addEventListener('click', function() {
            adicionaAtivo(index);
        })
    })    
}
ativaAdicionar();

const submitBtn = document.querySelector('.btn');
const container = document.querySelector('.container');
const thankContainer = document.querySelector('.container-none');
const initialContainer = document.querySelector('.note-container');


submitBtn.addEventListener('click', () => {
    initialContainer.classList.remove('note-container');
    initialContainer.classList.add('container-none');
    thankContainer.classList.remove('container-none');
});

const resultado = document.querySelector('.note-result');
const numberClicked = document.getElementsByClassName('numberAtivo');
