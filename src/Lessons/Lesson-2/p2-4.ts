// 4.	Создайте список группы из 4 студентов(массив объектов) и напечатайте в консоль их имена и возраст.

type Student = {
  name: string,
  age: number,
}

let students: Student[] = []

const stud: Student = {
  name: 'Anna',
  age: 17,
}

students.push(stud)
students.push({ name: 'Ivan', age: 18 })
students.push({ name: 'Viktoriya', age: 19 })
students.push({ name: 'Elena', age: 18 })

for (const num in students) {
  console.log(students[num].name, ' ', students[num].age)
}