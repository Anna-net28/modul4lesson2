"use strict"

const salaryTax = +(prompt('Введите сумму Вашего ежемесячного дохода'));
let percent = 0;

if (!isNaN(salaryTax) && salaryTax != ' ' && salaryTax <= 15000 && salaryTax > 0) {
    percent = salaryTax * 0.13;
    alert(`Налог 13% Сумма к уплате ${percent} руб.`);
}
else if (!isNaN(salaryTax) && salaryTax > 0 && salaryTax != ' ' && salaryTax > 15000 && salaryTax <= 50000) {
    percent = salaryTax * 0.20;
    alert(`Налог 20% Сумма к уплате ${percent} руб.`);
}
else if (!isNaN(salaryTax) && salaryTax > 0 && salaryTax != ' ' && salaryTax > 50000) {
    percent = salaryTax * 0.30;
    alert(`Налог 30% Сумма к уплате ${percent} руб.`);
}
console.log(salaryTax);
console.log(percent);
