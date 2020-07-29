interface Vehicle {
  set_num_of_wheels: (wheelNumber: number) => void;
  set_num_of_passengers: (passengerNumber: number) => void;
  has_gas: () => boolean;
}

// a: We are creating Car and Plane class by implementing the Vehicle interface using Creational Design pattern

class Car implements Vehicle {
  set_num_of_wheels(wheelNumber: number) {
    console.log(wheelNumber);
  }
  set_num_of_passengers(passengerNumber: number) {
    console.log(passengerNumber);
  }
  has_gas() {
    return true;
  }

  // implement car specific methods below
}

class Plane implements Vehicle {
  set_num_of_wheels(wheelNumber: number) {
    console.log(wheelNumber);
  }
  set_num_of_passengers(passengerNumber: number) {
    console.log(passengerNumber);
  }
  has_gas() {
    return true;
  }

  // implement plane specific methods below
}

// b: Use a different design pattern for this solution.

// Ans: Alternatively we can use Structural Inheritance pattern

class NewVehicle {
  set_num_of_wheels(wheelNumber: number) {
    console.log(wheelNumber);
  }
  set_num_of_passengers(passengerNumber: number) {
    console.log(passengerNumber);
  }
  has_gas() {
    return true;
  }
}

class NewCar extends NewVehicle {
  // implement car specific methods below
}

class NewPlane extends NewVehicle {
  // implement plane specific methods below
}

export {
  Car,
  Plane
}
