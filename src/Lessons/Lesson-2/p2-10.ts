//Promise/async/await
// 10.	Добавьте в класс автомобиля метод добавления скорости setSpeed(). Минимальная скорость 0, максимальная 100. 
// При выключенном автомобиле скорость задавать нельзя. Ошибки выводить в консоль текстом

class CarInfo {
    protected name: string
    protected isTurnEngine: boolean
    protected speed: number = 0

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

    public setSpeed(speed: number): void {

        if(this.checkSpeed(speed)) {
            this.speed =speed
            console.log(`set Speed ${this.speed}`)
        }
    }

    private checkSpeed(speed: number): boolean
    {
        if (this.isTurnEngine === false) {
            console.log(`Speed 0, because the engine with state ${this.isTurnEngine}`)
            return false
        } 
        
        if (speed >= 0 && speed <= 100) {
            return true
        } else {
            console.log(`Wrong speed, value ${speed} not in between 0..100 `)
            return false
        }
    }


    public getState(): void {
        console.log(`Your Car ${this.name} with the engine with state ${this.isTurnEngine} Speed ${this.speed}`)
    }
}

const carElena: CarInfo = new CarInfo('Elena', false)
carElena.getState()
carElena.setSpeed(50)
carElena.turnOn()
carElena.getState()
carElena.setSpeed(50)
carElena.getState()
carElena.setSpeed(1010)
carElena.getState()