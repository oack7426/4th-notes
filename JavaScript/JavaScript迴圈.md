`break` 跳出迴圈
`continue` 跳出此迴圈往下執行下一次迴圈

## do while 寫法
先執行程式，在檢查條件

```
var i = 1; // 初始值

do {
    console.log(i);
    i++ 
} while (i <= 100) // 終止條件
console.log("i=", i);

結果
跑出 1~ 100
i = 101
```

```
var i = 1;

do {
    console.log(i);
    i++
    if (i > 100) {
        break; //跳出迴圈
    }
} while (true)

console.log("i=", i);

結果
跑出 1~ 100
i = 101
```

```
var i = 1;

do {
    i++
    if (i % 2 === 1) {
        continue //跳到下一次迴圈
    }
    console.log(i);
} while (i <= 100)

console.log("i=", i);

結果
只顯示2~ 100 雙數
i = 101
```

## while 迴圈
先檢查條件，在執行程式

```
var i = 1;

while (i <= 100) {
    console.log(i);
    i++;
}
console.log("i=", i);

結果
跑出 1~ 100
i = 101
```

## for 迴圈
```
for (var i = 0; i <= 100; i++) {
    console.log(i);
}
console.log("i=" + i);

結果
跑出 1~ 100
i = 101
```
