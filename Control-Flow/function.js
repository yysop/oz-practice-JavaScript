// 함수 (function)

function add(num1, num2) {
    return num1 + num2
}

// 반환(return) = 호출부로 값을 되돌려주는 것
let result = add(1, 2);
console.log(result);
// === console.log(add(1, 2));

// 호출부 (호출하는 곳) -> add 함수 호출 -> add 함수 실행 -> 결과값이 반환

// function wrapper(func) {
//     const result = func(1, 2);
//     console.log(result);
// }

// wrapper(add)