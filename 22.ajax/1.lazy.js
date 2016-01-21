/**
 * 获取一系列函数的最大返回值
 */
function Max1() {return 1;}
function Max2() {return 2;}
function Max3() {return 3;}

function getMax() {
    console.log('compare');
    var fns = [Max1, Max2, Max3];
    var max = fns[0](), maxFn = fns[0];
    for (var i = 1; i < fns.length; i++) {
        var val = fns[i]();
        if (val > max) {
            max = val;
            maxFn = fns[i];
        }
    }
    getMax = maxFn;
    return max;
}
var max1 = getMax();
var max2 = getMax();
console.log(max1,max2);