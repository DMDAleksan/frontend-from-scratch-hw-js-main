/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3,4 ]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/
const array = [1, 2, 3, 2, 1, 4]

function findUniqueElements(array) {
    const uniqueElements = []
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (!includesElement(uniqueElements, element)){
            uniqueElements.push(element)
        }
    }
    return uniqueElements
}

