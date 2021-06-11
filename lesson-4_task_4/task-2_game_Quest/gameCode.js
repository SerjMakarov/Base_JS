//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var event, ok, arAnswer = [null], err = true;

//var answers = [];
callQuestion(works.a00, works.a1, works.a2);
switch (event) {
    case step = 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        console.log(step);
        callQuestion(works.b00, works.b1, works.b2);
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                callQuestion(works.d00, works.d1, works.d2);
                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                callQuestion(works.d00, works.d1, works.d2);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case step = 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        callQuestion(works.c00, works.c1, works.c2);
        switch (event) {
            case 1: // Второе действие
                callQuestion(works.d00, works.d1, works.d2);
                break;
            case 2: // Второе действие
                callQuestion(works.d00, works.d1, works.d2);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
        err = false;
        break;
}
if(err){
    getResponse();
}

//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
	return true;
}

function callQuestion(answer, optionA, optionB){
    do {//Выводим первый вопрос
        ok = false;
        event = +prompt(answer + optionA + optionB + '-1 - Выход из игры'); //получаю ответ от игрока
        if(event === 1){
            arAnswer.push([answer, optionA]);
        } else {
            arAnswer.push([answer, optionB]);
        }  
        if (event == -1) {
            break;
        }
        else {
            return ok = isAnswer(works.a0, event);
        }
    } while (!ok);
}

function getResponse(){
    response = +prompt('Укажите номер шага, чтобы узнать как вы ответили');
    if(!response){
        alert('Спасибо за игру');
    } else {
        alert('Ваш вопрос:\n\n' + arAnswer[response][0] + '\n\n'  + 'Ваш ответ:\n\n' + arAnswer[response][1] );
    }
}

