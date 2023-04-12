// В тестах обеспечить генерацию уникальных имени и bio для модели пользователя.

// уникальный login
const charsVowels: string = 'eyuoai'
const charsConsonants: string = 'bcdfghjklmnpqrstvwxz'
const charsOfDigits: string = '0123456789'

function getRandomLogin(length: number): string {
    let stringRandom = ''
    for (let i = 0; i < length; i++) {
        if (i === length - 2 || i === length - 1) {
            let position = Math.floor(Math.random() * charsOfDigits.length)
            stringRandom += charsOfDigits.substring(position, position + 1)
        } else if (i % 2 === 0) {
            let position = Math.floor(Math.random() * charsConsonants.length)
            stringRandom += charsConsonants.substring(position, position + 1)
        }
        else {
            let position = Math.floor(Math.random() * charsVowels.length)
            stringRandom += charsVowels.substring(position, position + 1)
        }
    }
    return stringRandom
}

console.log(getRandomLogin(11))
console.log(getRandomLogin(8))


function getRandomBio(length: number): string {
    let stringRandom = ''
    for (let i = 0; i < length; i++) {
        if (i % 7 === 0 || i % 13 === 0) {
            stringRandom += ' '
        } else if (i % 2 === 0) {
            let position = Math.floor(Math.random() * charsConsonants.length)
            stringRandom += charsConsonants.substring(position, position + 1)
        }
        else {
            let position = Math.floor(Math.random() * charsVowels.length)
            stringRandom += charsVowels.substring(position, position + 1)
        }
    }
    return stringRandom
}

console.log(getRandomBio(160))











//2.	Написать функцию генерации данных для модели задачи. Обеспечить уникальность названия задачи.

