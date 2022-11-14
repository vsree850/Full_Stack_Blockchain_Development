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
