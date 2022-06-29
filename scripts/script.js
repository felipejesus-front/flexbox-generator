const buttonArray = document.querySelectorAll('#form-control input');
const divResult = document.querySelector('.result-board');
const cssResult = document.querySelector('.css-result');
const activeClass = 'ativo'

// adiciona o evento de clique para cada botão do formulário
buttonArray.forEach((styleButton) => {
    styleButton.addEventListener('click', handleClick);
})

// lista de funções para mudar o estilo da divResultado, dependendo da area clicada
const styleListObject = {
    divResult: divResult,
    justifyContent(value) {
        this.divResult.style.justifyContent = value
    },
    alignItems(value) {
        this.divResult.style.alignItems = value
    },
    flexDirection(value) {
        this.divResult.style.flexDirection = value
    },
    alignContent(value) {
        this.divResult.style.alignContent = value
    },
}

// Ao clicar em um botão ele lida com as funções
// Pega a propriedade css e seu valor de acordo com o botão clicado
// usa esses valores para ativar uma função da lista a cima
// mostra o css atualizado na div de código
// remove a classe ativo de todos os botões da mesma div do que foi clicado
// adiciona a classe ativo somente no botão clicado
function handleClick(event) {
    functionName = event.path[1]
    styleValue = event.target.value;
    botoes = event
    styleListObject[functionName.id](styleValue);
    showCss();
    removeActive(functionName.id)
    event.path[0].classList.add(activeClass);
}

// inicia o css com algumas opções já estabelecidas
function initcss() {
    divResult.style.cssText = 'justify-content: initial; align-items: initial; flex-direction: initial; align-content: initial; flex-wrap : wrap;'
}
initcss();

// Insere o texto de Css do flexbox na div cssResult
function showCss() {
    cssResult.innerHTML = `<span>.Classe{</span>
    <span>  display: flex</span>
    <span>  ${divResult.style.cssText.split('; ').join(';</span><span>  ')}<span>}</span>`
}
showCss();

//Remove o ativo de todos os botões do grupo em que foi apertado
function removeActive(id) {
    const controlItems = document.querySelectorAll(`#${id}`);
    const arrayButtons = [...controlItems[0].children];
    arrayButtons.forEach((item) =>{
        item.classList.remove(activeClass)
    })
}
