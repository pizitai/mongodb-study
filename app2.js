/*
* 功能:   请求HTTPS
* 创建人: Wilson
* 时间:   2015-07-29
*/
var request = require('request'),   
    URL_INTERFACELIFE = 'https://interfacelift.com/wallpaper/downloads/date/wide_16:10/';

/* 开启数据采集器 */
 function dataCollectorStartup() {         
     dataRequest(URL_INTERFACELIFE);
 }

/* 数据请求 */
function dataRequest(dataUrl)
{
    request({
        url: dataUrl,    
        method: 'GET',
        headers: {
            'User-Agent': 'wilson'
            }
    }, function(err, res, body) { 
        if (err) {            
            console.log(dataUrl)
            console.error('[ERROR]Collection' + err);        
            return;            
        }    

        console.info(body);
        
    });    
}

dataCollectorStartup();