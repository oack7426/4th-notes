var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin
});

var lines = [];

// 讀取到一行，先把這一行加進去 lines 陣列，最後再一起處理
rl.on('line', function (line) {
    lines.push(line);
});

// 輸入結束，開始針對 lines 做處理
rl.on('close', function () {
    solve(lines[0]);
})

// 上面都不用管，只需要完成這個 function 就好，可以透過 lines[i] 拿取內容
function solve(num) {
    // 從左邊算起來的第一個數字為發卡行， MASTER_CARD 是 5 開頭， VISA 是 4， JCB 則是 3
    const arrayNum = num.split("-");
    const cardNum = arrayNum.join("");
    var total = 0;
    if (cardNum.length !== 16) {
        console.log('INVALID');
        return;
    }
    for (var i = 0; i < cardNum.length - 1; i++) {
        if (i % 2 != 0) { //偶數位
            total = total + Number(cardNum[i]);
        } else { //奇數位
            if ((Number(cardNum[i]) * 2) >= 10) {
                total = total + ((Number(cardNum[i]) * 2) - 9);
            } else {
                total = total + (Number(cardNum[i]) * 2);
            }
        }
    }
    var lastNum = total % 10;
    if (lastNum != 0) {
        lastNum = 10 - lastNum;
    }
    if (lastNum == Number(cardNum[15])) {
        switch (cardNum[0]) {
            case "4":
                console.log('VISA');
                break;
            case "5":
                console.log('MASTER_CARD');
                break;
            default:
                console.log('INVALID');
        }
    } else {
        console.log('INVALID');
    }
}