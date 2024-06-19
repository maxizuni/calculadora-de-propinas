let bill = document.querySelector('.bill__input');
let billNumber = parseInt(bill.value);

let people = document.querySelector('.number-people__input');
let peopleNumber = parseInt(people.value);

let tipResult = document.querySelector('.tip-amount__number');
let totalResult = document.querySelector('.tip-total__number');

let btns = document.querySelectorAll('.btns__button');

let alert = document.querySelector('#alert')

let tipValue = 5;

    btns.forEach(element=>{
        element.addEventListener('click', event=>{
            // Cambiar estilos
            removeActive();
            element.classList.add('btns__button--selected');

        tipValue = parseInt(event.target.innerText.slice(0,-1));

        calculateTip()
    });
});
// Actualizar Custom
let custom = document.querySelector('.btns__custom')

custom.addEventListener('click', ()=>{
    removeActive();
});
custom.addEventListener('input', ()=>{
    tipValue = parseInt(custom.value);
    if (isNaN(tipValue)){

    }else{
        calculateTip();
    }
});

// Actualizar Bill
bill.addEventListener('input', ()=>{
    billNumber = parseFloat(bill.value)
    if (isNaN(billNumber)){

    }else{
        calculateTip();
    }
});

// Actualizando numero de personas
people.addEventListener('input', ()=>{
    peopleNumber = parseFloat(people.value)
    if(peopleNumber == 0 || isNaN(peopleNumber)){
        people.style.borderColor = 'rgb(164, 68, 68)';
        alert.classList.add('error')
    }else{
        alert.classList.remove('error')
        people.style.borderColor = 'hsl(189, 41%, 97%)';
        calculateTip()
    }
});

// Boton de reset
let resetBtn = document.querySelector('.reset__button');

resetBtn.addEventListener('click', ()=>{
    bill.value = 0;
    billNumber = 0;
    people.value = 5;
    peopleNumber = 5;
    custom.value = 'Custom';

    calculateTip();
});

// Funciones
function calculateTip(){
    // Calculo para tip amount
    tipResult.innerText = ((billNumber * tipValue / 100) / peopleNumber).toFixed(2);

    // Calculo para el total
    totalResult.innerText = (((billNumber * tipValue / 100) + billNumber) / peopleNumber).toFixed(2);
}
function removeActive(){
    btns.forEach(element =>{
        element.classList.remove('btns__button--selected');
    });
}