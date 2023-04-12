//Promise/async/await
//6.	Создать промис, который перейдет в состояние fulfilled через 1000 миллисекунд с текстом “resolve”.
//Для ожидания используйте стандартную функцию setTimeout()
//export {};
{
    console.log('Wait 1000 msec...')
    const promise: Promise<string> = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('resolve')
        }, 1000)
    })
 
    promise.then(resolve => console.log(resolve))
}