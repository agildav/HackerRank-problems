/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */

class Polygon {
  constructor(sideLengths) {
    this.sides = [];
    for (let index = 0; index < sideLengths.length; index++) {
      this.sides.push(sideLengths[index]);
    }
  }

  perimeter() {
    return this.sides.reduce((prev, current) => {
      return prev + current;
    });
  }
}
