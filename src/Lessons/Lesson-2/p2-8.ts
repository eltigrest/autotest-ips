//Promise/async/await
//8.	Доработать промис из задания 6, добавить опциональный 2-ой аргумент, через которое промис перейдет в состояние reject через 100 миллисекунд.
{
    console.log('Wait 100 msec...')

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('resolve')
        }, 1000)

        setTimeout(() => {
            reject('error')
        }, 100)

    })

    promise.then(resolve => console.log(resolve), reject => console.log(reject))

}