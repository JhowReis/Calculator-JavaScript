function createCalculator() {
    return {
        display: document.querySelector('.display'),
        // btnClear: document.querySelector('.btn-clear'),



        start() {
            this.clickBtn();
            this.pressEnter();
        },

        pressEnter(){
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13){
                    this.alert('meu ovo')
                }
            });
        },


        clickBtn() {
            document.addEventListener('click', e => {
                const element = e.target;

                if (element.classList.contains('btn-number')) {
                    this.btnToDisplay(element.innerText);
                }

                if (element.classList.contains('btn-clear')) {
                    this.display.value = '';
                }

                if (element.classList.contains('btn-del')) {
                    this.display.value = this.display.value.slice(0, -1);
                }

                if (element.classList.contains('btn-equal')) {
                    
                }
            });
        },

        btnToDisplay(value) {
            this.display.value += value;

        },

    };
}

const calculator = createCalculator();
calculator.start();