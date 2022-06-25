// 2я домашка по JS со звездочками:

// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

for (i = 1; i <= 10; i++) {
    let a = 2**i;
    console.log(a);
}

console.log('-------------------------\n')

// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

function AAA (i) {
    let a = 2**i;
    console.log(a);
}

AAA(10)

console.log('-------------------------\n')
// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

for (i = 1; i <= 5; i = i + 1) {
    console.log(':)'.repeat(i));
}

console.log('-------------------------\n')
// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)

function printSmile(stroka, numberOfRows) {
        
    console.log(stroka.repeat(numberOfRows));
}
printSmile(':)', 10)

console.log('-------------------------\n')
// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв

function getWordStructure(xxx) {
    const arr_0 = ['a', 'e', 'i', 'o', 'u'];
    let arr = xxx.split("");
    let eee = [];
    for ( i = 0; i < arr.length; i++) {
        
        for (j = 0; j <= arr_0.length; j++){
            
            if (arr[i] == arr_0[j]) {
                eee.push(arr[i])     
            }
        }
    }
    console.log(`Слово '${xxx}' состоит из ${eee.length} гласных и ${arr.length - eee.length} согласных букв`)
}

getWordStructure('case')
getWordStructure('Case')
getWordStructure('Check-list')

// Проверки: 'case', 'Case', 'Check-list'
console.log('-------------------------\n')
// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)

function isPalindrom(xxx){
    let ddd = xxx.toLowerCase().split("");
    // console.log(ddd)
    let RRR = ddd.reverse().join('')
    // console.log(RRR)
    if (xxx.toLowerCase() === RRR) {
        console.log(`Слово '${xxx}' является палиндромом.`)
    } else {
        console.log(`Слово '${xxx}' не является палиндромом.`)
    }

}
isPalindrom('abba')
isPalindrom('Abba')
isPalindrom('Bitcoin')
isPalindrom('LevEl')

// Проверки: 'abba', 'Abba'