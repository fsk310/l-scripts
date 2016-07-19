var s = "张三56分，李四74分，王五92分，赵六84分";
var a = s.match(/\d+/g), sum = 0;
for (var i = 0; i<a.length; i++) {
    sum += parseFloat(a[i]);
}
var avg = sum/a.length;
function f() {
    var n = parseFloat(arguments[1]);
    return n + "分(" +((n>avg)? ("超出平均分" + (n-avg)) : ("低于平均分"+(avg-n)))+"分)";
}
var s1 = s.replace(/(\d+)分/g, f);