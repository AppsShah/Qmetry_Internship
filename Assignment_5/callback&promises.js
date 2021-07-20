// call back
// call back function are nothing but taking other function as argument from one function
function sum(a,b,callback){
        console.log(a+b);
    callback()
}
function printsum(){
    console.log("sum printed ended");
}
sum(5,5,printsum)
//promise 
/*promise has three things  
    1:reolve
    2:reject
    3:pending
*/
function fun1(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            let error=false;
            if(error==true)
            {
                console.log("error in program")
                reject()
            }
            else
            {
                console.log("hello world")
                resolve()
            }
        },5000)
    })
}
fun1().then(()=>{
    console.log("hello Apps");
}).catch((err)=>{
    console.log("error in the code"+err)
})

/* difference between callback and promises is that
in callback when you have multiple async task at that time you have call back after callback that make call back tree
that will be very much incomprehensible sometimes
callback are run in call back queue only
promises are easy to use has three part reject if error resolve after successfully completed and pending means still pending
.then keyword is use to do next thing after completing this perticular function 
.catch to catch if any error
this promises are running in micro task queue and has higher priority */
