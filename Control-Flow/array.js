// 배열(array)
let numbers = [10, "two", 30]; 

//console.log(numbers[0]);
//console.log(numbers[1]);

//for문으로 실행
//방법1
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers(i));
}

//방법2 - entries함수 실행하면 index값 꺼낼 수 있음
for (const [i, num] of numbers.entries()) {
    console.log(i + "번 index 값: " + num);
}
