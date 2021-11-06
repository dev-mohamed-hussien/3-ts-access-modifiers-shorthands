// without short hands
class User {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
// with short hands
class CUstomer {
  constructor(public name: string, private age: number) {}
}

const user = new User("mohamed", 27);
const customer = new CUstomer("mido", 20);

console.log(user, customer);
// no different its just shorthands
