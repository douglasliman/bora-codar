
    const previewCalc = document.querySelector('.previewCalc');
    const buttons = document.querySelectorAll('.buttons button');
    
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            switch(button.classList[0]) {
                case 'number':
                    previewCalc.value += button.textContent;
                    break;
                case 'reset':
                    previewCalc.value = '';
                    break;
                case 'delete':
                    previewCalc.value = previewCalc.value.slice(0, -1);
                    break;
                case 'mais':
                    previewCalc.value += '+';
                    break;
                case 'menos':
                    previewCalc.value += '-';
                    break;
                case 'multiplicacao':
                    previewCalc.value += '*';
                    break;
                case 'divisao':
                    previewCalc.value += '/';
                    break;
                case 'porcetagem':
                    previewCalc.value = eval(previewCalc.value) / 100 * 100;
                    break;
                case 'virgula':
                    previewCalc.value += '.';
                    break;
                case 'mais ou menos':
                    previewCalc.value = previewCalc.value * -1;
                    break;
                case 'igual':
                    previewCalc.value = eval(previewCalc.value);
                    break;
                default:
                    break;
            }
        });
    });

