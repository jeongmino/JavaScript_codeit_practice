// for 구문을 사용한 참조형 복사 
let course1 = {
    title : '파이썬 프로그래밍 기초',
    language : 'Python'
}

let course2 = {}

for (let key in course1){
    course2[key] = course1[key]
}
course2.title = '자료구조'

// 내장 메소드로 참조형을 복사

let course3 = Object.assign({}, course1)
course3.title = '알고리즘의 정석'

console.log(course1)
console.log(course2)
console.log(course3)
