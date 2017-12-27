var mongoose = require('mongoose')
mongoose.Promise = global.Promise;


mongoose.connect('mongodb://localhost:20300/test',{useMongoClient:true}).then(
    () => {
        console.log("数据库连接成功")
    },
    err => {
        console.log("数据库连接失败")
    }
);
module.exports = mongoose;