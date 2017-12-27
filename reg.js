var User = require("./user.js");

function getByRegex(){
    var whereStr = {'username':{$regex:/m/i}};
    
    User.find(whereStr, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
}

getByRegex();