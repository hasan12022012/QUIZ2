"use strict";

let inp = document.querySelector('#inp');
let btn = document.querySelector('#btn');
let text = document.querySelector('#text');


function add() {
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    let password=''
    for (let i = 0; i < inp.value; i++) {
        let randomNumber = Math.floor(Math.random()* alphabet.length)
        password+= alphabet[randomNumber];

    }
    console.log(password);
    text.innerHTML=password;
}

btn.addEventListener('click', add);

