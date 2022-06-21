/* 1*:
Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
Пример: const checkAge = function(age) {
Ваши преобразования
} */
// Вывести в консоль результат работы функции с возрастами 17, 18, 61

// let age_1 = 10;
let age_2 = 18;
let age_3 = 60;
//let age = ["17", 18, 61];

const checkAge = function (age) {
    if (age < age_2) {
        console.log ('You don`t have access cause your age is ' + age + ' It`s less then ')
    } else if (age >=  age_2 & age <  age_3)   {
        console.log ('Welcome  !')
    } else if (age  > age_3) {
    console.log ('Keep calm and look Culture channel')
    } else {
console.log ('Technical work')
}
}
//checkAge(age[0]);
//checkAge(age[1]);
//checkAge(age[2]);
checkAge(17);
checkAge(18);
checkAge(61);
console.log ('.........')
/* 2*:
Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка. */

const checkAge2 = function (age) {
    if (typeof (age) == "number") {
            
             if (age < age_2) {
              console.log ('You don`t have access cause your age is ' + age + ' It`s less then ')
            } else if (age >=  age_2 & age <  age_3)   {
              console.log ('Welcome  !')
            } else {
                console.log ('Keep calm and look Culture channel')
            } 
    }
    else {
    console.log ('Technical work')
    }
}
//checkAge2(age[0]);
//checkAge2(age[1]);
//checkAge2(age[2]);
checkAge2("17");
checkAge2(18);
checkAge2(61);
console.log ('.........')
/* 3**:
Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number */

const checkAge3 = function (age) {
    
            age == Number(age);
             if (age < age_2) {
              console.log ('You don`t have access cause your age is ' + age + ' It`s less then ')
            } else if (age >=  age_2 & age <  age_3)   {
              console.log ('Welcome  !')
            } else if (age  > age_3) {
              console.log ('Keep calm and look Culture channel')
            } else {
              console.log ('Technical work')
            }
}
//checkAge3(age[0]);
//checkAge3(age[1]);
//checkAge3(age[2]);
checkAge3("17");
checkAge3(18);
checkAge3(61);
/* 4***:
Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке */