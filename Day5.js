//ACTIVITY1
    //Task1
function check(num){

    if(num%2==0) console.log(`${num} is even`)
        else console.log(`${num} is odd`)

}

    check(6)

    //Task2
    function square(num){
            console.log(`Square is ${num*num}`)
    }

    square(5)    

//Activity2

    //Task1

    let a=function(num1,num2){
        if (num1>num2)
            return num1
        else return num2
    }

    console.log(a(6,7))

    //Task2
    
    let b=function(name1,name2){
        name1+=name2;
        return name1;
    }
    
    console.log(b("Sanchit","Ahuja"))

//Activity3
    //Task1
    const sum=(a,b)=>a+b;
    console.log(sum(5,6))

    //Task2
    const containsCharacter = (str, char) => str.includes(char);
    console.log(containsCharacter("hello","e"))


//Activity4

    //Task1
    function Prod(num1,num2=10){
        return num1*num2
    }
    ans=Prod(num1=6)
    console.log(ans)

    //Task2
    function Greeting(name,age=24){
        console.log(`Greetings ${name} of age ${age}`)
    }

    Greeting(name="Sanchit")


//Activity5

    //Task1

    const sayHello = () => console.log('Hello!');

    const repeatFunction = (fn, times) => {
        for (let i = 0; i < times; i++) {
          fn();
        }
      };

    repeatFunction(sayHello,5)  

    //Task2
    // Define two functions
        const double = x => x * 2;
        const increment = x => x + 1;

        const applyFunctions = (fn1, fn2, value) => fn2(fn1(value));

        const result = applyFunctions(double, increment, 5);

        console.log(result);
