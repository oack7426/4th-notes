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

##### 三元運算子 寫法
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
