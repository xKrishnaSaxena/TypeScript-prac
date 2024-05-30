// let age: number = 20;
// if (age < 50) age += 10;

// let numbers: number[] = [1, 2, 3];

// let user: [number, string] = [1, "Krishna"];
// console.log(user);//[ 1, 'Krishna' ]
// user.push(1);
// console.log(user);// [ 1, 'Krishna', 1 ]

//ENUMS
// const small = 1;
// const medium = 2;
// const large = 3;

// enum Size {
//   Small = 1,
//   Medium,
//   Large,
// }
// let mySiz: Size = Size.Medium;
// console.log(mySiz); //2

//FUNCTIONS
// function calculateTax(income: number): number {
//   if (income < 50000) {
//     return income * 1.2;
//   } else {
//     return income * 1;
//   }
// }

//OBJECTS
// let employee: {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// } = {
//   id: 1,
//   name: "Krishna",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };
// employee.id = 0;//error

//BETTER WAY OF IMPLEMENTING ABOVE OBJECT
// type Employee = {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// };

// let employee: Employee = {
//   id: 1,
//   name: "Krishna",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };

//UNION TYPES
// let weight: number | string; //The weignt can be of type number or string as well

//Literal Types
// type Quantity = 50 | 100;
// let quantity: Quantity;

//OPTIONAL CHAINING
// type Customer = {
//   birthday: Date;
// };
// function getCustomer(id: number): Customer | null | undefined {
//   return id === 0 ? null : { birthday: new Date() };
// }
// let customer = getCustomer(0);
// // if (customer !== null && customer !== undefined) console.log(customer.birthday);
// console.log(customer?.birthday); //better way of writing the above line
