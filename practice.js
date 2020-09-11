//Object() 명령으로 객체 생성
/*

var foo = new Object();
foo.name = 'foo';
foo.age = 30;
foo.gender = 'male';

console.log(typeof foo);
console.log(foo);
*/

// 객체 리터럴로 객체 생성방법
/*
var foo = {
    name : 'foo',
    age : 30,
    gender : 'male'
};

console.log(typeof foo);
console.log(foo);
*/

// for in 문을 이용해 모든 프로퍼티에 대한 루프 수행
/*
var foo = {
    name : 'foo',
    age : 30,
    major : 'computer science'
};

var prop;
for (prop in foo) {
    console.log(prop, foo[prop]);
}
*/

//delete를 이용해 객체의 프로퍼티를 삭제 가능 but 객체 자체는 삭제 불가
/*
var foo = {
    name : 'foo',
    nickname : 'babo'
};

console.log(foo.nickname);
delete foo.nickname;
console.log(foo.nickname);

delete foo;
console.log(foo.name);
*/

//객체의 모든 연산은 참조값으로 처리됨
/*
var objA = {
    val : 40
};
var objB = objA;

console.log(objA.val);
console.log(objB.val);

objB.val = 50;
console.log(objA.val);
console.log(objB.val);
*/

//Call by value, Call by reference
/*
var a = 100;
var objA = {
    value : 100
};

function changeArg(num, obj) {
    num = 200;
    obj.value = 200

    console.log(num);
    console.log(obj);
}

changeArg(a, objA);

console.log(a);
console.log(objA);
*/

// 배열 리터럴
/*
var colorArr = ['orange', 'yellow', 'blue' , 'green', 'red'];

console.log(colorArr[0]);
*/

// 배열의 요소 생성, 인덱스를 통한 접근, 배열의 길이
/*
var emptyArr = [];

console.log(emptyArr[0]);


emptyArr[0] = 100;
emptyArr[3] = 'eight';
emptyArr[7] = true;

console.log(emptyArr);
console.log(emptyArr.length);
*/

// 배열 length 프로퍼티의 명시적 변경
/*
var arr = [0, 1, 2];
console.log(arr.length);
console.log(arr[2]);

arr.length = 5;
console.log(arr);

arr.length = 2;
console.log(arr);
console.log(arr[2]);
*/

// 배열의 push
/*
var arr = ['zero', 'one', 'two'];

arr.push('three');
console.log(arr);

arr.length = 5;
arr.push('four');
console.log(arr);
*/

// 배열과 객체의 차이 => 프로토타입의 차이
/*
var colorsArray = ['orange', 'yellow', 'green'];
console.log(colorsArray[0]);
console.log(colorsArray[1]);
console.log(colorsArray[2]);


var colorsObj = {
    '0' : 'orange',
    '1' : 'yellow',
    '2' : 'green'
};

console.log(colorsObj[0]);
console.log(colorsObj[1]);
console.log(colorsObj[2]);

console.log(typeof colorsArray);
console.log(typeof colorsObj);

console.log(colorsArray.length);
console.log(colorsObj.length);

colorsArray.push('red');

console.log(colorsArray);
colorsObj.push('red');
*/

//배열의 프로퍼티 동적 생성
/*
var arr = ['zero', 'one', 'two'];
console.log(arr.length);

arr.color = 'blue';
arr.name = 'number_array';
console.log(arr.length);

arr[3] = 'red';
console.log(arr.length);

console.dir(arr); // console.dir은 객체를 출력함

for (var i=0; i<arr.length; i++) { // 배열도 객체이므로 for in 문 사용 가능, but 불필요한 프로퍼티가 출력 될 수 있기에 반복문을 사용하는게 좋음
    console.log(i, arr[i]);
}
*/

// 배열에서의 delete 와 splice
/*
var arr = ['zero', 'one', 'two', 'three'];
delete arr[2]; // delete 는 원소를 undefined로 바꿔줌
console.log(arr);
console.log(arr.length);

var arr = ['zero', 'one', 'two', 'three'];

arr.splice(2,1); // splice 는 배열에서 원소를 완전히 삭제함, (2번째부터 1개를 삭제)를 의미
console.log(arr);
console.log(arr.length);
*/

// 배열 생성자 함수
/*
var foo = new Array(3); // 인자로 숫자 1개를 받을경우 길이가 n 인 배열 생성
console.log(foo);
console.log(foo.length);

var bar = new Array(1, 2, 3); // 인자로 숫자 여러개를 받을 경우 인자를 원소로 갖는 배열 생성
console.log(bar);
console.log(bar.length);
*/

// 기본 타입의 값들에 대해 메소드를 호출 => 메소드 처리 순간에 객체로 변환, 끝나면 기본값으로 복귀함
/*
var num = 0.5;
console.log(num.toExponential(1)); // 숫자를 지수 형태의 문자열로 변환

console.log("test".charAt(2)); // 인자로 받은 위치에 있는 문자를 반환
*/


