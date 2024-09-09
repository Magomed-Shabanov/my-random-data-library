// Массив случайных имен
const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];

// Функция для генерации случайного имени
function getRandomName() {
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
}

// Функция для генерации случайного числа в заданном диапазоне
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция для генерации случайной даты в пределах текущего года
function getRandomDate() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 1); // начало года
    const end = new Date(now.getFullYear(), 11, 31); // конец года
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

// Экспортируем функции, чтобы они были доступны другим разработчикам
module.exports = {
    getRandomName,
    getRandomNumber,
    getRandomDate
};
