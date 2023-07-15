const apple: string = 'apple'
const number: number = 123 
const boolean: boolean = true

console.log(apple)
console.log(number)
console.log(boolean)

//
type JAKE = [string, number, boolean]
let jake: JAKE = ['jake', 123, true]


interface Person { 
  name: string
  age: number
  isStudent: boolean
}

type Status = "success" | "error" | "pending";

let currentStatus: Status;

currentStatus = "success"; // 유효
currentStatus = "error";   // 유효
currentStatus = "pending"; // 유효
// currentStatus = "failure"; // 오류: "failure"은 허용되지 않음
