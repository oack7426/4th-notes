// 【 練習四：寫一個能回傳 n 個 * 的函式】
// 請寫出一個叫做 star 的 function 並且接受一個參數 n，能回傳 n 個 *。

// star(1) 會回傳 *
// star(5) 會回傳 *****

// 所以 console.log(star(5)) 的預期輸出是：
// *****

function star(n) {
    var nArray = [];
    for (var i = 0; i < n; i++) {
        nArray.push('*');
    }
    return nArray.join('');
}

console.log(star(5));