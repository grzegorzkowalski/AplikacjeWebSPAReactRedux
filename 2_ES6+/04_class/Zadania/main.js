class Vehicle {
    constructor(name) {
        this.name = name;
    }
    getName() {
        console.log(this.name);
        return this.name;
    }
}

class Boat extends Vehicle {
    sail() {
        console.log("Cześć nazywam się " + this.getName() + " i pływam.");
    }
}

class Car extends Vehicle {
    drive() {
        console.log("Cześć nazywam się " + this.getName() + " i jadę.");
    }
}

class Plane extends Vehicle {
    fly() {
        console.log("Cześć nazywam się " + this.getName() + " i lecę.");
    }
}

const boat = new Boat("Niezatapialna 2");
boat.sail();
//boat.fly();

const car = new Car("Maluch");
car.drive();

const plane = new Plane("Jastrząb");
plane.fly();
