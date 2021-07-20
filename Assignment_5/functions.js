//functions in java script
// to create functions in js there are two types they are arrow functions and other is simple function with function keyword
// simple function
//eg 1:
function hello()
{
    console.log("hello world");
}
// arrow function
const hello1=()=>{
    console.log("hello world")
}
hello()
hello1()
// eg 2:
function hello2(hi)
{
    console.log("hello world "+hi);
}
// arrow function
const hello3=(hi)=>{
    console.log("hello world "+hi);
}
hello2("hey") 
hello3("hi")
//simple function
let user = {	
	show(){
		console.log(arguments);
	}
};
user.show(1, 2, 3);

let user2 = {	
	show2(){
		console.log(arguments);
	}
};


//difference between arrow and simple functions
/*simple function 
simple function uses function key word 
simple function has memory allocated with full body in main memory of js 
using simple function we have this keyword to use



arrow functions
simple function is latest right now use arrow 
simple function has memory allocated but not have full body but undefined
this keyword cannot use in arrow function
*/