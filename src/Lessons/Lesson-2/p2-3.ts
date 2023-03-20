// 3.	Создайте тип данных описывающий собак/кошек, придумайте свойства и сделайте вывод свойств в консоль

type Cat = {
    name: string,
    age: number,
    color: string,
    species: string,
}

function printInfo(cat: Cat): string {
    return `${cat.name} ${cat.age} ${cat.color} ${cat.species}`
}

const cat: Cat = { 
    name: 'Lisa-Kolbasa', 
    age: 3, 
    color: 'ginger-foxy', 
    species: 'persian' 
}
console.log(printInfo(cat))