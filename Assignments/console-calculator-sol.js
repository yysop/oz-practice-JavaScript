const num1 = 10;
const num2 = 20;
// let 대신 const 사용하여 변수 값이 변하지 않게 함

const operator = "+";

//

if (operator === "+") {
    console.log(num1 + num2);
} else if (operator === "-") {
    console.log(num1 - num2);
} else if (opeartor === "/") {
    console.log(num1 / num2);
} else if (opeartor === "*") {
    console.log(num1 * num2);
} else {
    console.log("지원하지 않는 연산자입니다.")
}