// let x: number = 100; // мы говорим, что в переменной x будет только намбер
// let str: string = "Hello"; // мы говорим, что в переменной будет только строка
// let isValid: boolean = true;
// // str = 100
// let someTh: any = 1230; // Описывает данные, которые могут быть неизвестны на момент создания, её можно перезаписывать, означает что угодно. Если мы не присваеваем никакой тип, то typescr. думает, что у него тип any
// someTh = "hello";

// interface IUser {
//   readonly id: number; // id может измениться только один раз, при создании, и дальше он будет нам доступен только при чтении
//   name: string;
//   color?: string; // вопрос. знак означает, что он может быть, а может и не быть. У нас есть объект Юзер
//   size: {
//     width: number;
//     height: number;
//   };
// } //название интерфейса всегда с большой буквы I - Означает интерфейс. Интерфейс - универсальный тип данных, который можно использовать для объектов, это что то вроде шаблона

// const user: IUser = {
//   id: 123,
//   name: "Tom Cruise",
//   color: "#ccc",
//   size: {
//     width: 50,
//     height: 100,
//   },
// };

// // TypeScript позволяет, создавать интерфейсы включающие в себя комбинации других интерфейсов, что позволяет настроить очень гибкое взаимодействие между интерфейсами

// interface IUserWithArea extends IUser {
//   //extends означает что берет значение у родительского элемента
//   getArea: () => number;
// }

// const user2: IUserWithArea = {
//   id: 123,
//   name: "Tom Cruise",
//   size: {
//     width: 50,
//     height: 100,
//   },
//   getArea(): number {
//     return this.size.width * this.size.height;
//   },
// };

// interface IStyles {
//   [key: string]: string; // чтобы указать для всех значений один интерфейс, то нужно писать так, в кв. скобках пишется string
// }

// const css: IStyles = {
//   padding: "10px 20px 40px 50px",
//   position: "relative",
//   //и т.д
// };

// // Enum

// // interface IPerson {
// //   name: string;
// //   age: number;
// //   position: string;
// // }

// // const person: IPerson = {
// //   name: "Alex",
// //   age: 25,
// //   position: "бухгалтер",
// // };

// // type Position = "manager" | "seller"; // мы можем делать фиксированные значения | значок или

// enum Position { //это способ перечисления элементов в тайпскрипт, у него нет хойстинга
//   Manager = "manager",
//   Seller = "seller",
//   TechLead = "techLead",
// }

// interface IPerson {
//   name: string;
//   age: number;
//   position: Position;
// }

// const person: IPerson = {
//   name: "Alex",
//   age: 25,
//   position: Position.TechLead,
// };

// Array - тип массивы
// never - представляет отсутствие значения и используется в качестве возвращаемого типа функций, которые генерируют или возвращают ошибку
// enum Position {
//   Manager = "manager",
//   Seller = "seller",
//   TechLead = "techLead",
//   Director = "director",
// }

// interface IDirector {
//   position: Position.Director;
//   name: string;
//   salary: number;
// }

// interface ISeller {
//   position: Position.Seller;
//   name: string;
//   salary: number;
//   product: string;
// }

// function employeeTypeCheck<T extends Position>( // t наследуется от position
//   position: T, // тип функции
//   emloyee: IDirector | ISeller
// ) {
//   if (position === Position.Director) {
//     return emloyee as T extends Position.Director ? IDirector : never;
//   } else {
//     return emloyee as T extends Position.Seller ? ISeller : never;
//   }
// }

// const user1 = {
//   position: Position.Seller as const,
//   name: "Kate",
//   salary: 5000,
//   product: "Phone",
// };

// const user2 = {
//   position: Position.Director as const,
//   name: "Alice",
//   salary: 15000,
// };

// const seller = employeeTypeCheck(user1.position, user1);
// const director = employeeTypeCheck(user2.position, user2);
// // enum побольше узнать нужно

// console.log(seller, director);

//1
let n: number = 10;
let str: string = "Десять";
let b: boolean = true;

// 2 task

// function calculateArea(radius: number): number {
//   const pi = 3.14;
//   const area = pi * radius ** 2;
//   return area;
// }
// console.log(calculateArea(5));

// function calculateDensity(mass: number, volume: number): number {
//   const density = mass / volume;
//   return density;
// }
// console.log(calculateDensity(100, 50));

//3
// Определение типа Product
// type Product = {
//   id: number;
//   title: string;
//   description: string;
//   price: number;
//   colors: string[];
// };

// const products: Product[] = [
//   {
//     id: 1,
//     title: "Продукт 1",
//     description: "Описание продукта 1",
//     price: 15,
//     colors: ["Красный", "Синий"],
//   },
//   {
//     id: 2,
//     title: "Продукт 2",
//     description: "Описание продукта 2",
//     price: 10
//     colors: ["Зеленый", "Желтый"],
//   },
//   {
//     id: 3,
//     title: "Продукт 3",
//     description: "Описание продукта 3",
//     price: 20,
//     colors: ["Черный", "Белый"],
//   },
// ];

// console.log(products);
