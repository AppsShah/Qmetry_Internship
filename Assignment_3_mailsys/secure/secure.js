var crypto = require('crypto');
const enc=require("./enc")
var mykey = crypto.createDecipher('aes-128-cbc', 'mypassword');
var mystr = mykey.update(enc.mystr, 'hex', 'utf8')
mystr += mykey.final('utf8');

var mykey2 = crypto.createDecipher('aes-128-cbc', 'mypassword');
var mystr2 = mykey2.update(enc.mystr2, 'hex', 'utf8')
mystr2 += mykey2.final('utf8');

// console.log(mystr,mystr2); //abc
module.exports={mystr,mystr2}