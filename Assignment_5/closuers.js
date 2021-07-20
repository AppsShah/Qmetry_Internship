//closuers
//funntions with its lexical scope (bundle)=clouser 
//Q-1
function x(){
    var a=10;
    function y(){
        console.log(a)
    }
y()
} 
x() // 10

//Ques-2
function createIncrement() {
    let count = 0;
    function increment() { 
      count++;
    }
  
    let message = `Count is ${count}`;
    function log() {
      console.log(message);
    }
    
    return [increment, log];
  }
  
  const [increment, log] = createIncrement();
  increment(); 
  increment(); 
  increment(); 
  log(); // it will print 0
