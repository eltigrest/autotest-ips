//5.	Написать класс Car. Объект машины, эмулирующий ее работу после создания экземпляра, может находиться в двух состояниях: включена и выключена. 
// По умолчанию состояние автомобиля - выключено. У класса должны быть реализованы методы turnOn() и turnOff() - включающие и выключающие двигатель автомобиля соответственно. 
// Метод getState(), который печатает состояние автомобиля в консоль.
// Задание: Создайте экземпляр класса. Выведите текущее состояние авто. Включите авто и выведите состояние повторно.


class Car {
    protected name: string
    protected isTurnEngine: boolean

    constructor(name: string, isTurnEngine: boolean) {
        this.name = name
        this.isTurnEngine = isTurnEngine
    }

    public turnOn(): void {
        this.isTurnEngine = true
    }

    public turnOff(): void {
        this.isTurnEngine = false
    }

    public getState(): void {
        console.log(`Your Car ${this.name} with the engine with state ${this.isTurnEngine}`)
    }

}

const carEleonora: Car = new Car('Eleonora', false)
carEleonora.getState()
carEleonora.turnOn()
carEleonora.getState()