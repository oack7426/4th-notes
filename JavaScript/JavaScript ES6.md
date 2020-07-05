ES6 解釋：ECMAScript 6 在 2015 年正式發佈
ES6 = ES2015

## 定義變數
`let`   作用域變數
`const` 常數 （永不變）

## Template Literals 字串模板
範例
```
var name = '小哩';
var str = `你好，我是${name}`;
console.log(str);

結果
你好，我是小哩
```

## Destructuring 解構
可用在 `array` 跟 `object`

`array`範例
```
const arr = [2, 3, 4];
var [first, second] = arr;
console.log(first, second)

結果
2 3
```

`object`範例 - 也可以雙層解構
```
const obj = {
    name: 'nick'
};
var {name} = obj
console.log(name);

結果
nick
```

## Spread Operator 展開
也可以用在複製 `array` `object` 的值  
`...{要展開的陣列or變數}` 展開 
```
var arrIn = ['A', 'B', 'C'];
var arr1 = [1, 2, 3, arrIn];
var arr2 = [1, 2, 3, ...arrIn]; // 展開arrIn

console.log(arr1);
console.log(arr2);

結果
[ 1, 2, 3, [ 'A', 'B', 'C' ] ]
[ 1, 2, 3, 'A', 'B', 'C' ]
```

## Rest Parameters 類反向展開

```
var arr = ['A', 'B', 'C', 'D'];
var [first, ...rest] = arr;
console.log(first);
console.log(rest); //印出剩下的

結果
A
[ 'B', 'C', 'D' ]
```

 
## Default Parameters 預設值

範例
```
function repeat(str, num = 5) { //num 沒帶值的話，預設為5
    return str.repeat(num);
}
console.log(repeat('abc'));

結果
abcabcabcabcabc
```
## Arrow Function 箭頭函式 
>TODO:筆記待補

## export 與 import {}
簡化 module 寫法
>tips:
>無法使用 node 執行，會報錯

myModule.js
```
export function double(n) {
    return n * 2;
}
```

使用模組的檔案
```
import {
    double
} from './myModule.js';

console.log(double(5));
```

## Babel 套件
>TODO:筆記待補
ES6/7/8 轉換為 ES5 語法