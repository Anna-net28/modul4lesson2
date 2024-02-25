"use strict"

const nameProduct = (prompt('Наименование товара'));
const quantityOfGoods = Number(prompt('Количество товара'));
if (quantityOfGoods === null) {
    alert('Вы отказались от ввода');
} else if (isNaN(quantityOfGoods % 2)) {
    alert('Ошибка, введено НЕ ЧИСЛО');
};
const productCategory = (prompt('Категория товара'));
const priceProduct = Number(prompt('Цена'));
if (priceProduct === null) {
    alert('Вы отказались от ввода');
} else if (isNaN(priceProduct % 2)) {
    alert('Ошибка, введено НЕ ЧИСЛО');
};
const nameProductquantityOfGoodstotalAmount = String('На складе яблок 5кг на сумму 495 рублей');
console.log(nameProduct);
console.log(quantityOfGoods);
console.log(productCategory);
console.log(priceProduct);
console.log(nameProductquantityOfGoodstotalAmount);
