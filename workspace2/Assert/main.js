/**
 * main.js
 */

var assert = require("assert");

var v1 = 10;
var v2 = 10;
var v3 = 20;
var v4 = '10';

assert(v1 < v3);
console.log("v1은 v3보다 작습니다.");
/*
assert(v1==v3);// 조건식이ㅣ false라서 오류가남
console.log("v1은 v3과 같습니다.");
*/
assert(v1 ==v2);
console.log("v1과 v2는 같습니다.");
/*
assert(v1 - v2);//수식의 연산값이 0이라서 오류가 발생한다.
console.log("v1 - v2는 0이 아닙니다.");
*/

assert(v1 - v3);//0이 아닌값이라 오류발생 x
console.log("v1 -v3 은 0이 아닙니다.");

assert.equal(v1,v2);
console.log("v1과 v2는 같습니다.");
/*
assert.equal(v1,v3);
console.log("v1과 v3는 같습니다.");
*/

assert.equal(v1,v4);//equal 은 타입을 무시하고 비교한다. 그래서 오류 x
console.log("v1과 v4는 같습니다.");
/*
assert.strictEqual(v1,v4);//타입이 다르면 다르다고 판단. 그래서 오류
console.log("v1과 v4는 같습니다.");
*/

/*
assert.notEqual(v1,v2);//오류발생
console.log("v1과 v2는 다릅니다.");
*/

assert.notEqual(v1,v3);
console.log("v1과 v3는 다릅니다.");

/*
assert.notEqual(v1,v4);
console.log("v1과 v4는 다릅니다.");
*/

assert.notStrictEqual(v1,v4);
console.log("v1과 v4는 다릅니다.");

var obj1 = {
		a1 : 10,
		a2 : 20
};
var obj2 = {
		a1 : 10,
		a2 : 20
};
var obj3 = {
		a1 : 10,
		a2 : 30
};
var obj4 = {
		a1 : 10,
		a2 : '20'
};
assert.deepEqual(obj1,obj2);
console.log("obj1과 obj2는 같습니다.");

/*
assert.deepEqual(obj1,obj3);
console.log("obj1과 obj3은 같습니다.");
*/

assert.deepEqual(obj1,obj4);
console.log("obj1과 obj4는 같습니다.");

/*
assert.deepStrictEqual(obj1,obj4); //타입도 검사해서 오류발생
console.log("obj1과 obj4는 같습니다.");
*/

/*
assert.notDeepEqual(obj1,obj2);
console.log("obj1과 obj2는 다릅니다.");
*/

assert.notDeepEqual(obj1,obj3);
console.log("obj1과 obj3은 다릅니다.");

assert.notDeepEqual(obj1,obj4);
console.log("obj1과  obj4는 다릅니다.");

/*
assert.notDeepStrictEqual(obj1,obj4);
console.log("obj1과 obj4는 다릅니다.");
*/
