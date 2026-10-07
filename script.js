let output = document.querySelector('output');
let btns = document.querySelectorAll('button');
let input = document.querySelector('.input');
let btn;
let value;
let firstOperand;
let currentOperator;
let secondOperand;

input.addEventListener('click' , (e) => {
    if (e.target.matches('button') && !e.target.closest('.operators') && !e.target.closest('.mainCotrollers')) {
     btn = e.target;
     value = btn.textContent
     output.textContent += value;   
    } else if (e.target.closest('.mainCotrollers')) {
        switch (e.target.textContent) {
            case 'CE':
                output.textContent = ''
                firstOperand = '';
                currentOperator = '';
                break;
        
            default:
                break;
        }

    } else if (e.target.closest('.operators')) {
        switch (e.target.textContent) {
            case '+':
                firstOperand = output.textContent;
                currentOperator = '+';
                output.textContent = '';
                console.log(firstOperand);
                
                break;
            default:
                break;
        }
    } else {
        alert('Please click a valid button');
    }
    
})


