console.log(null && undefined); // 왼쪽값이 거짓이면 왼쪽 출력
console.log('0' && NaN); // 왼쪽값이 참이면 오른쪽 값을 출력
console.log(0 || true) // 왼쪽값이 거짓이면 오른쪽 값 출력
console.log({} || 123) // 왼쪽값이 참이면 왼쪽 값 출력

function print(value){
    const message = value || 'Codeit'; // value에 들아오는 인자값이 없으면 자동으로 codeit 출력
    
    console.log(message)
}
print();
print('JavaScript')
