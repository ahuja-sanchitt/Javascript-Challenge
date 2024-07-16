//Activity1

//PRINT 1 to 10
for(let i=1;i<=10;i=i+1){
    console.log(i)
}

//PRINT TABLE OF 5
for(let i=1;i<=10;i++){
    console.log(5*i)
}


//ACTIVITY2

//SUM OF FIRST 10 NUMBERS
var sum=0;
let num=0;
while(num<=10){
sum+=num;
num=num+1;
}
console.log(sum)

//PRINT NUMBERS FROM 10 TO 1
let num1=10;
while(num1>0){
    console.log(num1)
    num1--;
}

//ACTIVITY3

//Task1
let i=1;

do{
    console.log(i)
    i++;
} while(i<=5)

    //Task2
let j=6
let ans=1;
do{
    ans=ans*j;
    j--;
} while(j>=1)

    console.log(ans)

//ACTIVITY4

for(let i=0;i<5;i++){
    let str=""
    for(let j=0;j<=i;j++){
        str+="*"
    }
    console.log(str)
}

//ACTIVITY5

for(let i=1;i<=10;i++){
    if(i==5){
        continue;
    }
    console.log(i)
}

for(let i=1;i<=10;i++){
    if(i==7){
        break;
    }
    console.log(i)
}

