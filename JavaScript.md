JavaScript 無法單獨執行，一定要有執行環境，不然很多指令無法使用。

### runtime 執行環境
- 瀏覽器
- 本地端安裝 Node.js

### 在本地端執行 JavaScript 程式
`node` 開啟 node.js 運行環境  
`> console.log('123')` 欲執行程式  

跳出 node.js 執行狀態
- `>^C`  mac : control鍵 ＋ Ｃ *2遍  
- `>.exit`


### 基本運算
| 運算符 | 名稱 | 例子 | 回傳|
|  :----  | :----  | :----  | :----  |
| `+` | 加法 | 3+2 |5|
|`-`| 減法 | 3-2 |1|
|`*`| 乘法 | 3*2 |6|
|`/`| 除法 | 3/2 |1.5|
|`%`| 取餘數 | 2％2 |0|

##### 參考資料
[算術運算符](https://developer.mozilla.org/zh-TW/docs/Learn/JavaScript/First_steps/Math)   

### 邏輯運算子 || 與 &&

| 運算符 | 名稱 |   
|  :----  | :----  |   
| `｜｜` | or |   
|`&&`| and |   
|`!`| not |   

#### 短路邏輯＆短路求值
 >Javascript 裡面只要是 0、""、null、false、undefined、NaN 都會被判定為 false

 - ||  的特性是只要其中一個為 true 就為 true，因此如果第一個運算式符合就直接返回不會做第二個
![螢幕快照 2020-06-23 上午12.23.49](https://i.imgur.com/Wu3bymg.png)

- && 的特性是只要有一個 false 就是 false
![螢幕快照 2020-06-23 上午12.22.20](https://i.imgur.com/bAXFx3P.png)


##### 參考資料
[運算式與運算子](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide/Expressions_and_Operators)  

[Javascript 基礎打底系列 (三) - 邏輯運算子，與短路邏輯 (short circuit logic) ](https://sweeteason.pixnet.net/blog/post/43022921-javascript-%E5%9F%BA%E7%A4%8E%E6%89%93%E5%BA%95%E7%B3%BB%E5%88%97-%28%E4%B8%89%29---%E9%82%8F%E8%BC%AF%E9%81%8B%E7%AE%97%E5%AD%90%EF%BC%8C%E8%88%87)

## 變數
#### 命名規則
- 宣告大小寫有區別
- 不可使用保留字
- 駝峰式命名  ex:`thisIsBox` 
命名方式：通常是只第一單字小寫，其他單字大寫的情況

- Snake Case  ex:`first_name` 
單字與單字間使用下劃線分隔


`not definde` 完全找不到此變數  
`undefined` 有此變數，但無內容

```
var box = 3
```
這個意思不是 `box = 3` 而是 set box to 3 ，把 3 放在 box 這個變數裡。

## ++ -- 算術運算子
### i ++ 與 ++ i 差別
單純看輸出結果會感覺 `i ++` 等於 `++ i` 
![螢幕快照 2020-06-25 下午1.03.08](https://i.imgur.com/YxsgwiE.png)

但丟到運算式後
`i ++` 會等程式跑完再執行，而 `++ i` 會先跑在跑程式，所以兩者的輸出結果是不同的
![螢幕快照 2020-06-25 下午1.01.52](https://i.imgur.com/NlSIeTZ.png)

```
考題：算出下方的數值
var A = 2;
var B = 2;

AA = (A++) + (A++);
BB = (++B) + (B++);
```

```
答案
AA = 5
BB = 6 
```

![螢幕快照 2020-06-25 下午1.29.07](https://i.imgur.com/roEGqVo.png)




## 變數各種型態
`typeof` 判斷變數型態的語法


### 變數型態總覽

`number`
`string`
`undefined`
`boolean`
`functon`
`object`
> tips: `typeof null === 'object'`

## 變數運算
要注意型態

轉數字型態
`parseInt()`
`Number()`

```
var a = '10';
var b = 20;
console.log(a + b);

結果
1020
```

### 浮點數誤差
```
var a = 0.1 + 0.2;
console.log(a);

結果
0.30000000000000004
```

### == 與 ===
`==` 寬鬆比對 
`===` 嚴格比對，連型態都要對

```
console.log(10 == '10');
console.log(10 === '10');

結果
true
false
```

### 真正理解變數
雖然內容相同，但電腦是存在不同的箱子 （記憶體）
![螢幕快照 2020-06-25 下午8.53.40](https://i.imgur.com/pCvvmte.png)

```
console.log([] === []);
console.log([1] === [1]);
console.log({} === {});
console.log({a: 1} === {a: 1});

結果
false
false
false
false
```
![螢幕快照 2020-06-25 下午8.59.36](https://i.imgur.com/gr4C3Hh.png)
```
var obj = {
    a: 1
};
var obj2 = obj;
console.log(obj === obj2);

obj2.a = 2;
console.log(obj);
console.log(obj2);

結果
true
{ a: 2 }
{ a: 2 }
```


程式執行順序 右 -> 左

```
var a = 0;
console.log(a = 1);
執行順序
-> a = 1
-> console.log(a)

結果
1
```

```
var a = 10 == 10;
console.log(a);
執行順序
-> 10 == 10
-> a = 10

結果
true
```

---

### 陣列(Array)
陣列寫法
```
var Array [];

ex:
var Array [1,2,3......,10];
```

`{Array}.length` 取得陣列長度
`{Array}.push({內容})` 把新的資訊push到array
`{Array[{索引值}]}`  取得陣列裡面的特定資訊

```
var A = 1;
var B = 2;
.
.
.
var Z = 26;

陣列寫法 （含有物件寫法）
var engNum = [{ A : 1},{ B : 2}......,{ Z : 26}] 
```

#### 取值
```
var engNum = [{A:1},{B:2}];
console.log(engNum[0]);

結果
{A:1}
```


儲存性質相似的資訊
![螢幕快照 2020-06-25 下午1.39.07](https://i.imgur.com/fpcGHlo.png)


### 物件(Object)
物件寫法
```
var Object = {key:value};

ex:
var Object = {A:1,B:2,C:3};
```

#### 取值
```
var peter = {
    name: 'peter',
    scores: [1, 2, 3],
    address: 'taipei city',
    phone: '010101',
    father: {
        name: 'nick',
        phone: '12345'
    }
};

var key = 'name';
console.log(peter.name);
console.log(peter[key]);
console.log(peter.father.name);
console.log(peter['father']['name']);

結果
peter
peter
nick
nick
```
---

## if / else /else if

```
if (true) {
    console.log(123);
}
if (false) {
    console.log(456);
}

結果
123
```
## 三元運算子
```
if (1 === 1){
    console.log('是對的')
}else{
    console.log('是錯的')
}

結果
是對的
```

三元運算子 寫法
```
(1 === 1) ? console.log('是對的'): console.log('是錯的') ;


結果
是對的
```

```
var age = 10;
if (age >= 65) {
    console.log('老人');
} else if (age < 65 && age >= 20) {
    console.log('年輕人');
} else {
    console.log('小孩');
}

結果
小孩
```
## switch case

```
var month = 2;

switch (month) {
    case 1:
        console.log('1月');
        break;
    case 2:
        console.log('2月');
        break;
}

結果
2月
```
