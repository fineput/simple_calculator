const input_field = document.querySelector('.input_field');
const calculator_buttons = document.querySelector('.button_calc');
const result_operation = document.querySelector('.result_operation');


calculator_buttons.addEventListener('click', function(e){
    if (!e.target.classList.contains('default_button')) return;
    e.preventDefault();

    let buttonText = e.target.innerText;
    let currentInput = input_field.innerText;

    if(e.target.id === 'delete_last_figure'){
        let currentDisplay = input_field.innerText;

        if(currentDisplay.length > 1){
            input_field.innerText = currentDisplay.slice(0, -1);
        } else {
            input_field.innerText = '0';
            result_operation.innerText = '0 + 0'
        }
        return;
    }

    if(e.target.classList.contains('delete_all')){
        input_field.innerText = '0';
        result_operation.innerText = '0 + 0'
        return;
    }

    if (e.target.classList.contains('equal')){
        try {
            let result = eval(currentInput);
            result_operation.innerText = currentInput;

            if(Number.isInteger(result)) {
                input_field.innerText = result;
            } else {
                input_field.innerText = parseFloat(result.toFixed(3));
            }
             
        } catch {
            input_field.innerText= 'Error'
        }
        return;
    }

    if(currentInput === '0'){
        input_field.innerText = buttonText;
    } else {
        input_field.innerText += buttonText;
    }

    //РЕЛІЗУВАТИ РОБОТУ ІНВЕРСІЇ +/-
})