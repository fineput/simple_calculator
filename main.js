const input_field = document.querySelector('.input_field');
const calculator_buttons = document.querySelector('.button_calc');
const result_operation = document.querySelector('.result_operation');

const operators = ['+', '-', '*', '/', '.', '%'];


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

    if (e.target.id === 'inversion'){
        let currentDisplay = input_field.innerText;

        let lastNumberRegex = /(-?\d+(\.\d+)?)$/;

        input_field.innerText = currentDisplay.replace(lastNumberRegex, (match) => {
            return (Number(match) * -1).toString();
        });
        return;
    }


    if(currentInput === '0'){
        if(buttonText === '.' ) {
            input_field.innerText = '0.';
        } else if(operators.includes(buttonText)){
            if(buttonText === '-') input_field.innerText = buttonText;
            return;
        } else {
            input_field.innerText = buttonText;
        }
    } else {
        const lastChar = currentInput.slice(-1);
        if (operators.includes(buttonText)){
            if (operators.includes(lastChar)){
                input_field.innerText = currentInput.slice(0, -1) + buttonText;
                return;
            }
        }
        input_field.innerText += buttonText;
    }
})