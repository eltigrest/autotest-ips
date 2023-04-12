// 1.	Написать функции, которые возвращают уникальные строки, текущую отметку времени (time stamp) и случайные числа. 
// В тестах обеспечить генерацию уникальных имени и bio для модели пользователя.

// уникальная строка
const chars: string = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789'
function getRandomString(length: number): string {
    let stringRandom = ''
    for (let i = 0; i < length; i++) {
        let position = Math.floor(Math.random() * chars.length)
        stringRandom += chars.substring(position, position + 1)
    }
    return stringRandom
}

console.log(getRandomString(5))
console.log(getRandomString(25))


// текущая отметка времени
function getTime(): number {
    let newDate: Date = new Date()
    return newDate.getTime()
}

console.log(getTime())


//рандомное число
function getSimpleRandomNumber(max: number): number {
    return Math.floor(Math.random() * max)
}

console.log(getSimpleRandomNumber(5))
console.log(getSimpleRandomNumber(37787))


const charsOfDigit: string = '0123456789'
function getStringRandomNumber(maxLength: number): string {
    let stringNumber = ''
    for (let i = 0; i < maxLength; i++) {
        let position = Math.floor(Math.random() * charsOfDigit.length)
        stringNumber += charsOfDigit.substring(position, position + 1)
    }
    return stringNumber
}

console.log(getStringRandomNumber(4))
console.log(getStringRandomNumber(10))