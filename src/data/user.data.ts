import { LOGIN, EMAIL, PASSWORD } from '../../credential'

type UserData = {
    login: string, 
    email: string,
    password: string,
    name: string,
    bio: string,
}

const charsVowels: string = 'eyuoai'
const charsConsonants: string = 'bcdfghjklmnpqrstvwxz'
const charsOfDigits: string = '0123456789'

function getTime(): number {
    let newDate: Date = new Date()
    return newDate.getTime()
}

function getRandomName(length: number): string {
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
    stringRandom = stringRandom + getTime()
    return stringRandom 
}

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

const userData: UserData = {
    login: LOGIN,
    email: EMAIL,
    password: PASSWORD,
    name: getRandomName(10),
    bio: getRandomBio(100),
}

export {
    UserData,
    userData,
    getRandomName,
}