import {Car, Plane} from './2';

const NewCar = new Car();
const NewPlane = new Plane();

describe('Car/Plane Methods', () => {
  it('Car has gas', () => {
    expect(NewCar.has_gas()).toBe(true);
  }),
  it('Plane has gas ', () => {
    expect(NewPlane.has_gas()).toBe(true);
  })
});