function Calculator() {
    this.display = document.querySelector('.display');

    this.start = () => {
        this.clickBtn();
        this.pressEnter();
    }

    this.pressEnter = () => {
        this.display.addEventListener('keypress', e => {
            if (e.keyCode !== 13) return;
            this.result();
        });

    }

    this.clickBtn = () => {
        document.addEventListener('click', event => {
            const element = event.target;
            if (element.classList.contains('btn-number')) this.btnToDisplay(element);
            if (element.classList.contains('btn-clear')) this.clear();
            if (element.classList.contains('btn-del')) this.del();
            if (element.classList.contains('btn-equal')) this.result();
        });
    };

    this.btnToDisplay = element => {
        this.display.value += element.innerText;
        this.display.focus();
    }
    this.clear = () => this.display.value = '';

    this.del = () => this.display.value = this.display.value.slice(0, -1);

    this.result = () => {
        try {
            const operation = eval(this.display.value);

            if (!operation) {
                alert('Invalid operation')
            }

            this.display.value = operation;

        } catch (e) {
            alert('Invalid operation');
            return;
        }
    };
}

// start() {
//     this.clickBtn();

// },

// clickBtn() {
//     document.addEventListener('click', e => {
//         const element = e.target;

//         if (element.classList.contains('btn-number')) {
//             this.btnToDisplay(element.innerText);
//         }

//         if (element.classList.contains('btn-clear')) {
//             this.display.value = '';
//         }

//         if (element.classList.contains('btn-del')) {
//             this.display.value = this.display.value.slice(0, -1);
//         }

//         if (element.classList.contains('btn-equal')) {

//         }
//     });
// },

// btnToDisplay(value) {
//     this.display.value += value;




const calculator = new Calculator();
calculator.start();