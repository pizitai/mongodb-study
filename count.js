var User = require("./user.js");

function getCountByConditions(){
    var wherestr = {};
    
    User.count(wherestr, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
}
getCountByConditions();