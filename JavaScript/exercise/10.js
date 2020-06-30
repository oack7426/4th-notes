// 【 練習十：回傳陣列總和 】
// 請寫一個 function sum，接收一個陣列並回傳陣列中數字的總和。
// sum([1, 2, 3]) 預期回傳值：6
// sum([-1, 1, 2, -2, 3, -3]) 預期回傳值：0

function sum(Arr) {
    var Array = [];
    Array = Arr;
    var NumTotal = 0;
    for (var i = 0; i < Array.length; i++) {
        NumTotal += Array[i];
    }
    return NumTotal;
}

console.log(sum([1, 2, 3]));