const screen = document.querySelector('.input');
const buttons = document.querySelectorAll('button');
const clear = document.querySelector('.clear');
const equal = document.querySelector('.equal');
let curVal = "";


function calculator(){
buttons.forEach((element) =>{
element.addEventListener('click', (e) =>{
    if(e.target.innerText == '='){
        curVal = String(eval(curVal));
        screen.value = curVal;

    }else if(e.target.innerText == 'AC'){
        curVal = '';
        screen.value = curVal;
    }
    else{
        curVal += e.target.innerText;
        screen.value = curVal;
    }
})
})
}

calculator()
