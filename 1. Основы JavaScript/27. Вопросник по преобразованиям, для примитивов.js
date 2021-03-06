/*
Задание 27.
Вопросник по преобразованиям, для примитивов
важность: 5

Подумайте, какой результат будет у выражений ниже. Тут не только преобразования типов. Когда закончите – сверьтесь с решением.

http://learn.javascript.ru/task/primitive-conversions-questions
*/

"" + 1 + 0 // 0 + 1 + 0 = 1 // нет. всё преобразуется в строку, будет "10"

"" - 1 + 0 // 0 - 1 + 0 = -1

true + false // 1 + 0 = 1

6 / "3" // 6/3 = 2

"2" * "3" // 2 * 3 = 6

4 + 5 + "px" // "45рх" // нет "9рх"

"$" + 4 + 5 // "$45"

"4" - 2 // 4 - 2 = 2

"4px" - 2 // 0 - 2 = -2 // нет,  нет NaN

7 / 0 // undefined // нет, 7 / 0 = Infinity

"-9\n" + 5 // "-9\n5"

"-9\n" - 5 // -9\n - 5 // = -14

5 && 2 // 2

2 && 5 // 5

5 || 0 // 5

0 || 5 // 5

null + 1 // 0 + 1 = 1

undefined + 1 // 0 + 1 = 1 // нет NaN undefined при численном преобразовании становится NaN

null == "\n0\n" // true // нет false При сравнении == с null преобразования не происходит, есть жёсткое правило: null == undefined и только.

+null == +"\n0\n" // true И левая и правая часть == преобразуются к числу 0.

// итого из 20 14 правильно, 6 неправильно
 