//? generate password app ------------------------------------------------------------------->

// let's access html element ------------------------------------->
const input = document.getElementById('input');
const copyBtn = document.getElementById('copy-btn');
const generateBtn = document.getElementById('generate-btn');

// let's declare equipment --------------------------------------->
let upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
let numbers = '0123456789';
let symbols = `!@#$%^&*()_+-=[]{}|;:',.<>?/`;

