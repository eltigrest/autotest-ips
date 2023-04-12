//7.	Написать асинхронную функцию print(), которая будет печатать результат промиса из задания 6.
{
    console.log('Wait 1000 msec...')
    const promise: Promise<string> = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('resolve')
        }, 1000)

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





//    .then(value => console.log(value))  npx ts-node .\p2-7.ts  C:\Users\70699\Documents\GitHub\autotest-ips\src\Lessons\Lesson-2\      
