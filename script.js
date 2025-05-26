'use strict';

function start(x) {
    let a;
    let promptMessage = "Угадай число от 1 до 100";

    const isNumber = function (num) {    
        return !isNaN(parseFloat(num)) && isFinite(num);
    }

    function engine() {
        a = prompt(promptMessage);

        if (a == null) {
            alert("Игра окончена");
        } else if (!isNumber(a)) {
            promptMessage = "Введи число!";
            engine();
        } else if (x !== parseFloat(a)) {
            promptMessage = (x > parseFloat(a)) ? "Загаданное число больше, предлагаю ввести новый вариант" : "Загаданное число меньше, предлагаю ввести новый вариант";
            engine();
        } else {
            alert("Поздравляю, Вы угадали!!!");
        }
    }
    engine();
}

start(55);