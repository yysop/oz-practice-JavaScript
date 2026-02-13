const readline = require('readline'); // 터미널 입력을 위한 모듈 불러오기

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 질문을 순차적으로 던지기 위해 함수처럼 구성
rl.question('첫 번째 숫자를 입력하세요: ', (num1) => {
    rl.question('연산자를 입력하세요 (+, -, *, /, %): ', (operator) => {
        rl.question('두 번째 숫자를 입력하세요: ', (num2) => {
            
            // 입력받은 값은 '문자열'이므로 '숫자'로 변환
            // 터미널로 입력받은 값은 무조건 '문자'로 인식되기 때문
            const n1 = parseFloat(num1);
            const n2 = parseFloat(num2);
            let result;

            // 1. 산술 연산 (Switch문)
            switch (operator) {
                case "+": result = n1 + n2; break;
                case "-": result = n1 - n2; break;
                case "*": result = n1 * n2; break;
                case "/": result = n2 !== 0 ? n1 / n2 : "Error: 0으로 나눌 수 없음"; break;
                case "%": result = n1 % n2; break;
                default: result = "Invalid operator";
            }

            console.log(`\n[결과] ${n1} ${operator} ${n2} = ${result}`);

            // 2. 짝수/홀수 판별 (결과가 숫자일 때만)
            if (typeof result === "number") {
                const check = result % 2 === 0 ? "짝수(Even)" : "홀수(Odd)";
                console.log(`판별: 결과값은 ${check}입니다.`);
            }

            rl.close(); // 입력을 마쳤으니 인터페이스를 닫아줌
        });
    });
});

