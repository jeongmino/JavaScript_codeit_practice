// Arrow Function 좀 더 간결하게 함수를 작성하기 위한 문법
// arguments 객체는 사용 불가
{
    const getTwice = function(number){
        return number * 2
    }
    console.log(getTwice(6))
}

{
    function getTwice(number){
        return number * 2
    }
    console.log(getTwice(6))
}

{
    const getTwice = (number) =>{
        return number * 2
    }
    console.log(getTwice(6))
}


const getTwice = (number) => (number * 2)

console.log(getTwice(6))

// 파라미터가 두 개 이상이어도

const sum = (a, b) => {
    return a + b
}
console.log(sum(3, 5))