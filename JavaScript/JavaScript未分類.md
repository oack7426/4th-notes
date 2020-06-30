## Immutable 不可變
>tips:
>Immutable value 值是不會變的
>物件 陣列 以外都是不可變的

範例的 a 雖然被改變了
但其實概念是
a = 'hello' 存在記憶體0X01
a = 'yo' 存在記憶體0X02
```
var a = 'hello';
a = 'yo'
console.log (a)

結果
yo
```

因為值不會被改變
```
var a = 'hello';
a.split('');
console.log(a);

結果
hello
```

所以要把a 的值改變就得

```
var a = 'hello';
a = a.split('');
console.log(a);

結果
[ 'h', 'e', 'l', 'l', 'o' ]
```

## 陣列 ＆ 物件 值會被改變

```
var a = 'hello';
a = a.split('');
console.log(a); // 到這裡 a 的值成功被改變，且變為 陣列


a.reverse(); // 成功改變 a 陣列排序
console.log(a);

結果
[ 'h', 'e', 'l', 'l', 'o' ]
[ 'o', 'l', 'l', 'e', 'h' ]
```

