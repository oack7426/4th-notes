
[程度測驗網址](https://oj.lidemy.com/problem?tag=%E7%A8%8B%E5%BA%A6%E6%B8%AC%E9%A9%97&page=1)
題目都會就不需要上課

[課程相關資源](https://github.com/Lidemy/ALG101-too-weak-to-leetcode)

裡面有分不同的 Unit，每一個單元底下的所有資源都可以在這邊找到，包括 Project 的內容以及範例程式碼，還有作業檢討的範例程式碼

## 類型
實作 function
檔案 I/O (LIOI)

---
## 模板
[關於 OJ 的輸入與輸出
](https://oj.lidemy.com/)

## 執行範例
執行，輸入文字，會自動印出
`ctrl + C` 強制中斷關閉程式
`ctrl + D` 執行關閉程式 `rl.on('close', function () {})`
![螢幕快照 2020-06-30 下午10.10.25](https://i.imgur.com/c9L1Ftg.png)

```
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin
});
執行程式 - 使用者輸入內容印出
rl.on('line', function (line) {
    console.log('input:', line);
});
關閉程式時執行 (ctrl + D 執行)
rl.on('close', function () {
    console.log('close');
});

```

## 測試
way1 : 直接用 node 測試 在 node 輸入值
way2 : 直接呼叫 `function` ＆ `console.log` 用 node 測 
way3 : 新增.txt檔，放要輸入的文字 `cat {XX}.txt | node {XX}.js`

## Pseudo Code 
右邊是 Pseudo Code 
![螢幕快照 2020-06-30 下午11.00.55](https://i.imgur.com/zxWidfU.png)
![螢幕快照 2020-06-30 下午11.02.39](https://i.imgur.com/7LbtDIS.png)


