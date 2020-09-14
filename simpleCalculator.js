// let, const 사용 및 함수선언문, 함수 표현식 연습

let add = function(num1, num2) { // 함수 선언문 => 함수 표현식 끝에는 ;(세미콜론) 을 붙임
    return num1 + num2;
};

let diff = function(num1, num2) {
    if (num1 >= num2)
        return num1 - num2;
    return num2 - num1;
};

function mul(num1, num2) { // 함수 표현식
    return num1 * num2;
}

function div(num1, num2) {
    return num1 / num2;
}


console.log(add(3, 5));
console.log(div(4, 4));

