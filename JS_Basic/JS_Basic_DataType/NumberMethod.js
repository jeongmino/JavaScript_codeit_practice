let myNum = 0.3591;

//toFixed(0 ~ 100)
console.log(myNum.toFixed(3))
console.log(myNum.toFixed(7))
console.log(typeof myNum.toFixed(3))
console.log(myNum.toFixed(1))

console.log(Number(myNum.toFixed(1)) === +myNum.toFixed(1))

//toString(2 ~ 36) 괄호 안의 수+진법 으로 변환 및 스트링 리턴

let myTestNum = 255;
console.log(myTestNum.toString(2))
console.log(myTestNum.toString(8))
console.log(myTestNum.toString(16))
console.log(typeof myTestNum.toString(2))
console.log(255..toString(2) === (255).toString(2))