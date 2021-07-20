const fs = require('fs');
const request=require('request');
const admzip=require('adm-zip');
function makingtempfolder(sp) {
    return new Promise((resolve,reject)=>{
        fs.exists(`${sp}/temp`,(err)=>{
            if(err)
            {
                console.log("temp folder already present")
                reject("due to error in making temp folder")
            }
            else
            {
              fs.mkdir(`${sp}/temp`,function(err){
                  if(err)
                  {
                      console.log("error in making folder",err);
                      reject("error!")
                  }
                  else
                  {
                      console.log("success in making temp folder")
                      resolve("temp folder done")
                  }
              })
            }
        })
    })
}
function copyfilefromurl(lang,framework,sp,output)
{   
   return new Promise((resolve,reject)=>{
    const fileUrl =`https://codeload.github.com/QMetryDev/${lang}-${framework}-Sample/zip/master`;
  
    request({url: fileUrl, encoding: null}, function(err, resp, body) {
      if(err) throw err;
    else{
        fs.writeFile(output, body, function(err) {
            if(err)
            {
                console.log("error in writing file "+err)
                reject("error in writing file so rejected")
            }
            else
            {
                console.log("file written!");
                resolve("writing part is done")
                unzip(sp,output)
            }
          });        
    }
    });
   })
}
function unzip(sp,output)
{
        const zip =admzip(output);
zip.extractAllTo(`${sp}/`, true);  
        
    console.log("unzip done")
}
function deletetempfolder(sp)
{
    fs.rmdirSync(`${sp}/temp`,{recursive:true},(err)=>{
        if(err)
        {
            console.log(err)
        }
        else
        {
            console.log("temp folder deleted")
        }
    })
}
function main(lang,framework,sp)
{
    const output = `${sp}/temp/${Date.now()}.zip`;
    makingtempfolder(sp).then(()=>{
        copyfilefromurl(lang,framework,sp,output).then(()=>{
            deletetempfolder(sp);
        }).catch((err)=>{
            console.log(err)
        })
    }).catch((err)=>{
        console.log(err)
    })
}
main("QAS-Java","QAF","C:\\Users\\akshat shah\\Desktop\\web development\\internship")