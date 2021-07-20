//hoisting
//Hoisting is JavaScript’s default behavior of moving declarations to the top of their containing scope. 
//memory is allocated to the functions and variable in which variable has value undefined
//Ques-1
var a = 1;

function b() {  a = 10;  return;

  function a() {}}

b();

console.log(a);
//Question 2
var x = 20;
function test()
{
    if (x > 20) {
        console.log(x)
         x = 50;
        console.log(x)
    }
    else
    {
        console.log(x);
    }
    
}
  
test();

//Question-3
function test()
{
	foo();
	// bar();   here error will be there as function is assign to variable and hoisting is not possible

	// Function defiened
	// using function declaration
	function foo()
	{
		console.log('foo');
	}

	// Function defined
	// using function expression
	var bar = function() {
		console.log('bar');
	}
}

test();
