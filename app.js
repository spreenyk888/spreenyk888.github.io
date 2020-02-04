const container = document.querySelector('.container');
let newDivs = document.createElement('div')
var number = 16;
var area = number * number;

createGrid(number);

function createGrid(number)
{  
     
    container.style.gridTemplateRows = `repeat(${number}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${number}, 1fr)`;


    for(i=1; i<=area; i++){
        let newDivs = document.createElement('div');
        newDivs.className = "newDivs";
        container.appendChild(newDivs);
        console.log("div created");
};

const effect = document.querySelectorAll('.newDivs')
if (effect) {
    effect.forEach(function(effect) {
        effect.addEventListener ('mouseover' , function() {
            effect.style.backgroundColor = 'red';
        })
    });
}
}

function clearContainer () {
    container.innerHTML = '';
    var number = prompt("enter new size");
    createGrid(number);
}

const button = document.querySelector('.resetButton');
button.addEventListener('click' , clearContainer);
