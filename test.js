// 聖誕樹
// * 基數 2n+1
// ｜ 2n-1

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin
});

var lines = []

// 讀取到一行，先把這一行加進去 lines 陣列，最後再一起處理
rl.on('line', function (line) {
    lines.push(line)
});

// 輸入結束，開始針對 lines 做處理
rl.on('close', function () {
    solve(lines)
})

function multiplication(nums) {
    var numList = nums[0].split(" ");
    for (var i = Number(numList[0]); i <= Number(numList[1]); i++) {
        var strNum = String(i);
        var len = strNum.length;
        var num = 0;
        for (var j = 0; j < len; j++) {
            num += Math.pow(Number(strNum[j]), len);
        }
        if (num === i) {
            console.log(i);
        }
    }
}

// 上面都不用管，只需要完成這個 function 就好，可以透過 lines[i] 拿取內容
function solve(num) {
    multiplication(num);
}