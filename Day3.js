//Activity 1

let a=10
let b=0

if(a>0) console.log("POSITIVE")
    else if(a<0) console.log("NEGATIVE")
else console.log("ZERO")

//Activity2
let a=10
let b=20
let c=5

if(a>b) 
    if(a>c) console.log("A IS GREATEST")
    else console.log("C IS THE GREATEST")
else if (b>a)
    if(b>c) console.log("B IS THE GREATEST")
        else console.log("C IS THE GREATEST")    

//Activity3

function decideDay(daynum){
    let dayname;

    switch(daynum){
        case 1:
            dayname="Monday"
            break;
        case 2:
            dayname="Tuesday"
            break;          
        case 3:
            dayname="Wednesday"
            break;
        case 4:
            dayname="Thursday"  
            break;
        case 5:
            dayname="Friday"
            break;
        case 6:
            dayname="Saturday"
            break;
        case 7:
            dayname="Sunday"
            break;                
    }
    console.log(dayname)
}

decideDay(5)


function decideGrade(gradename){
    let grade;

    switch(gradename){
        case 'A':
            grade=10
            break;
        case 'B':
            grade=8
            break;          
        case 'C':
            grade=7
            break;
        case 'D':
            grade=5  
            break;
        case 'E':
            grade=4
            break;                
    }
    console.log(grade)
}

decideGrade('A')


//ACTIVITY 4
let a=5
console.log(a%2==0?"EVEN":"ODD")


//ACTIVITY5

let year=2000
if(year%400==0) console.log(`${year} is a leap year`)
    else if (year%4==0 && year%100==0) console.log(`${year} IS A LEAP YEAR`)
    else console.log(`${year} IS NOT A LEAP YEAR`)    