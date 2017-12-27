var schedule = require('node-schedule');

function scheduleCancel(){

    var counter = 1;
    var j = schedule.scheduleJob('* * * * * *', function(){
        
        console.log('定时器触发次数：' + counter);
        counter++;
        
    });

    setTimeout(function() {
        console.log('定时器取消')
        j.cancel();   
    }, 5000);
    
}

scheduleCancel();