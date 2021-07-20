const nodemailer=require("nodemailer")
const express=require('express');
const multer=require('multer');
const fs=require('fs');
const app = express();
const crypto=require('crypto')
const key=require("./secure/secure")
// const router=express.Router();
//multer
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'upload')   
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+" "+file.originalname)
    }
})
const upload=multer({storage:storage})

//get 
app.get("/", function(req, res) {
res.sendFile(__dirname + "/index.html");
});

//number of email 
function numberofemails(input)
{
    const arr=[];
    let j=0;
for(let i=0;i<input.length;i++)
{
    if(/\;/g.test(input.charAt(i)))
    {
       const e=input.slice(j,i)
        arr.push(e.trim())
        j=i+1;
        
    }
}
    return arr
}

// validate this email
function ValidateEmail(input) {
    
  const emailarray=numberofemails(input)
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const validemaildata=[]
for(const element of emailarray)
{

  if(element.match(validRegex))
  {
      validemaildata.push(element)
  }
  else
  {
      console.log("invalid email") 
  }
}
   return validemaildata;
}

//post method
app.post('/',upload.single("emailfile"),(req,res,next)=>{
    try {
      
    const data=req.body.email 
    const emaillist=ValidateEmail(data)

    const subject=req.body.subject;
    const message=req.body.emailbody;
    if(emaillist.length==0)
    {     
      res.send(`<script>alert('Invalid Email'); </script>`);
    }
    if(req.file==null)
    {
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: key.mystr,
          pass: key.mystr2
        }
      });
        
      var mailOptions = {
        from: key.mystr,
        to: emaillist,
        subject: subject,
        text: message,

      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          // router.get('*',function(req,res){
            res.sendFile(__dirname+"/error.html")
        // })   
        } else {
          res.sendFile(__dirname+'/send.html')
        }
      }); 
    
    
    }
    else
    {
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: key.mystr,
          pass: key.mystr2
        }
      });
        
      var mailOptions = {
        from: key.mystr,
        to: emaillist,
        subject: subject,
        text: message,
        attachments: [
            {
              filename: req.file.filename,
              path:__dirname+"/upload/"+req.file.filename,
              // cid: `uniq-${req.file.originalname}` 
            }
          ]
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          // router.get('*',function(req,res){
            res.sendFile(__dirname+"/error.html")
        // })   
        } else {
          res.sendFile(__dirname+'/send.html')
        }
      }); 
    
    }
    } catch (error) {
      // res.send(`window.location.href = '${__dirname}/error.html';`);   
      res.sendFile(__dirname/'error.html') 
    }
})

app.listen(3000, function(){
console.log("server is running on port 3000");
})
