// actions
const card = document.querySelector('#card');

card.addEventListener('click', () => {
    card.classList.toggle('active');
});

const openFormButton = document.querySelector('#open-form-btn');
const cardForm = document.querySelector('#card-form');
openFormButton.addEventListener('click', () => {
    openFormButton.classList.toggle('active');
    cardForm.classList.toggle('active');
});

// select content
for (let i=1; i<=12; i++) {
    let monthOption = document.createElement('option');
    monthOption.value = i;
    monthOption.innerText = i;
    cardForm.selectMonth.appendChild(monthOption);
}

const currentYear = new Date().getFullYear();
for (let i=currentYear; i<=currentYear+8; i++) {
    let yearOption = document.createElement('option');
    yearOption.value = i;
    yearOption.innerText = i;
    cardForm.selectYear.appendChild(yearOption);
}

// show card front
const showFront = () => {
    if (card.classList.contains('active')) {
        card.classList.remove('active');
    }
}

// card number input
let cardNumber = document.querySelector('#card .card-number');
let cardName = document.querySelector('#card .card-name');
let cardLogo = document.querySelector('#logo');

cardForm.inputNumber.addEventListener('keydown', (e) => {
    let inputValue = e.target.value;
    cardForm.inputNumber.value = inputValue
    .replace(/\s/g, '')     //find all whitespace and replace for nothing
    .replace(/\D/g, '')     //find all characters diferent from 0 to 9
    .replace(/([0-9]{4})/g, '$1 ')
    .trim();

    cardNumber.textContent = cardForm.inputNumber.value;

    if (inputValue == '') {
        cardNumber.textContent = '#### #### #### ####';
        cardLogo.innerHTML = '';
    }

    if (inputValue[0] == 4) {
        cardLogo.innerHTML = '';
        const img = document.createElement('img');
        img.src = 'img/logos/visa.png';
        cardLogo.appendChild(img); 
    } else if(inputValue[0] == 5) {
        cardLogo.innerHTML = '';
        const img = document.createElement('img');
        img.src = 'img/logos/mastercard.png';
        cardLogo.appendChild(img); 
    }

    showFront();
    
});


