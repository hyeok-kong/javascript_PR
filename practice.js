// #1 Object() 명령으로 객체 생성
/*

var foo = new Object();
foo.name = 'foo';
foo.age = 30;
foo.gender = 'male';

console.log(typeof foo);
console.log(foo);
*/

// #2 객체 리터럴로 객체 생성방법
/*
var foo = {
    name : 'foo',
    age : 30,
    gender : 'male'
};

console.log(typeof foo);
console.log(foo);
*/

// #3 for in 문을 이용해 모든 프로퍼티에 대한 루프 수행
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

// #4 delete를 이용해 객체의 프로퍼티를 삭제 가능 but 객체 자체는 삭제 불가
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

// #5 객체의 모든 연산은 참조값으로 처리됨
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

// #6 Call by value, Call by reference
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

// #7 배열 리터럴
/*
var colorArr = ['orange', 'yellow', 'blue' , 'green', 'red'];

console.log(colorArr[0]);
*/

// #8 배열의 요소 생성, 인덱스를 통한 접근, 배열의 길이
/*
var emptyArr = [];

console.log(emptyArr[0]);


emptyArr[0] = 100;
emptyArr[3] = 'eight';
emptyArr[7] = true;

console.log(emptyArr);
console.log(emptyArr.length);
*/

// #9 배열 length 프로퍼티의 명시적 변경
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

// #10 배열의 push
/*
var arr = ['zero', 'one', 'two'];

arr.push('three');
console.log(arr);

arr.length = 5;
arr.push('four');
console.log(arr);
*/

// #11 배열과 객체의 차이 => 프로토타입의 차이
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

// #12  배열의 프로퍼티 동적 생성
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

// #13 배열에서의 delete 와 splice
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

// #14 배열 생성자 함수
/*
var foo = new Array(3); // 인자로 숫자 1개를 받을경우 길이가 n 인 배열 생성
console.log(foo);
console.log(foo.length);

var bar = new Array(1, 2, 3); // 인자로 숫자 여러개를 받을 경우 인자를 원소로 갖는 배열 생성
console.log(bar);
console.log(bar.length);
*/

// #15 기본 타입의 값들에 대해 메소드를 호출 => 메소드 처리 순간에 객체로 변환, 끝나면 기본값으로 복귀함
/*
var num = 0.5;
console.log(num.toExponential(1)); // 숫자를 지수 형태의 문자열로 변환

console.log("test".charAt(2)); // 인자로 받은 위치에 있는 문자를 반환
*/

// #16 3가지 함수 생성법 : 함수 선언문, 함수 표현식, 생성자를 이용
// 함수 선언문은 함수 호이스팅 (Function Hoisting) 이 일어나 유효범위가 코드의 처음부터 끝으로 정해진다. 그로 인해 함수를 먼저 호출하고 생성해도 호출이 가능하게 되며, 이러한
// 함수 호이스팅의 특성때문에 함수 표현식을 이용한 함수 생성을 권장한다.
// 함수 표현식으로 함수를 생성할 때는 ;(세미콜론)을 붙인다.

// #17 익명함수와 기명함수의 사용
/*
function add1 (x, y) {  // 함수 선언문을 통한 함수 생성
    return x+y;
}

var add2 = function (x, y) { // 함수 표현식을 통한 함수 생성, 함수명이 없으므로 익명함수이고 add2라는 변수가 함수를 참조하고있음
    return x+y;
};
var plus = add2; // add2라는 함수변수를 다른 변수에 다시 할당할 수 있음

var add3 = function sum(x, y) { // 기명함수를 사용한 함수 표현식
    return x+y;
};
// console.log(sum3,4); => 함수 표현식에서 기명함수를 사용하더라도 외부에서는 함수에 접근할 수 없기 때문에 오류가 발생함

var factorialVar = function factorial(n) { // 기명함수를 사용하면 재귀적인 호출 처리가 가능
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n-1);
};

var add = new Function('x', 'y', 'return x + y'); // Function() 생성자 함수를 이용한 함수 생성, 자주 사용되지 않음
*/

// #18 함수도 객체이기 때문에 프로퍼티를 동적으로 추가할 수 있음.
/*
function add (x, y) {
    return x+y;
}

// add() 함수 객체에 프로퍼티 추가
add.result = add(3,2);
add.status = 'OK';
*/

// #19 변수나 프로퍼티에 함수 값을 할당
/*
var foo = 100;
var bar = function() { return 100; };
console.log(bar());


var obj = {};
obj.baz = function () {return 200;}
console.log(obj.baz());
*/

// #20 함수를 다른 함수의 인자로 전달함
/*
var foo = function(func) {
    func();
};

foo(function() {
    console.log('Function can be used as the argument.');
});
*/

// #21 함수를 다른 함수의 리턴값으로 활용
/*
var foo = function() {
    return function() {
        console.log('this function is the return value');
    };
};

var boo = foo();
boo();
*/

// 함수에서의 length 프로퍼티는 함수가 정상적으로 실행 될 때 기대되는 인자의 개수를 나타냄
/*
function func0() {

}

function func1(x) {
    return x;
}

function func2(x, y) {
 return x + y;
}

function func3(x, y, z) {
    return x + y + z;
}

console.log('func0.length - ' + func0.length); // func0.length - 0
console.log('func1.length - ' + func1.length); // func1.length - 1
console.log('func2.length - ' + func2.length); // func2.length - 2
console.log('func3.length - ' + func3.length); // func3.length - 3
*/


// #22 즉시실행함수 사용, 즉시실행함수는 재호출이 불가능함
/*
(function (name) { // 괄호로 함수 리터럴을 감쌈
    console.log('This is the immediate function -> ' + name);
})('foo'); // 함수가 바로 호출될 수 있게 () 괄호 쌍을 추가
*/

// #23 내부 함수 이용
/*
function parent() {
    var a = 100;
    var b = 200;

    function child() {
        var b = 300;

        console.log(a);
        console.log(b);
    }
    child();
}
parent();
child();
*/

// #24 함수 스코프 외부에서 내부 함수 호출
/*
function parent() {
    var a = 100;

    var child = function () {
        console.log(a);
    }

    return child;
}

var inner = parent(); // => 실행이 끝난 부모 함수 스코프의 변수를 참조하는 함수를 '클로저' 라고 한다
inner(); 
*/

// #25 자기 자신을 재정의하는 함수
/*
var self = function() {
    console.log('a');
    return function() {
        console.log('b');
    }
}
self = self();  // a
self();         // b
*/

// #26 자바스크립트는 인자의 개수가 정확하지 않아도 함수 실행이 가능하다.
/*
function func(a1, a2) {
    console.log(a1, a2);
}

func();         // undefined undefined
func(1);        // 1 undefined
func(1, 2);     // 1 2
func(1, 2, 3);  // 1 2
*/

// #27 arguments를 이용한 인자의 개수가 정해지지 않은 함수 구현
/*
function sum() {
    var result = 0;

    for (var i=0;i<arguments.length;i++) { // 인자의 개수가 정해지지 않은 함수를 개발하는데 유용 => 다른 언어 공부할 땐 메소드 오버로딩으로 구현한 것으로 기억함
        result += arguments[i];
    }

    return result;
}

console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));
*/


// #28 메소드 호출 사용 시 this 바인딩 => 해당 메소드를 호출한 객체로 바인딩
/*
var myObject = {
    name : 'foo',
    sayName : function() {
        console.log(this.name);
    }
};

var otherObject = {
    name : 'bar'
};

otherObject.sayName = myObject.sayName; // 프로퍼티를 동적 할당함

myObject.sayName();
otherObject.sayName();
*/

// #29 함수 호출 사용 시 this 바인딩
// 함수 호출 시 this 는 전역 객체에 바인딩 된다.
// 브라우저 환경에서는 window 객체, Node.js 같은 자바스크립트 런타임 환경에서는 global 객체가 된다.

 // --------------------2020_09_13-------------------------

// #30 내부 함수의 this 바인딩
/*
var value = 100;

var myObject = {
    value : 1,
    func1 : function() {
        // var that = this; => 내부함수의 this가 전역변수를 가리키는 걸 해결하기 위해 함수 내부에 객체의 this를 가리키는 변수를 하나 만듬.
        // 이로인해 아래 두 내부함수는 that을 사용 시 myObject객체의 value 값에 접근 할 수 있음

        this.value += 1;
        console.log('func1() called. this.value : ' + this.value);

        func2 = function() { // 내부함수 호출 시 this 전역객체인 value = 100 에 바인딩 된다.
            this.value += 1;
            console.log('func2() called. this.value : ' + this.value);

            func3 = function() { // 이 또한 같다.
                this.value += 1;
                console.log('func3() called. this.value : ' + this.value);
            }
            func3();
        }
        func2();
    }
};

myObject.func1();
*/


// #31 생성자 함수의 동작 방식
/*
var Person = function (name) {  // Person 생성자 함수
    this.name = name;
    // 생성자 함수의 경우 리턴문이 없으면 this로 바인딩 된 새로 생성한 객체가 리턴됨, 일반함수의 경우 리턴값이 명시되어 있지 않을 경우 undefined 값이 리턴됨
}

var foo = new Person('foo');
console.log(foo.name);
*/

// #32 객체 리터럴 vs 생성자 함수 ( 객체 생성의 두가지 방법 )
/*
var foo = { //객체 리터럴
    name : 'foo',
    age : 35,
    gender : 'man'
};

function Person(name, age, gender, position) { //생성자 함수
    this.name = name;
    this.age = age;
    this.gender = gender;
}

var bar = new Person('bar', 33, 'woman');.
// 객체리터럴과는 다르게 생성자 함수는 같은 형식의 객체를 여러번 찍어낼 수 있다.
// 객체리터럴의 프로토타입은 Object.prototype 이며, 생성자 함수의 프로토타입은 생성자함수.prototype 이다.
// 자바스크립트는 new 로 일반함수와 생성자 함수를 구분함, new를 붙이지 않고 생성자 함수를 호출하게 되면, this가 바인딩 되는 객체가 달라 오류가 발생.
// if (!(this instanceof arguments.callee)) => 생성자함수에 new가 붙어있는지 확인하는 패턴
*/

// #33 apply() 메소드를 이용한 명시적인 this 바인딩
/*
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}

var foo = {};

Person.apply(foo, ['foo', 30, 'man']); // foo 에 this를 바인딩해줌
// Person.call(foo, 'foo', 30, 'man'); => call() 은 apply() 와 기능은 같지만 배열이 아닌 각각의 값으로 인자를 전달받음
console.dir(foo);
*/

// #34 apply() 메소드를 활용한 arguments 객체의 배열 표준 미소드 slice() 활용
/*
function myFunction() {
    console.dir(arguments);
    // arguments.shift(); =>arguments는 유사배열객체 이므로 에러가 뜸
    var args = Array.prototype.slice.apply(arguments);  // Array.prototype.slice() 메소드를 호출 할 때 this를 arguments 객체로 바인딩해라. 라는 의미
    console.dir(args);
}

myFunction(1, 2, 3);
*/

// #35 자바스크립트 함수는 항상 리턴값을 반환함.
/*
1. 일반 함수나 메소드는 리턴값을 지정하지 않을 경우 undefined 값을 리턴
2. 생성자 함수에서 리턴값을 지정하지 않을 경우 생성된 객체가 리턴 => 명시적으로 다른 객체를 리턴할 시에는 명시해준 객체를 리턴함
*/

 // --------------------2020_09_14-------------------------

// #36 prototype 프로퍼티와 [Prototype] 링크 구분
/*
function Person(name) {
    this.name = name;
}

var foo = new Person('foo');
// 생성자 함수의 prototype 프로퍼티는 함수의 입장에서 자신과 링크된 프로토타입 객체를 가리킴
// [Prototype] 링크는 객체의 입장에서 자신의 부모 객체인 프로토타입 객체를 내부의 숨겨진 링크로 가리킴
*/

// #37 객체 리터럴 방식에서의 프로토타입 체이닝
// 프로토타입 체이닝이란 현재 객체에 찾고자 하는 프로퍼티나 메소드가 없다면 [Property] 링크를 따라 부모 프로토타입 객체의 프로퍼티를 차례대로 검색하는 것.
/*
var myObject = {
    name : 'foo',
    sayName : function() {
        console.log('My Name is ' +  this.name);
    }
};

myObject.sayName();
console.log(myObject.hasOwnProperty('name'));       // hasOwnProperty() => 이 메소드를 호출한 객체에 인자로 넘긴 문자열 이름의 프로퍼티나 메소드가 있는지 체크 (True/False)
console.log(myObject.hasOwnProperty('nickname'));   // myObject에 hasOwnProperty() 메소드가 없기 때문에 연결된 Object.prototype 객체에 연결하여 찾아봄, 존재하기에 에러 x 
myObject.sayNickName(); 
*/

// #38 생성자 함수 방식에서의 프로토타입 체이닝
/*
function Person(name, age, hobby) {
    this.name = name;
    this.age = age;
    this.hobby = hobby;
}
var foo = new Person('foo', 30, 'tennis');

console.log(foo.hasOwnProperty('name')); // True
// 부모 객체인 Person.prototype에 hasOwnProperty() 가 존재하지 않지만, Person.prototype 역시 객체이기 때문에 다시 Object.prototype으로 연결됨.
*/

// #39 프로토타입 체이닝의 종점, Object.prototype
// 모든 자바스크립트 객체는 Object.prototype 을 가지기 때문에 어떤 객체던 접근, 공유가 가능하다.

// #40 기본 타입에 메소드 추가
/*
String.prototype.testMethod = function() {
    console.log('This is the String.prototype.testMethod()');
};

var str = "this is test";
str.testMethod(); // String .prototype 에 프로토타입 체이닝을 통해 접근, 생성한 메소드를 실행함
*/

// #41 프로토타입 객체의 동적 메소드 생성
/*
function Person(name) {
    this.name = name;
}

var foo = new Person('foo');

Person.prototype.sayHello = function() { //Person.prototype 프로퍼티에 메소드 추가
    console.log('Hello');
}

foo.sayHello();
*/

// #42 프로토타입 메소드에서의 this 바인딩
// 일반 메소드와 같다. 호출한 객체에 바인딩된다.
/*
function Person(name) {
    this.name = name;
}

Person.prototype.getName = function() {
    return this.name;
};

var foo = new Person('foo');

console.log(foo.getName());

Person.prototype.name = 'person';

console.log(Person.prototype.getName());
*/

// #43 프로토타입 객체 변경
/*
function Person(name) {
    this.name = name;
}

console.log(Person.prototype.constructor);

var foo = new Person('foo');
console.log(foo.country);

Person.prototype = { // 디폴트 프로토타입 객체 변경 => 객체 리터럴 방식으로 객체 생성
    country : 'korea',
};

console.log(Person.prototype.constructor);

var bar = new Person('bar'); // 변경한 프로토타입 객체를 가리킴
console.log(foo.country);
console.log(bar.country);
console.log(foo.constructor);
console.log(bar.constructor);
*/

// #44 프로토타입 체이닝과 동적 프로퍼티 생성
/*
function Person(name) {
    this.name = name;
}

Person.prototype.country = 'Korea';

var foo = new Person('foo');
console.log(foo.country); // Korea

foo.country = 'USA';                // foo 객체의 프로퍼티에 값이 없으므로 추가 => 동적 프로퍼티 생성
console.log(foo.country); // USA
*/

// --------------------2020_09_15-------------------------

// #45 실행 컨텍스트
/*
console.log("This is global context"); // 전역 컨텍스트 (가장 먼저 실행)

function ExContext1() {
    console.log("This is ExContext1");
};  // 질문) 왜 ;가 붙는지 잘 모르겠음.

function ExContext2() {
    ExContext1();
    console.log("This is ExContext2");
};

ExContext2();
*/

// #46 활성객체,변수객체와 스코프 체인
// 활성객체 = 변수객체, 둘이 같은 객체를 가리킴
/*
function execute(param1, param2) {
    var a = 1, b = 2;
    function func() {
        return a+b;
    }
    return param1 + param2 + func();
}

execute(3, 4);
*/
// 함수 호출이 없고, 실행 가능한 코드들만 나열되어있는 전역 코드
// 전역 실행 컨텍스트 단 하나만이 실행되고 있어 참조할 상위 컨텍스트가 없음 => 자기 자신을 스코프 체인으로 가리키는 최상위 변수 객체
/*
var var1 = 1;
var var2 = 2;
console.log(var1);
console.log(var2);
*/
/*
var var1 = 1; // 전역 실행 컨텍스트 생성
var var2 = 2;
function func() { // func() 함수객체 생성 => 현재 실행되는 컨텍스트의 [scope]를 그대로 가짐 
    var var1 = 10;
    var var2 = 20;
    console.log(var1);
    console.log(var2);
}
func(); // 함수를 실행 => func 실행 컨텍스트 생성, 스코프 체인은 실행된 함수의 [scope]프로퍼티를 복사 후 현재 생성된 변수 객체를 복사한 스코프 체인의 맨 앞에 추가
        // => [func 변수 객체 - 전역 객체] ==> 스코프 체인 = 현재 실행 컨텍스트의 변수 객체 + 상위 컨텍스트의 스코프 체인
console.log(var1);
console.log(var2);
*/

//ex1
/*
var value = "value1";

function printFunc() {
    var value = "value2";

    function printValue() {
        return value;
    }

    console.log(printValue());
}
printFunc();
*/
//ex2
/*
var value = "value1";

function printValue() {
    return value;
}
function printFunc(func) {
    var value = "value2";
    console.log(func());
}
printFunc(printValue;
*/

// --------------------2020_09_15-------------------------

// #47 클로저 : 이미 종료된 외부 함수의 변수를 참조하는 함수
// 스코프 체인을 생각해보면 outerFunc() 함수의 실행 컨텍스트가 종료된 후 innerFunc() 가 실행된다. 하지만 innerFunc() 는 이미 종료된 자신의 외부함수의 변수를 참조하는데, 
// 이는 실행 컨텍스트는 종료되었지만 변수 객체는 남아 스코프 체인으로 연결되어 있기에 가능하다. 이렇듯 이미 종료된 외부 함수의 변수를 참조하는 함수를 클로저라고 한다.
/*
function outerFunc() {
    var x = 10; // 자유 변수 : 클로저에 참조되는 외부함수의 변수 
    var innerFunc = function() { console.log(x); }; // innerFunc() 가 클로저가 된다
    return innerFunc;
}

var inner = outerFunc();
inner();
*/
// ex)클로저의 전형적인 패턴
/*
function outerFunc() {
    var x = 1; // 자유 변수
    return function() {
        // x와 arguments를 활용한 로직
    }
}

var new_func = outerFunc();
// outerFunc() 실행 컨텍스트 끝남.
new_func();
*/

// --------------------2020_09_15-------------------------

// #48 클로저의 활용
// 클로저는 이해가 잘 안가 나중에 다시 공부하도록 하겠음
// ex1) 특정 함수에 사용자가 정의한 객체의 메소드 연결
/*
function HelloFunc() {
    this.greeting = "hello";
}

HelloFunc.prototype.call = function(func) {
    func ? func(this.greeting) : this.func(this.greeting);
}

var userFunc = function(greeting) {
    console.log(greeting);
}

var objHello = new HelloFunc();
objHello.func = userFunc;
objHello.call();


// ex2)

function saySomething(obj, methodName, name) {
    return (function(greeting) {
        return obj[methodName](greeting, name);
    });
}

function newObj(obj, name) {
    obj.func = saySomething(this, "who", name);
    return obj;
}

newObj.prototype.who = function(greeting, name) {
    console.log(greeting + " " + (name || "everyone"));
}

var obj1 = new newObj(objHello, "zzoon");
*/

// #49 클래스, 생성자, 메소드의 구현
/*
function Person1(arg) {
    this.name = arg;

    this.getName = function() {
        return this.name;
    }

    this.setName = function(value) {
        this.name = value;
    }
}

var me = new Person1("zzoon");
console.log(me.getName());

// 위 코드에서 객체를 여러개 생성할 경우, getName,setName 메소드를 각 객체마다 생성하여 메모리 낭비가 됨
// => 프로토타입 체이닝을 이용하여 자원을 절약할 수 있음
// ex1)
function Person(arg) {
    this.name = arg;
}

Person.prototype.getName = function() {
    return this.name;
}

Person.prototype.setName = function(value) {
    this.name = value;
}

var man = new Person("hb");
console.log(man.getName());

var men = new Person("bh");
console.log(men.getName());
*/

// ex2)
/*
Function.prototype.method = function(name, func) { // 모든 함수의 프로토타입인 Function.prototype에 method 추가
    this.prototype[name] = func;
}

function Person(arg) {
    this.name = arg;
}

Person.method("setName", function(value) {
    this.name = value;
});

Person.method("getName", function() {
    return this.name;
});

var me = new Person("me");
var you = new Person("you");

console.log(me.getName());
console.log(you.getName());
*/

// ex3) 더글라스 크락포드의 메소드 정의 방법
/*
Function.prototype.method = funciton(name, func) {
    if (this.prototype[name]) {
        this.prototype[name] = func;
    }
}
*/