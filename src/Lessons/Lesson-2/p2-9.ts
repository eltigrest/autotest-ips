//Promise/async/await
//9.	Доработать функцию  print() из задания 7, чтобы печатался результат промиса из задания 8 в состоянии rejected.
{
console.log('Wait 100 msec...')
const promise:Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('resolve')
    }, 1000)

    setTimeout(() => {
        reject('error')
    }, 100)

})

async function print(): Promise<void> {
    try {
        console.log('Fulfilled: ', await promise)
    } catch (err) {
        console.log('Rejected: ', err)
    }
}

print()
}
