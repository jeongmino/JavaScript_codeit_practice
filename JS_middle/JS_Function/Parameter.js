// Arguments 가 여러 패턴으로 입력 될때 arguments 객체를 사용, 그러나 유사 배열이기 때문에 배열 메소드를 못 씀
{
function printArguments(a, b, c){
    console.log(arguments)
    console.log(arguments.length)
    console.log(arguments[0])
    for (const arg of arguments){
        console.log(arg)
    }
}

printArguments('apple', 'grape', 'banana', 'pear')
}

// Rest Parameter arguments가 못 쓰는 배열의 메소드를 사용할 수 있는 문법

{
    function printArguments(first, ...args){
        for (const arg of args){
            console.log(arg)
        }
        console.log('----')
        console.log(first)
        args.splice(0,2)
        console.log(args)
    }
    
    printArguments('apple', 'grape', 'banana', 'pear')
}
