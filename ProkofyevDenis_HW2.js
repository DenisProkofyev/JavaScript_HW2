/*1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1 */
let a = 2
for (i=1; i<=10; i++) {
    console.log(a**i)
} 

/*1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2*/
const pow = (i) => {
    console.log(a**i)
}
pow(7)

/* 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
Пример в консоли:
:)
:):)
:):):)
:):):):)
:):):):):) */

let smile = ':)'
let result = ''
for (x=1; x<=5; x++) {
    result += smile
    console.log(result)
    }

/* 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода
e.g. function printSmile(stroka, numberOfRows) */

const newSmile = (str, rows) => {
for (x=1; x<=rows; x++) {
    console.log(str.repeat(x))
}
}
newSmile('M', 7)

/* 3**.  Написать функцию, которая принимает на вход слово. Задача функции - посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
e.g. function getWordStructure(word)
В консоли:
Слово (word) состоит из  (число) гласных и (число) согласных букв
Проверки: 'case', 'Case', 'Check-list'*/

const lettersNumber = (word) => {
    word2 = word.toLowerCase().replace(/[^a-z]/g, '')
    let vowelCount = 0
    let consonantCount = 0
    for (x = 0; x<word.length; x++) {
        if (word2[x] == 'a' || word2[x] == 'e' || word2[x] == 'i' || word2[x] == 'o' || word2[x] == 'u' || word2[x] == 'y')
        vowelCount++;
        if (word2[x] != '-' && word2[x] != 'a' && word2[x] != 'e' && word2[x] != 'i' && word2[x] != 'o' && word2[x] != 'u' && word2[x] != 'y' && word[x] != '-')
        consonantCount++;
        }
    console.log('Слово "' + word +'" состоит из ' + vowelCount + ' гласных и ' + consonantCount + ' согласных букв')
}
lettersNumber('case')
lettersNumber('Case')
lettersNumber('Check-list')
lettersNumber('opportunity')
lettersNumber('Moscow')
lettersNumber('1_%---')
lettersNumber('s-s')
// let consonants = 'bcdfghjklmnpqrstvwxz'.split
 /* if (97< word.charCodeAt(0) && word.charCodeAt(0) <= 122 && word[count] != 'a' && word[count] != 'e' && word[count] != 'i' && word[count] != 'o' && word[count] != 'u' || word[count] == 'y')
            consonantCount++;
            }*/

/* 4**. Написать функцию, которая проверяет, является ли слово палиндромом
e.g. function isPalindrom(word)

Проверки: 'abba', 'Abba'
*/

const isPalindrome = (word) => {
    let lowerCase = word.toLowerCase()
    if (lowerCase === lowerCase.split('').reverse().join('')) {
        console.log(word + " is a palindrome")
    }
    else
    console.log(word + " is not a palindrome")
}
isPalindrome('Abba');
isPalindrome('abba');
isPalindrome('abba7')