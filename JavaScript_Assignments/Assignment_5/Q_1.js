// 1) Write a JavaScript program to get the volume of a Cylinder, Sphere and
// Cone with four decimal places using objects and classes.
// Create classes for volumes for each geometric shape which returns the
// output using the getVolume() method.
// eg- to get volume of cylinderlet
// obj= new Cylinder(radius,height);
// obj.getVolume();
// Formulas for volumes of the shapes-
// 1) Cylinder- Volume = πr2h
// where r is the radius and h is the height of the cylinder.
// 2)Sphere- Volume= 4/3π𝑟3
// where r is the radius
// 3) Cone- Volume= πr2h/3
// where r is the radius and h is the height of the cone.

class Shape {
  constructor(radius, height) {
    this.height = height;
    this.radius = radius;
  }
}

class Cylinder extends Shape {
  constructor(radius, height) {
    super(radius, height);
  }
  getVolume() {
    return (Math.PI * this.radius ** 2 * this.height).toFixed(4);
  }
}

class Sphere extends Shape {
  constructor(radius) {
    super(radius);
  }
  getVolume() {
    return ((4 / 3) * Math.PI * this.radius ** 3).toFixed(4);
  }
}

class Cone extends Shape {
  constructor(radius, height) {
    super(radius, height);
  }
  getVolume() {
    let val = ((Math.PI * this.radius ** 2 * this.height) / 3).toFixed(4);
    return val;
  }
}

let obj1 = new Cylinder(5, 6);
console.log(obj1.getVolume());

let obj2 = new Sphere(5);
console.log(obj2.getVolume());

let obj3 = new Cone(5, 6);
console.log(obj3.getVolume());
