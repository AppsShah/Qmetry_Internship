const process=require('child_process');
// const { promises } = require('stream');
const extractno=require('extract-numbers')
const os=require('os')

function java()
{
    return new Promise((resolve, reject) => {
        process.exec('java --version',(error,stdout,stderr)=>{
            if(stderr){
                return resolve("JAVA not installed");
            }
            else  if(error){
                return reject("Error in code");
            }
            else
            {
                // let list=extractno(stdout)
                // let str="abc12.3,45-6-7"
                ///(-\d+|\d+)(,\d+)*(\.\d+)*/g
                let regex=/-\d+|\d+(,\d+)*(\.\d+)*/g         
                let list=stdout.match(regex)
                // console.log(stdout)
               return resolve(list[0])
            }
        });
    });

}
 function node()
{
    return new Promise((resolve,reject)=>{
        process.exec('node --version',(error,stdout,stderr)=>{
            if(stderr){
               
                 return resolve("NODE JS not installed")
               
             }
             else  if(error){
                
                 return reject(error)
             }
             else
             {
                 
                let regex=/-\d+|\d+(,\d+)*(\.\d+)*/g         
                let list=stdout.match(regex)
                // console.log(stdout)
               return resolve(list[0])
                
             }
         })
    })
} 
function android()
{
    return new Promise((resolve,reject)=>{
        process.exec('android',(error,stdout,stderr)=>{
            if(stderr){
               
                 return resolve("ANDROID not installed")
             }
             else  if(error){
                
                 return reject(error)
             }
             else
             {
                
                let regex=/-\d+|\d+(,\d+)*(\.\d+)*/g         
                let list=stdout.match(regex)
                // console.log(stdout)
               return resolve(list[0])
             }
         })
    })
}
function maven()
{
    return new Promise((resolve,reject)=>{
        process.exec('mvn clean',(error,stdout,stderr)=>{
            if(stderr){
                 
                 return resolve("MAVEN not installed")
             }
             else  if(error){
                
                 return reject(error)
             }
             else
             {
    
                let regex=/-\d+|\d+(,\d+)*(\.\d+)*/g         
                let list=stdout.match(regex)
                // console.log(stdout)
               return resolve(list[0])
             }
         })
    })
} 
function python()
{
    return new Promise((resolve,reject)=>{
        process.exec('python --version',(error,stdout,stderr)=>{
            if(stderr){
                 
                 return resolve("PY not installed")
             }
             else  if(error){
                
                 return reject(error)
             }
             else
             {
               
                let regex=/-\d+|\d+(,\d+)*(\.\d+)*/g         
                let list=stdout.match(regex)
                // console.log(stdout)
               return resolve(list[0])
             }
         })
    })
} 
function sysinfo(){
    return new Promise((resolve,reject)=>{
        return resolve(os.version())
    })
}
 async function main()
{
    try {
        let result={JAVA:await java(),NODE:await node(),ANDROID:await android(),MAVEM:await maven(),PYTHON:await python()
        ,OS:await sysinfo()}
        console.log(result)
    }
    catch(e) {
        console.log(e);
    }
}
main()