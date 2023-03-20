//Массивы и методы их перебора
//1.	Объявить массив с именами кошечек или собачек и вывести значение каждого элемента в консоль (for of)


let catsNames: string[] = ['Murka', 'Basuka', 'Whiskey']
let dogsNames: string[] = ['Gafkers', 'MylittleBoy', 'Whois_a_good_boy']
for (const catName of catsNames) {
    console.log(catName)
}

for (const dogN in dogsNames) {
    console.log(dogsNames[dogN])
}

