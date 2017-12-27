/**
 * 数据采集
 */
//引入需要的包
var request = require('request');
var cheerio = require('cheerio');

//定义常量
var dolphin = 'http://cn.dolphin.com/blog';

//数据请求
function dataRequest(dataUrl) {
    //发送请求
    request({
        url: dataUrl,
        method: 'GET'
    }, function (err, red, body) {
        //请求到body
        if (err) {
            console.log(dataUrl);
            console.error('[ERROR]Collection' + err);
            return;
        }

        if (dataUrl && dataUrl === dolphin) {
            dataPraseDolphin(body);
        }
    })
}

/**
 * 解析html
 */
function dataPraseDolphin(body) {

    var $ = cheerio.load(body);

    var atricles = $('#content').children('.status-publish');

    for (var i = 0; i < atricles.length; i++) {
        var article = atricles[i];

        var $a = $(article).find('.post-title .entry-title a');
        var $p = $(article).find('.post-content p');

        var $aVal = $($a).text();
        var $pVal = $($p).text();

        if ($p) {
            console.info('--------------' + (i + 1) + ' Chapter------------------');
            console.info('标题：' + $aVal);
            console.info('简介：' + $pVal);
            console.info('时间：' + new Date)
            console.info('---------------------------------------------------');
        }
    }
}

//开始发送请求 并 采集数据
dataRequest(dolphin);