/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/
const str1 = 'hello'

function doubleEachCharacter(str) {
    let resultStr = ""
    for (let index = 0; index < str.length; index++) {
        resultStr += str[index] + str[index]
    }
    return resultStr
}

console.log(doubleEachCharacter(str1));
