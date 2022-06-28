const buttonArray = document.querySelectorAll('#form-control input');
const controlItems = document.querySelectorAll('.control-items');
const divResult = document.querySelector('.result-board');
const cssResult = document.querySelector('.css-result');

buttonArray.forEach((styleButton, index) => {
    styleButton.addEventListener('click', handleClick);
})

const styleListObject = {
    divResult: divResult,
    justifyContent(value) {
        this.divResult.style.justifyContent = value
    },
    alignItems(value){
        this.divResult.style.alignItems = value
    },
    flexDirection(value){
        this.divResult.style.flexDirection = value
    },
    alignContent(value){
        this.divResult.style.alignContent = value
    },
}


function handleClick(event){
    functionName = event.path[1].id
    styleValue = event.target.value;
    styleListObject[functionName](styleValue);
    showCss();
}

function initcss(){
    divResult.style.cssText = 'justify-content: initial; align-items: initial; flex-direction: initial; align-content: initial; flex-wrap : wrap;'
}
initcss();

function showCss(){
    cssResult.innerHTML = `<span>.Classe{</span>
    <span>  display: flex</span>
    <span>  ${divResult.style.cssText.split('; ').join(';</span><span>  ')}<span>}</span>`
}
showCss();