// 함수 표현식 >> 선언후 함수 사용 가능
const printCodeit = function(){
    console.log('Codeit')
}

printCodeit()

// 함수 선언식 >> 함수 선언, 변수 선언을 명확히 구분 가능/ 전역적으로 사용가능 
function printJS(){
    console.log("JavaScript")
}

// 즉시 실행 함수 // 1회용 함수
(function(){
    console.log("hi")
})();

(function(x, y){
    console.log(x + y)
})(3, 5);

// 함수를 리턴하는 함수: 고차 함수(Higher Order Function)
function getPrintAdd(){
    return function(x, y){
        console.log(x + y)
    }
}

getPrintAdd()(3,5)
const myAdd = getPrintAdd();
myAdd(3,4);