
function a(){
    var b=100;
    console.log(b);
    
}
a()

function a(){
    var b=100;
    console.log(b);
    
}
console.log(b);

 a()


var b=200;
function a(){
    var b=100;
    console.log(b);
    
}
console.log(b);

 a()


function c(){
    console.log(100+d);
    
}
var d=100;
c()
console.log(d);


function d(){
    function x(){
        function d(){

        }
        d()
    }
    x()
}

var d=100;
console.log(d);



function a(){
    function x(){
        function hello(){
        var d=500;
         console.log(100+z);
         

        }
        hello()
    }
    x()
}
var z=100;
d()
console.log(d);



function b(){
    console.log("b function");
    
}

var z=500;
function a(){
    b()
}
a()
console.log(z);
var z=100;
console.log(z);





var userInput=prompt("enter a digit")
var max=userInput[0]
for(i=0;i<userInput.length;i++){
    if(max<userInput[i]){
        max=userInput[i]
    }
}
console.log(max,"is hghest number");


var userInput=prompt("enter a digit")
var min=userInput[0]
for(i=0;i>userInput.length;i++){
    if(min>userInput[i]){
        min=userInput[i]
    }
}
console.log(min,"is lowest number");



var userInput=prompt("enter a digit")
var min=userInput[0]
var max=userInput[0]
for(i=0;i<userInput.length;i++){
    if(min>userInput[i]){
        min=userInput[i]
    }
    if(max<userInput[i]){
        max=userInput[i]
    }
}
console.log(min,"is lowest number");
console.log(max,"is hghest number");


var userInput=prompt("enter a digit")
var min=userInput[0]
var max=userInput[0]
for(i=0;i<userInput.length;i++){
    if(max<userInput[i]){
        max=userInput[i]
    }
    if(min>userInput[i]){
        min=userInput[i]
    }
}
console.log(max,"is highest number");
console.log(min,"is lowest number");