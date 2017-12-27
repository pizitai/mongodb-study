

var str=`"activeInvestors|investor":[{"avatar":"https://pic.36krcnd.com/avatar/201
705/08032629/p4iqc9xxucfkf66o.jpg!480","coinvestorType":"NONE","enterpriser":"0"
,"id":"301034629","investorType":"10","inviterUid":"0","is36kr":false,"isOrganiz
ationCoinvestor":false,"leadInvestorType":"NONE","name":"章燕","nickName":"夏未"
,"source":"0","status":"2"},{"avatar":"https://pic.36krcnd.com/avatar/201706/050
94530/ydjh52sqaxj62jgd.jpg!480","coinvestorType":"NONE","enterpriser":"0","id":"
488194937","investorType":"20","inviterUid":"0","is36kr":false,"isOrganizationCo
investor":false,"leadInvestorType":"NONE","name":"王君超","nickName":"新用户4881
94937","source":"0","status":"2"},{"avatar":"https://pic.36krcnd.com/avatar/2017
04/21063003/oo11ygda46fynotu.jpeg!480","coinvestorType":"COINVESTOR","enterprise
r":"0","id":"1073791836","intro":"关注TMT、消费生活、文娱体育、户外旅游等热点领
域","investorType":"20","inviterUid":"0","is36kr":false,"isOrganizationCoinvesto
r":false,"leadInvestorType":"NONE","name":"冯子刚","nickName":"冯子刚","source":
"0","status":"2"},{"coinvestorType":"NONE","enterpriser":"0","id":"2147069913","
investorType":"10","inviterUid":"0","is36kr":false,"isOrganizationCoinvestor":fa
lse,"leadInvestorType":"NONE","name":"武凯文","nickName":"新用户2147069913","sou
rce":"0","status":"2"},{"avatar":"https://pic.36krcnd.com/avatar/201711/08065035
/pqiwaak2gqgdu8bc.jpeg!480","coinvestorType":"NONE","enterpriser":"0","id":"2147
060064","investorType":"10","inviterUid":"0","is36kr":false,"isOrganizationCoinv
estor":false,"leadInvestorType":"NONE","name":"吴浩","nickName":"新用户214706006
4","source":"0","status":"2"}],"followCompanies|company"`;
var arr = new Array();
console.log(str)
str = str.replace(/[\r\n]/g, "")

//正则表达式无全局标志g
arr = str.match(/\[(.*)\]/);
//返回结果数组
console.log(arr);
//返回结果数组长度 本示例结果为：2
console.log('返回结果数组长度：' + arr.length);
//返回结果数组的第一个元素 本示例结果为：前端
console.log('返回结果数组的第一个元素：' + arr[0]);
//返回结果数组的第二个元素 本示例结果为：前端
console.log('返回结果数组的第二个元素：' + arr[1]);

