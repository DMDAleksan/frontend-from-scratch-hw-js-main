/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/
const array = [1, 2, 3, 2, 1, 4]
const uniqueElements = []

function findUniqueElements(array) {
    for (let num = 0; num < array.length; num++) {
        if (num) {
            uniqueElements.push
        }
    }
    return uniqueElements
}

const resault = findUniqueElements(array)
console.log(resault);
