/*
Задание 20.
Что выведет alert (ИЛИ)?
важность: 3

Что выведет код ниже?

alert( alert(1) || 2 || alert(3) );

http://learn.javascript.ru/task/alert-or
*/

/*
Решение

Оператор "или" выводит первое истинное значение, то есть alert(1), выполняет его и в итоге будет всплывающее окно с 1
Но! alert возвращает undefined, а это ложное значение. Поэтому оператор пойдёт дальше, увидит 2 и выведет его во всплывающем окне. 
На этом проверка закончится
*/