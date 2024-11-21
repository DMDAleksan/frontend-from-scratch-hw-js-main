/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */

const score = 100 // тестовое значение, можно изменять
let grade
// your code

if (score <= 49) {
    grade = 'F'
    alert('your grade F')
} else if (score <= 69) {
    grade = 'D'
    alert('your grade D')
} else if (score <= 79) {
    grade = 'C'
    alert('your grade C')
} else if (score <= 89) {
    grade = 'B'
    alert('your grade B')
} else if (score <= 100) {
    grade = 'A'
    alert('your grade A')
}