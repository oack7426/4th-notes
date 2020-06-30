// 【 練習二：寫一個能夠印出 1~n 的函式 】
// 請寫一個函式叫做 print， 接收一個是數字的參數 n， 並且印出 1~n。
/*
print(1) 預期輸出：
1

print(3) 預期輸出：
1
2
3

print(9) 預期輸出：
1
2
3
4
5
6
7
8
9

*/

function print(n) {
    var nArray = [];
    for (var i = 0; i < n; i++) {
        nArray.push(i + 1);
    }
    console.log(nArray.join('\n'));
}
print(9);