/*
 * 功能:   数据采集
 * 创建人: Wilson
 * 时间:   2015-07-29
 */
var request = require('request'),
    cheerio = require('cheerio'),
    fs = require('fs'),
    URL_36KR = 'http://36kr.com/'; //36氪 

/* 开启数据采集器 */
function dataCollectorStartup() {
    dataRequest(URL_36KR);
}

/* 数据请求 */
function dataRequest(dataUrl) {
    request({
        url: dataUrl,
        method: 'GET',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36'
        }
    }, function (err, res, body) {
        if (err) {
            console.log(dataUrl)
            console.error('[ERROR]Collection' + err);
            return;
        }

        switch (dataUrl) {
            case URL_36KR:

                dataParse36Kr(body);

                break;
        }


    });
}

/* 36kr 数据解析 */
function dataParse36Kr(body) {
    console.log('============================================================================================');
    console.log('======================================36kr==================================================');
    console.log('============================================================================================');

    var $ = cheerio.load(body);

    var articles1 = $('html')
    var reg = /\"sidebarNewsflash|newsflash\":(.*?)\,\"projectNews|post\"/g;
    // console.log(articles.first().html())
    var res1 = articles1.first().html().toString().match(reg)
    console.log(typeof JSON.stringify(res1))
    let str = JSON.stringify(res1).replace(/[\r\n]/g, "")

    //正则表达式无全局标志g
    arr = str.match(/\[(.*)\]/);

    // console.log('返回结果数组的第一个元素：' + arr[0]);
    console.log(arr[0])

    // fs.writeFileSync("aa.html", articles);
    // console.log(articles[0].html())

//     let articles = JSON.parse(arr[0])
//     console.log(articles instanceof Array)
//    for (let item1 of articles) {
//        let item = JSON.parse(item1)
//         console.info('--------------------------------');
//         console.dir(item)
//         // console.info('标题：' + item.title);
//         // console.info('描述：' + item.description);
//         // console.info('时间：' + item.published_at);
//         // console.info('封面：' + coverUrl);
//         console.info('--------------------------------');
//     };
}

dataCollectorStartup();