## 宣告 function
```
function name() {
    console.log('hello')
}
```
```
var name = function () {
    console.log('hello')
}
```

匿名函式
```
function() {
    console.log('hello')
}
```

## function 用法
```
function name(text) {
    console.log(text);
}
name('123');

結果
123
```

### function 當參數傳入 function

```
function print(any) {
    any()
}

function hello() {
    console.log('hello')
}

print(hello);

結果
hello
```


```
function transform(arr, transformFunction) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        result.push(transformFunction(arr[i]))
    }
    return result
}

function triple(x) {
    return x * 3
}

console.log(
    transform([1, 2, 3], triple)
);

結果
[ 3, 6, 9 ]
```

也可以直接放匿名 funciton
```
function transform(arr, transformFunction) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        result.push(transformFunction(arr[i]))
    }
    return result
}


console.log(
    transform([1, 2, 3], function (x) {
        return x * 3
    })
);
```

## 參數 parameter / 引數 argument
下方範例為例
`a b` 為參數
`3 5` 為引數
```
function add(a,b){ // a b 為參數
    return a+b
}

add(3,5) // 3 5 為引數
```


### arguments 印出所有引數
`arguments` 印出所有引數
會以“物件”呈現
修改了 `arguments` 的值，原本的參數也會被修改

```
function add(a, b) {
    console.log(arguments);
    return a + b;
}

console.log(add(2, 5));

結果
[Arguments] { '0': 2, '1': 5 }
7
```

##### 參考資料
[Arguments 物件
](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Functions/arguments)  
[學JS的心路歷程 Day7-函式（二） arguments](https://ithelp.ithome.com.tw/articles/10204008)  

## function 傳參數的運作機制

不會改到外層的變數
```
function Num(a, b) {
    var num = 20;
    a = b;
    b = num;
    console.log('a:' + a + 'b:' + b);
}

var numA = 10;
var numB = 20;
Num(numA, numB);
console.log(numA, numB);

結果
a:20b:20
10 20
```

改到外面的物件
pass by value
pass by sharing
~~pass by reference (js 沒有)~~

```
function Num(obj) {
    obj.name = 100;
}

var objA = {
    name: 1
}

Num(objA);
console.log(objA.name);

結果
100
```

#### 參考資料
[深入探討 JavaScript 中的參數傳遞：call by value 還是 reference？](https://blog.techbridge.cc/2018/06/23/javascript-call-by-value-or-reference/)

## return 使用時機
不需要知道結果，只單純執行就不需要 `return`，且預設回傳 `undefined`
```
function dosomething() {
    console.log('hello');
}
var result = dosomething();
console.log(result);

結果
ｈello
undefined
```


需要知道結果，需把結果傳回去
```
function needResult(x) {
    return x + 2;
}
var result = needResult(3);
console.log(result);

結果
5
```