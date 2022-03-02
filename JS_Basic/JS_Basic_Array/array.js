let fruit = ['apple', 'pear', 'pineapple',
 ' grape', 'melon'];
console.log(fruit)
 fruit.splice(fruit.length -1, 1, 'lemon', 'watermelon')
console.log(fruit)
// 베열의 첫 요소가 삭제
fruit.shift();
console.log(fruit)
// 배열의 마지막 요소가 삭제
fruit.pop();
console.log(fruit)
// 배열의 첫 요소 삽입
fruit.unshift('strawberry')
console.log(fruit)
// 배열의 마지막 요소에 값 추가
fruit.push('starfruits')
console.log(fruit)
// indefOf 는 요소의 유무를 1 -1로 리턴해줌
console.log(fruit.indexOf('pear'))
console.log(typeof fruit.indexOf('pear'))