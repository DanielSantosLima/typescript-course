// let a: (number | string)[] = [1, "a"];
// const logNumber: (i: number) => void = (i: number) => {
//   console.log(i);
// };
// const logNumber1 = (i: number): void => {
//   console.log(i);
// };

// let aa;
// aa = "a";
// aa = 1;

// const printa: (a: string) => void = (a: string): void => {};

// class Person {
//   age: number
//   name: string
// }

// const daniel = new Person()
// daniel.age = 25
// daniel.name = "Daniel"

// type personType = {
//   age: number;
//   name: string;
// };

// const person: personType = {
//   age: 25,
//   name: "Daniel",
// };

// const printPerson = ({ age, name }: Person): void => {
//   console.log(`${name} has ${age} years`);
// };

// printPerson(daniel)

const profile = {
  abc: "Daniel",
  age: 40,
  setAge(age: number): void {
    this.age(age);
  },
  coords: {
    lat: 44,
    long: 88,
  },
};

const { abc }: { abc: string } = profile;

const {
  coords: { lat, long },
}: { coords: { lat: number; long: number } } = profile;

("npx parcel index.html");
