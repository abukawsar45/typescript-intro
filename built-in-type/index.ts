let firstName: string;
let lastName: string;
let fullName: string;
let age: number;
let userId: number;
let isStudent: boolean;

firstName = 'Abu';
lastName = 'KawSar';
fullName = firstName.concat(lastName);
age = 22;
console.log(fullName, age);

// const checkFisVoid = (a,b) : void => {
//   console.log('oky, i understand');
//   return a+b
// }
// const sum = checkFisVoid(3, 6)
// console.log(sum)
function checkFisVoid  ()   {
  console.log('Okay, I understand');
  // return 33;
};

// checkFisVoid()
const sum = checkFisVoid();
console.log(sum);
