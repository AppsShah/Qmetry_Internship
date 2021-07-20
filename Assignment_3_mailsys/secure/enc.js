var crypto = require('crypto');

var mykey = crypto.createCipher('aes-128-cbc', 'mypassword');
var mystr = mykey.update('apps3838@gmail.com', 'utf8', 'hex')
mystr += mykey.final('hex');

var mykey2 = crypto.createCipher('aes-128-cbc', 'mypassword');
var mystr2 = mykey2.update('Akshat@221570', 'utf8', 'hex')
mystr2 += mykey2.final('hex');

module.exports={mystr,mystr2}