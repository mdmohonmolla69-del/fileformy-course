let string = '';
let buttons = document.querySelectorAll('.button');

document.addEventListener('keydown', (e) => {
    const key = e.key;
    if (key === 'Enter') {
        e.preventDefault();
    }

    if (/[0-9]|\+|-|\*|\/|\.|%/.test(key)) {
        string = string + key;
        document.querySelector('input').value = string;
    } else if (key === 'Enter' || key === '=') {
        try {
            string = eval(string);
        } catch (error) {
            string = 'Error'
        }
        document.querySelector('input').value = string;
    } else if (key === 'Backspace') {
        string = string.slice(0, -1);
        document.querySelector('input').value = string;
    } else if (key === 'Escape') {
        string = '';
        document.querySelector('input').value = string;
    }
})

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.innerHTML == '=') {
            try {
                string = eval(string);
            } catch (error) {
                string = 'Error'
            }
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML == 'AC') {
            string = '';
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML == 'DE') {
            string = string.slice(0, -1);
            document.querySelector('input').value = string;
        } else {
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }

    })
})