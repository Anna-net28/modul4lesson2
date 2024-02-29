"use strict"
const rain = Math.random(Math.round());
if (rain) {
}
else if (rain > 0) {  
    alert('Пошёл дождь. Возьмите зонт!');
}
else if (rain == 0) {
    alert('Дождя нет!');
}
console.log(rain);

const resultMathematics = (+prompt('Математика', ''));
const resultRussianLanguage = (+prompt('Русский язык', ''));
const computerScienceResult = (+prompt('Информатика', ''));
const result = '';
if (result) {
}
else if (resultMathematics + resultRussianLanguage + computerScienceResult >= 265) {
    alert('Поздравляем, вы набрали достаточное количество баллов');
}
else if (resultMathematics + resultRussianLanguage + computerScienceResult < 265) {
    alert('Вы набрали недостаточное количество баллов');
};

console.log(resultMathematics);
console.log(resultRussianLanguage);
console.log(computerScienceResult);
console.log(resultMathematics + resultRussianLanguage + computerScienceResult);

const howMuchMoney = (+prompt('Какую сумму вы хотите снять?', ''));
      if ( howMuchMoney % 100 === 0) {
        alert('Банкомат выдаст вам эту сумму');
      }
else {
    alert('Введите сумму кратную 100');
};
console.log(howMuchMoney);

