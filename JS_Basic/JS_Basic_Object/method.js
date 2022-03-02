let greetings;

greetings = {
    sayHello : function (name){
        console.log(`Hello ${name}!`)
    },
    sayHi : function(){
        console.log("Hi!")
    },
    sayBye : function(name){
        console.log(`Bye ${name}`)
    }
};

console.log(greetings)
greetings.sayHello('junoh')
greetings.sayHi()
greetings.sayBye('junon')