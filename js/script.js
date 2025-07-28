//? generate password app ------------------------------------------------------------------->

// let's access html element ------------------------------------->
const input = document.getElementById('input');

// let's declare equipment --------------------------------------->
const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = `!@#$%^&*()_+-=[]{}|;:',.<>?/`;
const passLength = 12;
const allCharacter =`${upperCaseLetters}${lowerCaseLetters}${numbers}${symbols}`;

// event listener here ------------------------------------------->
document.getElementById('generate-btn').addEventListener('click', () => {
    displayPassword();
});

document.getElementById('copy-btn').addEventListener('click', () => {
    copyText();
});

// function ------------------------------------------------------>
const generatePassWord = () => {
    let password = '';

    password += upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
    password += lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    for (let i = 0; password.length < passLength; i++) {
        password += allCharacter[Math.floor(Math.random() * allCharacter.length)];
    };

    return password;
};

const displayPassword = () => {
    input.value = generatePassWord();
};

const copyText = () => {
    navigator.clipboard.writeText(input.value)
    .then(() => {
        alert('Copied to clipboard!');
    })
    .catch((err) => {
        alert(`Failed to copy:${err}`);
    });
};