const fs=require("fs")
function func1() {
    // return new Promise(function (resolve, reject) {
//         const sp="C:\\Users\\akshat shah\\Desktop\\web development\\internship\\"
//         fs.mkdir(`${sp}/temp`,function(err){
//             if(err)
//             {
//                 console.log("error in making folder",err);
//                 reject("Sorry Apps")
//             }
//             else
//             {
//                 console.log("success in making temp folder")
//                 resolve("hi Apps")
//             }
//         })
//     })
// }
// function enrollStudent() {
//     // return new Promise(function (resolve, reject) {
//         const sp="C:\\Users\\akshat shah\\Desktop\\web development\\internship\\"
//         fs.rmdirSync(`${sp}/temp`,(err)=>{
//             if(err)
//             {
//                 return err
//             }
//             else
//             {
//                 return "temp folder deleted"
//             }
//         })
//     // })
// }

// func1().then(function(){
        
// }).catch(function(error){
//     console.log("Harry: Very bad bro. Reason: " + error)
// })

// console.log("This is tutorial 37");
// 
// Pretend that this response is coming from the server
const students = [
    { name: "harry", subject: "JavaScript" },
    { name: "Rohan", subject: "Machine Learning" }
]

function getStudents() {
    setTimeout(function () {
        let str = "";
        students.forEach(function (student) {
            str += `<li> ${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log("Students have been fetched");
    }, 5000);
}

let newStudent = { name: "Sunny", subject: "Python" }
enrollStudent(newStudent).then(getStudents).catch(function () {
    console.log("Some error occured");
});
getStudents();

// function inside then is ran as - resolve()
// function inside catch is ran as - reject()
