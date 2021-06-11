questions = {
    questA: 'Сколько дней у православных продолжается Рождественский пост?',
    answerA: ['40', '30', '20', '50'],
    questB: 'Советский инженер, создатель телевизионной башни на Шаболовке в Москве?',
    answerB: ['Щусев', 'Кваренги', 'Кавос', 'Шухов'],
    questC: 'Где, если верить пословице, любопытной Варваре нос оторвали?',
    answerC: ['На вокзале', 'На базаре', 'На Драккаре', 'Не отрывали'],
    option: [1, 2, 3, 4],
}

var stop = false;

for(key in questions){
    switch(key){
        case 'questA':
            userResponse = callQuestion(questions[key], getAnswer(questions.answerA));
            switch(userResponse){
                case 1:
                    alert('Это правильный ответ, выйгрышь 500 руб');
                    break;
                default:
                    alert('Это неправильный ответ, cумма сгорела');
                    stop = true;
                    break;   
            }
            break;
        case 'questB':
            userResponse = callQuestion(questions[key], getAnswer(questions.answerB));
            switch(userResponse){
                case 4:
                    alert('Это правильный ответ, выйгрышь 1000 руб');
                    break;
                default:
                    alert('Это неправильный ответ, cумма сгорела');
                    stop = true;
                    break;    
            }
            break;
        case 'questC':
            userResponse = callQuestion(questions[key], getAnswer(questions.answerC));
            switch(userResponse){
                case 2:
                    alert('Это правильный ответ, выйгрышь 2000 руб\n\n Первая несгораемая сумма');
                    break;
                default:
                    alert('Это неправильный ответ, cумма сгорела');
                    stop = true;
                    break;   
            }
            break
    }
    if(stop){
        break;
    }
}

function getAnswer(answer){
    var numAnswer = '';
    for(i = 0; answer.length > i; i++){
        numAnswer += questions.option[i] + ': ' + answer[i] + '\n\n';
    }
    return numAnswer; 
}

function callQuestion(question, answer){
    do {
        userResponse = +prompt(question + '\n\n' + answer + 'Введите номер варианта!');
        isAnswer(questions.option.length ,userResponse);
        if(isAnswer){
            return userResponse;
        } else {
            userResponse = false;
        }

    } while (!ok);
}

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