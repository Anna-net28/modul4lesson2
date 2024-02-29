'use strict';

let procent = 0;

const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n) || n !== 'string';
};

const calculateTax = () => {
  let salaryTax = prompt('Введите сумму Вашего ежемесячного дохода в виде: 2000 или 2000.00');
	if (!salaryTax) return;

  if (!isNumber(salaryTax) || (salaryTax <= 15000 && salaryTax > 0)) {
    procent = salaryTax * 0.13;
    procent = procent.toFixed(2);
    return alert(`Налог 13% Сумма к уплате ${procent} руб.`);
  } else if (!isNumber(salaryTax) || (salaryTax <= 50000 && salaryTax > 0)) {
    procent = salaryTax * 0.20;
    procent = procent.toFixed(2);
    return alert(`Налог 20% Сумма к уплате ${procent} руб.`);
  } else if (!isNumber(salaryTax) || salaryTax > 50000 && salaryTax > 0) {
    result = salaryTax * 0.30;
    procent = procent.toFixed(2);
    return alert(`Налог 30% Сумма к уплате ${procent} руб.`);
  } else {
    alert('Введите сумму Вашего ежемесячного дохода');
    return calculateTax();
  }
};
calculateTax();

console.log(salaryTax);
console.log(procent);