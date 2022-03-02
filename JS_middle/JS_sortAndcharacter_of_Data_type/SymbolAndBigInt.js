// Symbol 자료형은 코드 내에서 유일한 값을 가진 변수 이름을 만들 때 사용
// 그 어떤 자료형과 비교해도 true 값이 나올 수 없음
const user = Symbol()
// 설명도 삽입가능
const user1 = Symbol('this is a user1')

console.log(user === 'string')
console.log(user === 1)
console.log(user === true)
console.log(user === [])
console.log(user === {})

const symbolA = Symbol('this is a user1')

console.log(symbolA === user)

// 자바스크립트는 9000조 이상의 수에서는 불안정성을 보임
// 그래서 BigInt라는 자료형을 쓰면 그 이상의 값을 잘 계산할 수 있음

console.log(9007199254740993n); // 숫자 뒤에 n을 써도 됨
console.log(BigInt(9007199254740993));

// 1.5n 같은 소숫점에는 올 수 없음
// 10n / 6n === 1n , 소수점은 버려짐
// 3n * 2 같이 다른 데이터 타입끼리 연산은 안됨